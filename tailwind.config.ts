import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#1ea465',
          600: '#075731',
          700: '#065429',
          800: '#064e24',
          900: '#053f1d',
          950: '#022c13',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#363636',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          green: '#1ea465',
          gray: '#eaeaea',
          cream: '#f8f7f5',
        },
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
