from sqlalchemy.orm import Session
from sqlalchemy import or_
import json
from models import ContactMessage, NewsletterSubscription, Service, Project
from schemas import (
    ContactMessageCreate, NewsletterSubscriptionCreate,
    ServiceResponse, ProjectResponse
)

# Contact Message CRUD
def create_contact_message(db: Session, contact: ContactMessageCreate):
    db_contact = ContactMessage(
        name=contact.name,
        email=contact.email,
        company=contact.company,
        phone=contact.phone,
        service=contact.service,
        message=contact.message
    )
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

def get_contact_messages(db: Session, skip: int = 0, limit: int = 100):
    return db.query(ContactMessage).offset(skip).limit(limit).all()

def get_contact_message(db: Session, contact_id: int):
    return db.query(ContactMessage).filter(ContactMessage.id == contact_id).first()

# Newsletter CRUD
def create_newsletter_subscription(db: Session, subscription: NewsletterSubscriptionCreate):
    # Check if email already exists
    existing = db.query(NewsletterSubscription).filter(
        NewsletterSubscription.email == subscription.email
    ).first()

    if existing:
        if not existing.is_active:
            existing.is_active = True
            db.commit()
            db.refresh(existing)
        return existing

    db_subscription = NewsletterSubscription(
        email=subscription.email,
        name=subscription.name
    )
    db.add(db_subscription)
    db.commit()
    db.refresh(db_subscription)
    return db_subscription

def get_newsletter_subscriptions(db: Session, skip: int = 0, limit: int = 100):
    return db.query(NewsletterSubscription).offset(skip).limit(limit).all()

# Service CRUD
def get_services(db: Session):
    services = db.query(Service).filter(Service.is_active == True).all()
    # Parse JSON fields
    for service in services:
        if service.features:
            service.features = json.loads(service.features)
        if service.technologies:
            service.technologies = json.loads(service.technologies)
    return services

def get_service(db: Session, service_id: int):
    service = db.query(Service).filter(
        Service.id == service_id,
        Service.is_active == True
    ).first()
    if service:
        if service.features:
            service.features = json.loads(service.features)
        if service.technologies:
            service.technologies = json.loads(service.technologies)
    return service

# Project CRUD
def get_projects(db: Session, category: str = None, skip: int = 0, limit: int = 100):
    query = db.query(Project).filter(Project.is_active == True)

    if category:
        query = query.filter(Project.category == category)

    projects = query.offset(skip).limit(limit).all()

    # Parse JSON fields
    for project in projects:
        if project.technologies:
            project.technologies = json.loads(project.technologies)
        if project.features:
            project.features = json.loads(project.features)
        if project.results:
            project.results = json.loads(project.results)

    return projects

def get_project(db: Session, project_id: int):
    project = db.query(Project).filter(
        Project.id == project_id,
        Project.is_active == True
    ).first()

    if project:
        if project.technologies:
            project.technologies = json.loads(project.technologies)
        if project.features:
            project.features = json.loads(project.features)
        if project.results:
            project.results = json.loads(project.results)

    return project

def get_featured_projects(db: Session, limit: int = 6):
    projects = db.query(Project).filter(
        Project.is_featured == True,
        Project.is_active == True
    ).limit(limit).all()

    # Parse JSON fields
    for project in projects:
        if project.technologies:
            project.technologies = json.loads(project.technologies)
        if project.features:
            project.features = json.loads(project.features)
        if project.results:
            project.results = json.loads(project.results)

    return projects
