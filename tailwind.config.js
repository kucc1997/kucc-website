/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#EFF6FF',
        mediumLightBlue: '#DBEAFE',
        darkSky: '#075985',
        darkBlue: '#1E3A8A',
        mediumGray: '#033b4a',
        lightGray: '#0002',
        hoverColor:'#94A3B8',
      },
    },
  },
  plugins: [],
}