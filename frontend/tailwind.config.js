/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff0080',
          purple: '#8000ff',
          blue: '#0080ff',
          cyan: '#00ffff',
          green: '#00ff80',
        },
        dark: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
        }
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #ff0080, #8000ff, #0080ff)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a, #1a1a1a)',
      },
      boxShadow: {
        'glow-pink': '0 0 20px rgba(255, 0, 128, 0.5)',
        'glow-purple': '0 0 20px rgba(128, 0, 255, 0.5)',
        'glow-blue': '0 0 20px rgba(0, 128, 255, 0.5)',
        'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
        'neon-card': '0 0 30px rgba(255, 0, 128, 0.1), inset 0 0 30px rgba(128, 0, 255, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 0, 128, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 0, 128, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
