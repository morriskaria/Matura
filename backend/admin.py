#!/usr/bin/env python3
"""
Simple admin script for managing MaturaCo database
Run with: python admin.py
"""

from database import SessionLocal
from crud import get_contact_messages, get_newsletter_subscriptions
from models import ContactMessage, NewsletterSubscription
import json

def print_header(title):
    print(f"\n{'='*50}")
    print(f" {title}")
    print(f"{'='*50}")

def view_contacts():
    """View all contact messages"""
    db = SessionLocal()
    try:
        contacts = get_contact_messages(db)
        print_header(f"Contact Messages ({len(contacts)})")

        for contact in contacts:
            print(f"\nID: {contact.id}")
            print(f"Name: {contact.name}")
            print(f"Email: {contact.email}")
            print(f"Company: {contact.company or 'N/A'}")
            print(f"Phone: {contact.phone or 'N/A'}")
            print(f"Service: {contact.service}")
            print(f"Message: {contact.message[:100]}{'...' if len(contact.message) > 100 else ''}")
            print(f"Date: {contact.created_at}")
            print(f"Read: {'Yes' if contact.is_read else 'No'}")
            print("-" * 30)
    finally:
        db.close()

def view_newsletter():
    """View all newsletter subscriptions"""
    db = SessionLocal()
    try:
        subscriptions = get_newsletter_subscriptions(db)
        print_header(f"Newsletter Subscriptions ({len(subscriptions)})")

        for sub in subscriptions:
            print(f"\nID: {sub.id}")
            print(f"Email: {sub.email}")
            print(f"Name: {sub.name or 'N/A'}")
            print(f"Subscribed: {sub.subscribed_at}")
            print(f"Active: {'Yes' if sub.is_active else 'No'}")
            print("-" * 30)
    finally:
        db.close()

def mark_contact_read(contact_id):
    """Mark a contact message as read"""
    db = SessionLocal()
    try:
        contact = db.query(ContactMessage).filter(ContactMessage.id == contact_id).first()
        if contact:
            contact.is_read = True
            db.commit()
            print(f"✓ Contact message {contact_id} marked as read")
        else:
            print(f"✗ Contact message {contact_id} not found")
    except Exception as e:
        db.rollback()
        print(f"✗ Error: {e}")
    finally:
        db.close()

def stats():
    """Show database statistics"""
    db = SessionLocal()
    try:
        contact_count = db.query(ContactMessage).count()
        newsletter_count = db.query(NewsletterSubscription).filter(NewsletterSubscription.is_active == True).count()
        unread_count = db.query(ContactMessage).filter(ContactMessage.is_read == False).count()

        print_header("Database Statistics")
        print(f"Total Contact Messages: {contact_count}")
        print(f"Unread Contact Messages: {unread_count}")
        print(f"Active Newsletter Subscriptions: {newsletter_count}")

    finally:
        db.close()

def main():
    while True:
        print_header("MaturaCo Admin Panel")
        print("1. View Contact Messages")
        print("2. View Newsletter Subscriptions")
        print("3. Mark Contact as Read")
        print("4. View Statistics")
        print("5. Exit")

        choice = input("\nEnter your choice (1-5): ").strip()

        if choice == "1":
            view_contacts()
        elif choice == "2":
            view_newsletter()
        elif choice == "3":
            contact_id = input("Enter contact message ID: ").strip()
            try:
                mark_contact_read(int(contact_id))
            except ValueError:
                print("✗ Invalid ID")
        elif choice == "4":
            stats()
        elif choice == "5":
            print("Goodbye!")
            break
        else:
            print("✗ Invalid choice")

        input("\nPress Enter to continue...")

if __name__ == "__main__":
    main()
