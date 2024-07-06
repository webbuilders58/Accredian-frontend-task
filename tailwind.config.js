/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        banner: '0px 4px 65px 1px #00072B36',
        tablesidebar: '0px 1px 24.4px 1px #00000029',
        table:"0px 4px 29.3px 0px #3C3C3C26",
        faqbtn:"0px 2px 26.6px 0px #0000002E",
      },
    },
  },
  plugins: [],
}
