import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';
import {
  Code,
  Cpu,
  Zap,
  Shield,
  Smartphone,
  Cloud,
  Database,
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'software',
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies and best practices for scalable, maintainable applications.',
      icon: Code,
      features: [
        'Web Applications (React, Vue, Angular)',
        'Mobile Apps (React Native, Flutter)',
        'Backend APIs (Node.js, Python, Go)',
        'Microservices Architecture',
        'API Integration & Development',
        'Database Design & Optimization',
        'DevOps & CI/CD Pipelines',
        'Quality Assurance & Testing'
      ],
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
      glowColor: 'pink',
    },
    {
      id: 'hardware',
      title: 'Hardware Solutions',
      description: 'Cutting-edge hardware engineering and IoT solutions designed to meet your specific business requirements.',
      icon: Cpu,
      features: [
        'IoT Device Development',
        'Embedded Systems Design',
        'Hardware Prototyping',
        'Sensor Integration',
        'Wireless Communication',
        'Power Management',
        'PCB Design & Manufacturing',
        'Hardware Testing & Validation'
      ],
      technologies: ['Arduino', 'Raspberry Pi', 'ESP32', 'PCB Design', 'Sensors', 'BLE/WiFi'],
      glowColor: 'purple',
    },
    {
      id: 'automation',
      title: 'Automation & AI',
      description: 'Streamline your processes with intelligent automation, machine learning, and AI-powered solutions.',
      icon: Zap,
      features: [
        'Process Automation',
        'Machine Learning Integration',
        'AI-Powered Analytics',
        'Workflow Optimization',
        'Robotic Process Automation',
        'Smart System Integration',
        'Predictive Maintenance',
        'Intelligent Decision Making'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI', 'Computer Vision'],
      glowColor: 'blue',
    },
    {
      id: 'consultancy',
      title: 'IT Consultancy',
      description: 'Expert guidance and strategic planning to help you navigate complex technology challenges and opportunities.',
      icon: Shield,
      features: [
        'Digital Strategy Planning',
        'System Architecture Design',
        'Technology Assessment',
        'Security Audits & Compliance',
        'Performance Optimization',
        'Cloud Migration Strategy',
        'Vendor Selection & Management',
        'Technology Roadmap Development'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Security Frameworks', 'Compliance Standards', 'Architecture Patterns'],
      glowColor: 'cyan',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business needs, challenges, and goals through comprehensive consultation.',
    },
    {
      step: '02',
      title: 'Strategy & Design',
      description: 'Our experts create a tailored solution strategy and detailed technical architecture for your project.',
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'We build your solution using best practices, modern technologies, and agile development methodologies.',
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest standards of quality and performance.',
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Seamless deployment followed by ongoing support and maintenance to ensure continued success.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business
              and drive innovation across all areas of your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard glowColor={service.glowColor}>
                  <div className="mb-6">
                    <service.icon className={`w-12 h-12 mb-4 ${
                      service.glowColor === 'pink' ? 'text-neon-pink' :
                      service.glowColor === 'purple' ? 'text-neon-purple' :
                      service.glowColor === 'blue' ? 'text-neon-blue' :
                      'text-neon-cyan'
                    }`} />
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">What We Offer:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start text-gray-300"
                        >
                          <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                            service.glowColor === 'pink' ? 'text-neon-pink' :
                            service.glowColor === 'purple' ? 'text-neon-purple' :
                            service.glowColor === 'blue' ? 'text-neon-blue' :
                            'text-neon-cyan'
                          }`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm ${
                            service.glowColor === 'pink' ? 'bg-neon-pink/20 text-neon-pink' :
                            service.glowColor === 'purple' ? 'bg-neon-purple/20 text-neon-purple' :
                            service.glowColor === 'blue' ? 'bg-neon-blue/20 text-neon-blue' :
                            'bg-neon-cyan/20 text-neon-cyan'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <GradientButton
                    variant={service.glowColor === 'blue' ? 'secondary' : 'primary'}
                    className="w-full group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </GradientButton>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
              and exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <GlassCard>
                  <div className={`text-3xl font-bold mb-4 ${
                    index % 2 === 0 ? 'gradient-text' : 'text-neon-blue'
                  }`}>
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Let's discuss how our services can help you achieve your goals.
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg">
                  Start Your Project
                </GradientButton>
                <GradientButton variant="outline" size="lg">
                  Schedule Consultation
                </GradientButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
