/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#A21C21',        // Brand Maroon (utama)
        'primary-dark': '#711519', // Hover Maroon

        secondary: '#444444',      // Dark Gray (branding accent, CTA bg)

        'gray-100': '#EAEAEA',     // Light Gray (background subtle)
        'gray-500': '#5A5A5A',     // Medium Gray (secondary text)
        'gray-900': '#303030',     // Almost Black (footer, strong bg)
        success: '#28A745',
        error: '#DC3545',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        caslon: ['"Libre Caslon Text"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        '3xl': '1600px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '3rem',
        },
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
        fadeInDown: 'fadeInDown 1s ease-out forwards',
        'scroll-bounce': 'bounce-down 2s infinite',
        in: 'none', // dummy trigger untuk IntersectionObserver
      },
    },
  },
  plugins: [],
}
