import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';
import ServiceCard from '../components/ServiceCard';
import {
  Code,
  Cpu,
  Zap,
  Shield,
  Star,
  Users,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies and best practices.',
      icon: Code,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Solutions'],
      glowColor: 'pink',
    },
    {
      title: 'Hardware Solutions',
      description: 'Cutting-edge hardware engineering and IoT solutions for your business needs.',
      icon: Cpu,
      features: ['IoT Devices', 'Embedded Systems', 'Hardware Prototyping', 'Integration'],
      glowColor: 'purple',
    },
    {
      title: 'Automation',
      description: 'Streamline your processes with intelligent automation and AI integration.',
      icon: Zap,
      features: ['Process Automation', 'AI Integration', 'Workflow Optimization', 'Smart Systems'],
      glowColor: 'blue',
    },
    {
      title: 'IT Consultancy',
      description: 'Expert guidance and strategic planning for your technology initiatives.',
      icon: Shield,
      features: ['Digital Strategy', 'System Architecture', 'Security Audits', 'Performance Optimization'],
      glowColor: 'cyan',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
  ];

  return (
    <div>
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About</span> MaturaCo
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to transforming
              businesses through innovative solutions and cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  To empower businesses with transformative technology solutions that drive
                  growth, efficiency, and innovation. We believe in creating lasting partnerships
                  and delivering exceptional results that exceed expectations.
                </p>
                <ul className="space-y-3">
                  {[
                    'Innovation-driven approach',
                    'Customer-centric solutions',
                    'Sustainable technology practices',
                    'Continuous learning and improvement'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-neon-green mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4"
                    >
                      <stat.icon className="w-8 h-8 text-neon-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold gradient-text mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to meet your business needs
              and drive digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <GradientButton size="lg">
              View All Services
            </GradientButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
