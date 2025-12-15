# MaturaCo Backend API

FastAPI backend for the MaturaCo technology company website.

## Features

- **Contact Form API**: Handle contact form submissions
- **Newsletter API**: Manage newsletter subscriptions
- **Services API**: Retrieve service information
- **Portfolio API**: Access project portfolio data
- **Admin Panel**: Simple CLI admin interface
- **SQLite Database**: Lightweight database for development/production

## Quick Start

### Prerequisites

- Python 3.8+
- pip (Python package manager)

### Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Seed the database with sample data:**
   ```bash
   python seed_data.py
   ```

### Running the API

1. **Start the development server:**
   ```bash
   python main.py
   ```

   Or using uvicorn directly:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

2. **Access the API:**
   - API Documentation: http://localhost:8000/docs
   - Alternative Docs: http://localhost:8000/redoc
   - Health Check: http://localhost:8000/health

## API Endpoints

### Contact Messages
- `POST /api/contact/` - Submit contact form
- `GET /api/contact/` - Get all contact messages (admin)

### Newsletter
- `POST /api/newsletter/` - Subscribe to newsletter
- `GET /api/newsletter/` - Get all subscriptions (admin)

### Services
- `GET /api/services/` - Get all services

### Projects
- `GET /api/projects/` - Get all projects
- `GET /api/projects/{id}` - Get specific project
- `GET /api/projects/?category=web` - Filter by category

## Admin Panel

Use the admin script to manage data:

```bash
python admin.py
```

Features:
- View contact messages
- View newsletter subscriptions
- Mark messages as read
- View database statistics

## Database Schema

### ContactMessage
- id: Primary key
- name: Contact name
- email: Contact email
- company: Company name (optional)
- phone: Phone number (optional)
- service: Service of interest
- message: Contact message
- created_at: Timestamp
- is_read: Read status

### NewsletterSubscription
- id: Primary key
- email: Subscriber email
- name: Subscriber name (optional)
- subscribed_at: Timestamp
- is_active: Subscription status

### Service
- id: Primary key
- title: Service title
- slug: URL-friendly identifier
- description: Full description
- short_description: Brief description
- icon: Icon identifier
- features: JSON array of features
- technologies: JSON array of technologies
- category: Service category
- is_active: Active status
- created_at/updated_at: Timestamps

### Project
- id: Primary key
- title: Project title
- slug: URL-friendly identifier
- description: Full description
- short_description: Brief description
- category: Project category
- client: Client name
- duration: Project duration
- image_url: Project image URL
- demo_url: Demo URL
- github_url: GitHub repository URL
- technologies: JSON array of technologies
- features: JSON array of features
- results: JSON array of results
- is_featured: Featured project flag
- is_active: Active status
- created_at/updated_at: Timestamps

## Environment Variables

Create a `.env` file in the backend directory:

```env
DATABASE_URL=sqlite:///./maturaco.db
# Optional: For production database
# DATABASE_URL=postgresql://user:password@localhost/maturaco_db
```

## Deployment

### Development
```bash
python main.py
```

### Production
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Docker (optional)
```dockerfile
FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
RUN python seed_data.py

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## CORS Configuration

The API is configured to accept requests from:
- `http://localhost:3000` (React development)
- `http://localhost:5173` (Vite development)
- `http://127.0.0.1:3000`

Update the CORS origins in `main.py` for production deployment.

## Sample API Usage

### Submit Contact Form
```bash
curl -X POST "http://localhost:8000/api/contact/" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "John Doe",
       "email": "john@example.com",
       "company": "ABC Corp",
       "service": "Software Development",
       "message": "I am interested in your services."
     }'
```

### Get Services
```bash
curl "http://localhost:8000/api/services/"
```

### Get Projects by Category
```bash
curl "http://localhost:8000/api/projects/?category=web"
```
