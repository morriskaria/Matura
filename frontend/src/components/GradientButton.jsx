import { motion } from 'framer-motion';

const GradientButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink',
    secondary: 'bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue',
    outline: 'border-2 border-neon-pink bg-transparent hover:bg-neon-pink/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 transform hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-neon-pink/50
    shadow-lg hover:shadow-xl glow-pink
  `;

  const Component = href ? motion.a : motion.button;
  const componentProps = href ? { href, ...props } : props;

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...componentProps}
    >
      {children}
    </Component>
  );
};

export default GradientButton;
