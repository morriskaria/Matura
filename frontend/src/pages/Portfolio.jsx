import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';
import { ExternalLink, Github, Filter, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'iot', name: 'IoT Solutions' },
    { id: 'ai', name: 'AI & Automation' },
    { id: 'consulting', name: 'Consulting' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      features: ['Real-time inventory', 'Payment processing', 'Analytics dashboard', 'Mobile responsive'],
      client: 'TechCorp Inc.',
      duration: '4 months',
      results: ['300% increase in sales', '50% faster load times', '95% customer satisfaction'],
      demoUrl: '#',
      githubUrl: '#',
      glowColor: 'pink',
    },
    {
      id: 2,
      title: 'Smart Home IoT System',
      category: 'iot',
      description: 'Comprehensive IoT solution for smart home automation with energy monitoring and security features.',
      image: '/api/placeholder/400/300',
      technologies: ['ESP32', 'MQTT', 'React Native', 'Firebase', 'Raspberry Pi'],
      features: ['Energy monitoring', 'Security system', 'Voice control', 'Mobile app'],
      client: 'HomeTech Solutions',
      duration: '6 months',
      results: ['40% energy savings', '99.9% uptime', '10k+ active users'],
      demoUrl: '#',
      githubUrl: '#',
      glowColor: 'purple',
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      category: 'ai',
      description: 'Machine learning-driven analytics platform providing predictive insights and automated reporting.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL'],
      features: ['Predictive analytics', 'Automated reporting', 'Real-time alerts', 'Custom dashboards'],
      client: 'DataFlow Corp',
      duration: '5 months',
      results: ['60% faster decision making', '85% accuracy in predictions', '200+ active users'],
      demoUrl: '#',
      githubUrl: '#',
      glowColor: 'blue',
    },
    {
      id: 4,
      title: 'Healthcare Management App',
      category: 'mobile',
      description: 'Mobile application for healthcare providers to manage patient records, appointments, and telemedicine features.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
      features: ['Patient management', 'Telemedicine', 'Appointment scheduling', 'HIPAA compliant'],
      client: 'MedCare Plus',
      duration: '8 months',
      results: ['50% reduction in admin time', '98% patient satisfaction', '10k+ downloads'],
      demoUrl: '#',
      githubUrl: '#',
      glowColor: 'cyan',
    },
    {
      id: 5,
      title: 'FinTech Payment Gateway',
      category: 'web',
      description: 'Secure payment processing platform with multi-currency support and advanced fraud detection.',
      image: '/api/placeholder/400/300',
      technologies: ['Go', 'React', 'Redis', 'PostgreSQL', 'Kubernetes'],
      features: ['Multi-currency support', 'Fraud detection', 'Real-time processing', 'API integration'],
      client: 'PaySecure Ltd',
      duration: '7 months',
      results: ['$2M+ processed monthly', '99.99% uptime', 'Zero security breaches'],
      demoUrl: '#',
      githubUrl: '#',
      glowColor: 'pink',
    },
    {
      id: 6,
      title: 'Manufacturing Automation',
      category: 'ai',
      description: 'AI-driven manufacturing automation system with predictive maintenance and quality control.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'PyTorch', 'PLC Integration', 'React', 'InfluxDB'],
      features: ['Predictive maintenance', 'Quality control', 'Process optimization', 'Real-time monitoring'],
      client: 'AutoManufacture Inc',
      duration: '9 months',
      results: ['35% reduction in downtime', '25% quality improvement', '40% cost savings'],
      demoUrl: '#',
      githubUrl: '#',
      glowColor: 'blue',
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our successful projects and see how we've helped businesses
              transform through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-neon-pink to-neon-purple text-white glow-pink'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer"
                >
                  <GlassCard glowColor={project.glowColor} className="h-full">
                    <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-gray-400 text-sm">Project Image</div>
                    </div>

                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm mb-3 ${
                        project.glowColor === 'pink' ? 'bg-neon-pink/20 text-neon-pink' :
                        project.glowColor === 'purple' ? 'bg-neon-purple/20 text-neon-purple' :
                        project.glowColor === 'blue' ? 'bg-neon-blue/20 text-neon-blue' :
                        'bg-neon-cyan/20 text-neon-cyan'
                      }`}>
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-dark-700 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-dark-700 rounded text-xs text-gray-300">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        {project.client} • {project.duration}
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-neon-pink transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-neon-purple transition-colors">
                          <Github className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm mb-3 ${
                      selectedProject.glowColor === 'pink' ? 'bg-neon-pink/20 text-neon-pink' :
                      selectedProject.glowColor === 'purple' ? 'bg-neon-purple/20 text-neon-purple' :
                      selectedProject.glowColor === 'blue' ? 'bg-neon-blue/20 text-neon-blue' :
                      'bg-neon-cyan/20 text-neon-cyan'
                    }`}>
                      {categories.find(cat => cat.id === selectedProject.category)?.name}
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <p className="text-gray-400">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-gray-400">Project Image</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
                    <div className="space-y-3 text-gray-300">
                      <div><strong>Client:</strong> {selectedProject.client}</div>
                      <div><strong>Duration:</strong> {selectedProject.duration}</div>
                      <div><strong>Category:</strong> {categories.find(cat => cat.id === selectedProject.category)?.name}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            selectedProject.glowColor === 'pink' ? 'bg-neon-pink' :
                            selectedProject.glowColor === 'purple' ? 'bg-neon-purple' :
                            selectedProject.glowColor === 'blue' ? 'bg-neon-blue' :
                            'bg-neon-cyan'
                          }`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedProject.glowColor === 'pink' ? 'bg-neon-pink/20 text-neon-pink' :
                          selectedProject.glowColor === 'purple' ? 'bg-neon-purple/20 text-neon-purple' :
                          selectedProject.glowColor === 'blue' ? 'bg-neon-blue/20 text-neon-blue' :
                          'bg-neon-cyan/20 text-neon-cyan'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.results.map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-dark-700/50 rounded-lg">
                        <div className={`text-lg font-semibold mb-1 ${
                          selectedProject.glowColor === 'pink' ? 'text-neon-pink' :
                          selectedProject.glowColor === 'purple' ? 'text-neon-purple' :
                          selectedProject.glowColor === 'blue' ? 'text-neon-blue' :
                          'text-neon-cyan'
                        }`}>
                          {result}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <GradientButton
                    variant={selectedProject.glowColor === 'blue' ? 'secondary' : 'primary'}
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </GradientButton>
                  <GradientButton
                    variant="outline"
                    className="flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </GradientButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
