import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B3551',
        teal: '#1F9DA0',
        sand: '#F7F3EC'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(11, 53, 81, 0.14)'
      }
    }
  },
  plugins: []
};

export default config;
