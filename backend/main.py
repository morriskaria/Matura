from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from typing import List, Optional
import uvicorn

from database import SessionLocal, engine
from models import Base, ContactMessage, NewsletterSubscription, Service, Project
from schemas import (
    ContactMessageCreate, ContactMessageResponse,
    NewsletterSubscriptionCreate, NewsletterSubscriptionResponse,
    ServiceResponse, ProjectResponse
)
from crud import (
    create_contact_message, get_contact_messages,
    create_newsletter_subscription, get_newsletter_subscriptions,
    get_services, get_projects
)

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="MaturaCo API",
    description="Backend API for MaturaCo technology company website",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "http://127.0.0.1:3000"],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
async def root():
    """Root endpoint with API information"""
    return {
        "message": "Welcome to MaturaCo API",
        "version": "1.0.0",
        "docs": "/docs",
        "status": "running"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}

# Contact endpoints
@app.post("/api/contact/", response_model=ContactMessageResponse)
async def submit_contact_form(
    contact: ContactMessageCreate,
    db: Session = Depends(get_db)
):
    """Submit a contact form message"""
    try:
        db_contact = create_contact_message(db=db, contact=contact)
        return db_contact
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/api/contact/", response_model=List[ContactMessageResponse])
async def get_contact_messages_endpoint(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """Get all contact messages (admin endpoint)"""
    contacts = get_contact_messages(db, skip=skip, limit=limit)
    return contacts

# Newsletter endpoints
@app.post("/api/newsletter/", response_model=NewsletterSubscriptionResponse)
async def subscribe_to_newsletter(
    subscription: NewsletterSubscriptionCreate,
    db: Session = Depends(get_db)
):
    """Subscribe to newsletter"""
    try:
        db_subscription = create_newsletter_subscription(db=db, subscription=subscription)
        return db_subscription
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/api/newsletter/", response_model=List[NewsletterSubscriptionResponse])
async def get_newsletter_subscriptions_endpoint(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """Get all newsletter subscriptions (admin endpoint)"""
    subscriptions = get_newsletter_subscriptions(db, skip=skip, limit=limit)
    return subscriptions

# Services endpoints
@app.get("/api/services/", response_model=List[ServiceResponse])
async def get_services_endpoint(db: Session = Depends(get_db)):
    """Get all services"""
    services = get_services(db)
    return services

# Portfolio/Projects endpoints
@app.get("/api/projects/", response_model=List[ProjectResponse])
async def get_projects_endpoint(
    category: Optional[str] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """Get all projects, optionally filtered by category"""
    projects = get_projects(db, category=category, skip=skip, limit=limit)
    return projects

@app.get("/api/projects/{project_id}", response_model=ProjectResponse)
async def get_project_endpoint(
    project_id: int,
    db: Session = Depends(get_db)
):
    """Get a specific project by ID"""
    from crud import get_project
    db_project = get_project(db, project_id=project_id)
    if db_project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return db_project

# Error handlers
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail, "status_code": exc.status_code}
    )

@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error", "status_code": 500}
    )

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
