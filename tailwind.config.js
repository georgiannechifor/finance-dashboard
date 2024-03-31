/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false
  },
  safelist: ['text-blue-400', 'bg-blue-400/20', 'text-red-400', 'bg-red-400/20', 'text-green-400', 'bg-green-400/20'],
  theme: {
    extend: {}
  },
  plugins: []
};
