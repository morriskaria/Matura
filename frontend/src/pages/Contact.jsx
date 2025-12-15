import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Users,
  HeadphonesIcon,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@maturaco.com',
      description: 'Send us an email and we\'ll respond within 24 hours.',
      color: 'pink',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak directly with our team for immediate assistance.',
      color: 'purple',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Tech Street, San Francisco, CA 94105',
      description: 'Schedule a meeting at our headquarters.',
      color: 'blue',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM PST',
      description: 'Available during business hours, Pacific Time.',
      color: 'cyan',
    },
  ];

  const services = [
    'Software Development',
    'Hardware Solutions',
    'Automation & AI',
    'IT Consultancy',
    'General Inquiry',
  ];

  const faqs = [
    {
      question: 'How quickly can you start a new project?',
      answer: 'We typically begin new projects within 1-2 weeks after contract signing, depending on project complexity and current workload.',
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, we work with clients worldwide and have experience with international projects across different time zones.',
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope, but most projects range from 2-12 months. We\'ll provide a detailed timeline during consultation.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Absolutely! We offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally.',
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you
              achieve your technology goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard glowColor={info.color}>
                  <div className="text-center">
                    <info.icon className={`w-12 h-12 mx-auto mb-4 ${
                      info.color === 'pink' ? 'text-neon-pink' :
                      info.color === 'purple' ? 'text-neon-purple' :
                      info.color === 'blue' ? 'text-neon-blue' :
                      'text-neon-cyan'
                    }`} />
                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                    <p className="font-medium text-gray-300 mb-2">{info.details}</p>
                    <p className="text-sm text-gray-400">{info.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-red-400">Something went wrong. Please try again.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg focus:border-neon-pink focus:ring-1 focus:ring-neon-pink text-white placeholder-gray-400 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg focus:border-neon-pink focus:ring-1 focus:ring-neon-pink text-white placeholder-gray-400 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg focus:border-neon-pink focus:ring-1 focus:ring-neon-pink text-white placeholder-gray-400 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg focus:border-neon-pink focus:ring-1 focus:ring-neon-pink text-white placeholder-gray-400 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service of Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg focus:border-neon-pink focus:ring-1 focus:ring-neon-pink text-white transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg focus:border-neon-pink focus:ring-1 focus:ring-neon-pink text-white placeholder-gray-400 transition-colors resize-none"
                      placeholder="Tell us about your project and requirements..."
                    />
                  </div>

                  <GradientButton
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </GradientButton>
                </form>
              </GlassCard>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <GlassCard>
                <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-400">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Tech Street, San Francisco, CA</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Located in the heart of San Francisco's tech district,
                  easily accessible by public transport and with parking available.
                </p>
              </GlassCard>

              {/* Quick Actions */}
              <GlassCard glowColor="purple">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-dark-700/50 rounded-lg hover:bg-dark-700/70 transition-colors cursor-pointer">
                    <Calendar className="w-8 h-8 text-neon-purple" />
                    <div>
                      <h4 className="text-white font-medium">Schedule a Call</h4>
                      <p className="text-gray-400 text-sm">Book a consultation with our experts</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-dark-700/50 rounded-lg hover:bg-dark-700/70 transition-colors cursor-pointer">
                    <MessageSquare className="w-8 h-8 text-neon-purple" />
                    <div>
                      <h4 className="text-white font-medium">Live Chat</h4>
                      <p className="text-gray-400 text-sm">Get instant answers to your questions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-dark-700/50 rounded-lg hover:bg-dark-700/70 transition-colors cursor-pointer">
                    <HeadphonesIcon className="w-8 h-8 text-neon-purple" />
                    <div>
                      <h4 className="text-white font-medium">Support Portal</h4>
                      <p className="text-gray-400 text-sm">Access our knowledge base and resources</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
