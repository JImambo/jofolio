/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales du design
        primary: {
          dark: '#0a0e27',
          darker: '#080b1f',
          card: '#1a1d29',
        },
        cyan: {
          400: '#00d9ff',
          500: '#00c4e6',
          600: '#00a8cc',
        },
        emerald: {
          400: '#10b981',
          500: '#059669',
          600: '#047857',
        },
        orange: {
          400: '#fb923c',
          500: '#f97316',
        }
      },
      backgroundImage: {
        'gradient-cyan': 'linear-gradient(to right, #00d9ff, #10b981)',
        'grid-pattern': 'linear-gradient(rgba(0,217,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.03) 1px, transparent 1px)',
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'cyan-glow-lg': '0 0 40px rgba(0, 217, 255, 0.4)',
        'emerald-glow': '0 0 20px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}