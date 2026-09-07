module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: '#6EE7B7',
        accent: '#7C3AED',
        surface: 'rgba(255,255,255,0.04)'
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(ellipse at top left,#0f172a 0%, transparent 40%)'
      }
    },
  },
  plugins: [],
}
