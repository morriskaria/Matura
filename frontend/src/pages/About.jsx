import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Star,
  Clock,
  Globe
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'We put our clients at the heart of everything we do, ensuring their success is our top priority.',
      color: 'pink',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.',
      color: 'purple',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project and deliver exceptional results.',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in building strong partnerships and working closely with our clients throughout their journey.',
      color: 'cyan',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'With over 15 years in technology leadership, Sarah drives our vision and strategy.',
      skills: ['Strategic Planning', 'Team Leadership', 'Business Development'],
      image: '/api/placeholder/150/150',
      glowColor: 'pink',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Expert in software architecture and emerging technologies with 12+ years experience.',
      skills: ['System Architecture', 'AI/ML', 'Cloud Solutions'],
      image: '/api/placeholder/150/150',
      glowColor: 'purple',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Creative director specializing in user experience and product design.',
      skills: ['UX/UI Design', 'Product Strategy', 'Design Systems'],
      image: '/api/placeholder/150/150',
      glowColor: 'blue',
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies and DevOps.',
      skills: ['React', 'Node.js', 'DevOps', 'API Design'],
      image: '/api/placeholder/150/150',
      glowColor: 'cyan',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '8+', label: 'Years Experience', icon: Clock },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'MaturaCo was established with a vision to transform businesses through technology.',
    },
    {
      year: '2017',
      title: 'First Major Client',
      description: 'Secured our first enterprise client, marking our entry into large-scale projects.',
    },
    {
      year: '2019',
      title: 'AI Division Launched',
      description: 'Expanded into artificial intelligence and machine learning solutions.',
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia, serving clients worldwide.',
    },
    {
      year: '2023',
      title: 'Innovation Award',
      description: 'Recognized as "Most Innovative Tech Company" by Tech Excellence Awards.',
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
              About <span className="gradient-text">MaturaCo</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're a team of passionate innovators dedicated to transforming businesses
              through cutting-edge technology solutions and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard glowColor="pink">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 text-neon-pink mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To empower businesses worldwide by delivering innovative technology solutions
                  that drive growth, efficiency, and competitive advantage. We strive to be
                  the trusted partner that transforms challenges into opportunities through
                  cutting-edge software, hardware, and AI-driven automation.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard glowColor="purple">
                <div className="flex items-center mb-6">
                  <Eye className="w-12 h-12 text-neon-purple mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To be the global leader in technology transformation, recognized for our
                  commitment to innovation, quality, and client success. We envision a world
                  where every business can leverage technology to achieve its full potential,
                  creating sustainable growth and positive impact.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard glowColor={value.color}>
                  <div className="text-center">
                    <value.icon className={`w-16 h-16 mx-auto mb-6 ${
                      value.color === 'pink' ? 'text-neon-pink' :
                      value.color === 'purple' ? 'text-neon-purple' :
                      value.color === 'blue' ? 'text-neon-blue' :
                      'text-neon-cyan'
                    }`} />
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <GlassCard>
                  <achievement.icon className="w-12 h-12 text-neon-blue mx-auto mb-4" />
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 text-sm">{achievement.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key milestones that have shaped our company and driven our growth.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-pink to-neon-purple opacity-30"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <GlassCard glowColor={index % 2 === 0 ? 'pink' : 'purple'}>
                      <div className="text-2xl font-bold gradient-text mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </GlassCard>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className={`w-6 h-6 rounded-full ${
                      index % 2 === 0
                        ? 'bg-neon-pink glow-pink'
                        : 'bg-neon-purple glow-purple'
                    }`}></div>
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The talented individuals behind our success, each bringing unique expertise
              and passion to our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard glowColor={member.glowColor}>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-gray-400 text-sm">Photo</div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className={`text-sm font-medium mb-4 ${
                      member.glowColor === 'pink' ? 'text-neon-pink' :
                      member.glowColor === 'purple' ? 'text-neon-purple' :
                      member.glowColor === 'blue' ? 'text-neon-blue' :
                      'text-neon-cyan'
                    }`}>
                      {member.role}
                    </p>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded text-xs ${
                            member.glowColor === 'pink' ? 'bg-neon-pink/20 text-neon-pink' :
                            member.glowColor === 'purple' ? 'bg-neon-purple/20 text-neon-purple' :
                            member.glowColor === 'blue' ? 'bg-neon-blue/20 text-neon-blue' :
                            'bg-neon-cyan/20 text-neon-cyan'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work <span className="gradient-text">With Us?</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Join the companies that trust MaturaCo to transform their business
                through innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg">
                  Start Your Project
                </GradientButton>
                <GradientButton variant="outline" size="lg">
                  Contact Us
                </GradientButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
