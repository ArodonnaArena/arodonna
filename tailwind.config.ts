import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Premium & Professional Brand Palette
          primary: '#2C3E50',      // Royal Blue - primary brand color
          secondary: '#ECF0F1',    // Light Gray-White - secondary backgrounds
          accent: '#F1C40F',       // Warm Gold/Yellow - accent and highlights
          text: '#222222',         // Almost Black Gray - main text
          textLight: '#666666',    // Lighter text for secondary content
          white: '#FFFFFF',        // Pure white
          
          // Variations and gradients
          primaryLight: '#34495E',  // Lighter royal blue
          primaryDark: '#1A252F',   // Darker royal blue
          accentLight: '#F4D03F',   // Lighter gold
          accentDark: '#D4AC0D',    // Darker gold
          
          // Semantic colors
          success: '#27AE60',      // Green for success
          warning: '#E67E22',      // Orange for warnings
          error: '#E74C3C',        // Red for errors
          info: '#3498DB',         // Blue for info
          
          // Glass/overlay effects
          overlay: 'rgba(44, 62, 80, 0.9)',
          glass: 'rgba(236, 240, 241, 0.1)',
          glassBorder: 'rgba(236, 240, 241, 0.2)',
        },
        
        // Shadcn/UI compatible colors
        background: '#FFFFFF',
        foreground: '#222222',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#222222',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#222222',
        },
        primary: {
          DEFAULT: '#2C3E50',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#ECF0F1',
          foreground: '#222222',
        },
        muted: {
          DEFAULT: '#F8F9FA',
          foreground: '#666666',
        },
        accent: {
          DEFAULT: '#F1C40F',
          foreground: '#222222',
        },
        destructive: {
          DEFAULT: '#E74C3C',
          foreground: '#FFFFFF',
        },
        border: '#E5E5E5',
        input: '#FFFFFF',
        ring: '#F1C40F',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
        'gradient-hero-overlay': 'linear-gradient(135deg, rgba(44, 62, 80, 0.9) 0%, rgba(44, 62, 80, 0.7) 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(236, 240, 241, 0.05) 0%, rgba(236, 240, 241, 0.02) 100%)',
        'gradient-button': 'linear-gradient(135deg, #F1C40F 0%, #F4D03F 100%)',
        'gradient-button-hover': 'linear-gradient(135deg, #D4AC0D 0%, #F1C40F 100%)',
        'gradient-primary': 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F1C40F 0%, #F4D03F 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'accent': '0 0 20px rgba(241, 196, 15, 0.3)',
        'accent-strong': '0 0 30px rgba(241, 196, 15, 0.5)',
        'primary': '0 4px 20px rgba(44, 62, 80, 0.3)',
        'primary-strong': '0 8px 30px rgba(44, 62, 80, 0.4)',
        'glow': '0 0 20px rgba(241, 196, 15, 0.4)',
        'glow-primary': '0 0 20px rgba(44, 62, 80, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // Add custom utilities (typed via Tailwind's plugin helper)
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-strong': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
      }
      addUtilities(newUtilities)
    })
  ],
}

export default config