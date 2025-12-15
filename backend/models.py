from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from database import Base

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    company = Column(String(100))
    phone = Column(String(20))
    service = Column(String(50), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    is_read = Column(Boolean, default=False)

class NewsletterSubscription(Base):
    __tablename__ = "newsletter_subscriptions"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(100), unique=True, nullable=False)
    name = Column(String(100))
    subscribed_at = Column(DateTime(timezone=True), server_default=func.now())
    is_active = Column(Boolean, default=True)

class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    slug = Column(String(100), unique=True, nullable=False)
    description = Column(Text, nullable=False)
    short_description = Column(String(200))
    icon = Column(String(50))
    features = Column(Text)  # JSON string of features
    technologies = Column(Text)  # JSON string of technologies
    category = Column(String(50), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    slug = Column(String(200), unique=True, nullable=False)
    description = Column(Text, nullable=False)
    short_description = Column(String(300))
    category = Column(String(50), nullable=False)
    client = Column(String(100))
    duration = Column(String(50))
    image_url = Column(String(500))
    demo_url = Column(String(500))
    github_url = Column(String(500))
    technologies = Column(Text)  # JSON string of technologies
    features = Column(Text)  # JSON string of features
    results = Column(Text)  # JSON string of results
    is_featured = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
