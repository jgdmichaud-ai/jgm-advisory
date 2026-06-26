module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#07101f',
          900: '#0b1629',
          850: '#101d35',
          800: '#13233d',
          700: '#1b2f4d'
        },
        gold: {
          300: '#f4d991',
          400: '#edce83',
          500: '#d7b46a',
          600: '#b99148',
          700: '#8f6f34'
        },
        paper: '#f7f4ec',
        ink: '#18202c'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Manrope', 'Arial', 'sans-serif']
      },
      boxShadow: {
        premium: '0 24px 80px rgba(7, 16, 31, 0.18)',
        deep: '0 32px 100px rgba(7, 16, 31, 0.38)',
        gold: '0 18px 40px rgba(215, 180, 106, 0.22)'
      }
    }
  },
  plugins: []
};
