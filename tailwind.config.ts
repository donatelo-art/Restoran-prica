import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium river-inspired palette
        'danube': {
          '50': '#f0f7fb',
          '100': '#e0eef6',
          '200': '#c1deee',
          '300': '#a1cde5',
          '400': '#82bddd',
          '500': '#3d8ac9', // Primary deep river blue
          '600': '#2a5f8e',
          '700': '#1d4660',
          '800': '#0f2d3c',
          '900': '#081823',
        },
        'sand': {
          '50': '#fefaf5',
          '100': '#fef5eb',
          '200': '#fce8d3',
          '300': '#fad9b5',
          '400': '#f8c896',
          '500': '#d4a574', // Warm wood tone
          '600': '#a87d4f',
          '700': '#7c5a38',
          '800': '#5a4229',
          '900': '#3d2817',
        },
        'cream': {
          '50': '#fffbf7',
          '100': '#fff8f0',
          '200': '#fff0e0',
          '300': '#ffe8d0',
          '400': '#ffecc0',
          '500': '#f5e6d3',
          '600': '#e6d4b8',
          '700': '#d4bfa0',
          '800': '#c2aa88',
          '900': '#b09570',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        '10xl': '6rem',
        '11xl': '7rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
