# MaturaCo - Technology Company Website

A modern, professional website for MaturaCo, a technology company specializing in software development, hardware solutions, automation, and IT consultancy.

## ✨ Features

### Frontend (React + TailwindCSS)
- 🎨 **Neon-themed dark design** with glowing effects
- 📱 **Fully responsive** (mobile, tablet, desktop)
- ⚡ **Framer Motion animations** for smooth interactions
- 🧩 **Reusable components** (GlassCard, GradientButton, etc.)
- 🔄 **Modern React architecture** with hooks and routing

### Backend (FastAPI + SQLite)
- 🚀 **RESTful API** with automatic OpenAPI documentation
- 📧 **Contact form handling** with data persistence
- 📬 **Newsletter subscription** management
- 🗂️ **Portfolio and services** API endpoints
- 👨‍💼 **Simple admin panel** for content management

### Design System
- 🌈 **Custom neon color palette** (pink, purple, blue, cyan)
- 💎 **Glassmorphism effects** with backdrop blur
- ✨ **Glowing animations** and gradients
- 🎯 **Professional typography** (Inter + Space Grotesk)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm (for frontend)
- Python 3.8+ and pip (for backend)

### 1. Clone and Setup

```bash
# Clone the repository
git clone <repository-url>
cd matura-website

# Setup backend
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python seed_data.py

# Setup frontend
cd ../frontend
npm install
```

### 2. Run Development Servers

```bash
# Terminal 1: Backend API
cd backend
python main.py
# API available at: http://localhost:8000

# Terminal 2: Frontend
cd frontend
npm run dev
# Frontend available at: http://localhost:5173
```

### 3. Access the Application

- **Frontend**: http://localhost:5173
- **API Documentation**: http://localhost:8000/docs
- **Admin Panel**: `python backend/admin.py`

## 📁 Project Structure

```
matura-website/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── assets/          # Static assets
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   ├── tailwind.config.js   # Tailwind configuration
│   └── vite.config.js       # Vite configuration
├── backend/                  # FastAPI backend
│   ├── main.py              # FastAPI application
│   ├── models.py            # SQLAlchemy models
│   ├── schemas.py           # Pydantic schemas
│   ├── crud.py              # Database operations
│   ├── database.py          # Database configuration
│   ├── seed_data.py         # Sample data seeder
│   ├── admin.py             # Admin CLI tool
│   └── requirements.txt
└── README.md
```

## 🎨 Design System

### Colors
```css
--neon-pink: #ff0080
--neon-purple: #8000ff
--neon-blue: #0080ff
--neon-cyan: #00ffff
--dark-900: #0a0a0a
--dark-800: #1a1a1a
--dark-700: #2a2a2a
```

### Components
- **GlassCard**: Translucent cards with backdrop blur
- **GradientButton**: Animated gradient buttons
- **ServiceCard**: Service showcase cards
- **Hero**: Landing page hero section

### Animations
- Floating background elements
- Smooth page transitions
- Hover effects and micro-interactions
- Scroll-triggered animations

## 🔧 API Endpoints

### Contact
- `POST /api/contact/` - Submit contact form
- `GET /api/contact/` - List contact messages

### Newsletter
- `POST /api/newsletter/` - Subscribe to newsletter
- `GET /api/newsletter/` - List subscriptions

### Services
- `GET /api/services/` - List all services

### Projects
- `GET /api/projects/` - List all projects
- `GET /api/projects/{id}` - Get project details
- `GET /api/projects/?category=web` - Filter by category

## 🚀 Deployment

### Frontend Deployment

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from frontend directory
cd frontend
vercel --prod
```

#### Netlify
```bash
# Build the frontend
cd frontend
npm run build

# Deploy to Netlify (drag & drop dist folder or use CLI)
```

### Backend Deployment

#### Railway (Recommended)
1. Create Railway account
2. Connect GitHub repository
3. Set environment variables:
   - `DATABASE_URL`: Your database URL
4. Deploy automatically

#### Render
1. Create Render account
2. Create new Web Service
3. Connect repository
4. Set build command: `pip install -r requirements.txt`
5. Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

#### DigitalOcean App Platform
1. Create App Platform app
2. Connect repository
3. Set runtime to Python
4. Configure environment variables

### Environment Variables

#### Backend (.env)
```env
DATABASE_URL=sqlite:///./maturaco.db
# For production, use PostgreSQL:
# DATABASE_URL=postgresql://user:password@host:port/database
```

#### Frontend (Vercel/Netlify)
```env
VITE_API_URL=https://your-api-domain.com
```

## 🛠️ Development

### Frontend Scripts
```bash
cd frontend
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Scripts
```bash
cd backend
python main.py              # Start development server
python seed_data.py         # Seed database with sample data
python admin.py             # Run admin panel
```

### Code Quality
- **Frontend**: ESLint for code linting
- **Backend**: Follow FastAPI best practices
- **Database**: SQLAlchemy ORM with proper relationships

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components adapt to different screen sizes with appropriate layouts and interactions.

## 🔒 Security Features

- **CORS protection** with allowed origins
- **Input validation** using Pydantic schemas
- **SQL injection protection** via SQLAlchemy ORM
- **Rate limiting** can be added with middleware
- **HTTPS enforcement** in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: contact@maturaco.com
- API Docs: http://localhost:8000/docs (development)
- Admin Panel: `python backend/admin.py`

## 🎯 Roadmap

- [ ] Add user authentication system
- [ ] Implement blog/news section
- [ ] Add real-time chat support
- [ ] Integrate payment processing
- [ ] Add multi-language support
- [ ] Implement advanced analytics
- [ ] Add CMS for content management
- [ ] Mobile app development

---

Built with ❤️ using React, FastAPI, and modern web technologies.


