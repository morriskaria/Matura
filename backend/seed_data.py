from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Service, Project
import json

def seed_database():
    db = SessionLocal()

    try:
        # Clear existing data
        db.query(Service).delete()
        db.query(Project).delete()
        db.commit()

        # Seed Services
        services_data = [
            {
                "title": "Software Development",
                "slug": "software-development",
                "description": "Custom software solutions built with modern technologies and best practices for scalable, maintainable applications.",
                "short_description": "Custom software development with modern tech stack",
                "icon": "Code",
                "features": json.dumps([
                    "Web Applications (React, Vue, Angular)",
                    "Mobile Apps (React Native, Flutter)",
                    "Backend APIs (Node.js, Python, Go)",
                    "Microservices Architecture",
                    "API Integration & Development",
                    "Database Design & Optimization",
                    "DevOps & CI/CD Pipelines",
                    "Quality Assurance & Testing"
                ]),
                "technologies": json.dumps([
                    "React", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"
                ]),
                "category": "development"
            },
            {
                "title": "Hardware Solutions",
                "slug": "hardware-solutions",
                "description": "Cutting-edge hardware engineering and IoT solutions designed to meet your specific business requirements.",
                "short_description": "IoT and embedded systems development",
                "icon": "Cpu",
                "features": json.dumps([
                    "IoT Device Development",
                    "Embedded Systems Design",
                    "Hardware Prototyping",
                    "Sensor Integration",
                    "Wireless Communication",
                    "Power Management",
                    "PCB Design & Manufacturing",
                    "Hardware Testing & Validation"
                ]),
                "technologies": json.dumps([
                    "Arduino", "Raspberry Pi", "ESP32", "PCB Design", "Sensors", "BLE/WiFi"
                ]),
                "category": "hardware"
            },
            {
                "title": "Automation & AI",
                "slug": "automation-ai",
                "description": "Streamline your processes with intelligent automation, machine learning, and AI-powered solutions.",
                "short_description": "AI and process automation solutions",
                "icon": "Zap",
                "features": json.dumps([
                    "Process Automation",
                    "Machine Learning Integration",
                    "AI-Powered Analytics",
                    "Workflow Optimization",
                    "Robotic Process Automation",
                    "Smart System Integration",
                    "Predictive Maintenance",
                    "Intelligent Decision Making"
                ]),
                "technologies": json.dumps([
                    "Python", "TensorFlow", "PyTorch", "scikit-learn", "OpenAI", "Computer Vision"
                ]),
                "category": "automation"
            },
            {
                "title": "IT Consultancy",
                "slug": "it-consultancy",
                "description": "Expert guidance and strategic planning to help you navigate complex technology challenges and opportunities.",
                "short_description": "Strategic IT consulting and planning",
                "icon": "Shield",
                "features": json.dumps([
                    "Digital Strategy Planning",
                    "System Architecture Design",
                    "Technology Assessment",
                    "Security Audits & Compliance",
                    "Performance Optimization",
                    "Cloud Migration Strategy",
                    "Vendor Selection & Management",
                    "Technology Roadmap Development"
                ]),
                "technologies": json.dumps([
                    "AWS", "Azure", "GCP", "Security Frameworks", "Compliance Standards", "Architecture Patterns"
                ]),
                "category": "consulting"
            }
        ]

        for service_data in services_data:
            service = Service(**service_data)
            db.add(service)

        # Seed Projects
        projects_data = [
            {
                "title": "E-Commerce Platform",
                "slug": "ecommerce-platform",
                "description": "A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.",
                "short_description": "Full-featured e-commerce solution",
                "category": "web",
                "client": "TechCorp Inc.",
                "duration": "4 months",
                "technologies": json.dumps(["React", "Node.js", "PostgreSQL", "Stripe", "AWS"]),
                "features": json.dumps(["Real-time inventory", "Payment processing", "Analytics dashboard", "Mobile responsive"]),
                "results": json.dumps(["300% increase in sales", "50% faster load times", "95% customer satisfaction"]),
                "is_featured": True
            },
            {
                "title": "Smart Home IoT System",
                "slug": "smart-home-iot",
                "description": "Comprehensive IoT solution for smart home automation with energy monitoring and security features.",
                "short_description": "Complete smart home automation system",
                "category": "iot",
                "client": "HomeTech Solutions",
                "duration": "6 months",
                "technologies": json.dumps(["ESP32", "MQTT", "React Native", "Firebase", "Raspberry Pi"]),
                "features": json.dumps(["Energy monitoring", "Security system", "Voice control", "Mobile app"]),
                "results": json.dumps(["40% energy savings", "99.9% uptime", "10k+ active users"]),
                "is_featured": True
            },
            {
                "title": "AI-Powered Analytics Dashboard",
                "slug": "ai-analytics-dashboard",
                "description": "Machine learning-driven analytics platform providing predictive insights and automated reporting.",
                "short_description": "AI-driven business analytics platform",
                "category": "ai",
                "client": "DataFlow Corp",
                "duration": "5 months",
                "technologies": json.dumps(["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"]),
                "features": json.dumps(["Predictive analytics", "Automated reporting", "Real-time alerts", "Custom dashboards"]),
                "results": json.dumps(["60% faster decision making", "85% accuracy in predictions", "200+ active users"]),
                "is_featured": True
            },
            {
                "title": "Healthcare Management App",
                "slug": "healthcare-management-app",
                "description": "Mobile application for healthcare providers to manage patient records, appointments, and telemedicine features.",
                "short_description": "HIPAA-compliant healthcare management solution",
                "category": "mobile",
                "client": "MedCare Plus",
                "duration": "8 months",
                "technologies": json.dumps(["React Native", "Node.js", "MongoDB", "WebRTC", "AWS"]),
                "features": json.dumps(["Patient management", "Telemedicine", "Appointment scheduling", "HIPAA compliant"]),
                "results": json.dumps(["50% reduction in admin time", "98% patient satisfaction", "10k+ downloads"]),
                "is_featured": True
            },
            {
                "title": "FinTech Payment Gateway",
                "slug": "fintech-payment-gateway",
                "description": "Secure payment processing platform with multi-currency support and advanced fraud detection.",
                "short_description": "Enterprise-grade payment processing platform",
                "category": "web",
                "client": "PaySecure Ltd",
                "duration": "7 months",
                "technologies": json.dumps(["Go", "React", "Redis", "PostgreSQL", "Kubernetes"]),
                "features": json.dumps(["Multi-currency support", "Fraud detection", "Real-time processing", "API integration"]),
                "results": json.dumps(["$2M+ processed monthly", "99.99% uptime", "Zero security breaches"]),
                "is_featured": False
            },
            {
                "title": "Manufacturing Automation",
                "slug": "manufacturing-automation",
                "description": "AI-driven manufacturing automation system with predictive maintenance and quality control.",
                "short_description": "Smart manufacturing with predictive maintenance",
                "category": "ai",
                "client": "AutoManufacture Inc",
                "duration": "9 months",
                "technologies": json.dumps(["Python", "PyTorch", "PLC Integration", "React", "InfluxDB"]),
                "features": json.dumps(["Predictive maintenance", "Quality control", "Process optimization", "Real-time monitoring"]),
                "results": json.dumps(["35% reduction in downtime", "25% quality improvement", "40% cost savings"]),
                "is_featured": False
            }
        ]

        for project_data in projects_data:
            project = Project(**project_data)
            db.add(project)

        db.commit()
        print("Database seeded successfully!")

    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()
