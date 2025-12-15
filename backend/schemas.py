from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

# Contact Message schemas
class ContactMessageBase(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    service: str
    message: str

class ContactMessageCreate(ContactMessageBase):
    pass

class ContactMessageResponse(ContactMessageBase):
    id: int
    created_at: datetime
    is_read: bool

    class Config:
        from_attributes = True

# Newsletter schemas
class NewsletterSubscriptionBase(BaseModel):
    email: str
    name: Optional[str] = None

class NewsletterSubscriptionCreate(NewsletterSubscriptionBase):
    pass

class NewsletterSubscriptionResponse(NewsletterSubscriptionBase):
    id: int
    subscribed_at: datetime
    is_active: bool

    class Config:
        from_attributes = True

# Service schemas
class ServiceBase(BaseModel):
    title: str
    slug: str
    description: str
    short_description: Optional[str] = None
    icon: Optional[str] = None
    features: Optional[List[str]] = None
    technologies: Optional[List[str]] = None
    category: str

class ServiceResponse(ServiceBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# Project schemas
class ProjectBase(BaseModel):
    title: str
    slug: str
    description: str
    short_description: Optional[str] = None
    category: str
    client: Optional[str] = None
    duration: Optional[str] = None
    image_url: Optional[str] = None
    demo_url: Optional[str] = None
    github_url: Optional[str] = None
    technologies: Optional[List[str]] = None
    features: Optional[List[str]] = None
    results: Optional[List[str]] = None

class ProjectResponse(ProjectBase):
    id: int
    is_featured: bool
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
