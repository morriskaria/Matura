import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  glowColor = 'pink',
  hover = true,
  ...props
}) => {
  const glowClasses = {
    pink: 'glow-pink',
    purple: 'glow-purple',
    blue: 'glow-blue',
    cyan: 'glow-cyan',
  };

  return (
    <motion.div
      className={`glass-card p-6 ${glowClasses[glowColor]} ${className}`}
      whileHover={hover ? {
        scale: 1.02,
        boxShadow: `0 0 40px rgba(${
          glowColor === 'pink' ? '255, 0, 128' :
          glowColor === 'purple' ? '128, 0, 255' :
          glowColor === 'blue' ? '0, 128, 255' : '0, 255, 255'
        }, 0.3)`,
      } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
