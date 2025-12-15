import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GlassCard from './GlassCard';
import GradientButton from './GradientButton';

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  features = [],
  glowColor = 'pink',
  className = '',
  ...props
}) => {
  return (
    <GlassCard glowColor={glowColor} className={className} {...props}>
      <div className="text-center mb-6">
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            glowColor === 'pink' ? 'bg-neon-pink/20 text-neon-pink' :
            glowColor === 'purple' ? 'bg-neon-purple/20 text-neon-purple' :
            glowColor === 'blue' ? 'bg-neon-blue/20 text-neon-blue' :
            'bg-neon-cyan/20 text-neon-cyan'
          }`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>

      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-gray-300"
            >
              <div className={`w-2 h-2 rounded-full mr-3 ${
                glowColor === 'pink' ? 'bg-neon-pink' :
                glowColor === 'purple' ? 'bg-neon-purple' :
                glowColor === 'blue' ? 'bg-neon-blue' :
                'bg-neon-cyan'
              }`} />
              {feature}
            </motion.li>
          ))}
        </ul>
      )}

      <GradientButton
        variant={glowColor === 'blue' ? 'secondary' : 'primary'}
        className="w-full group"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </GradientButton>
    </GlassCard>
  );
};

export default ServiceCard;
