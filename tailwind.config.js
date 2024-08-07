module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    fontFamily: {
      courier: ['Courier New', 'monospace'],
      fira: ['Fira Code', 'monospace'],
    },
    fontSize: {
      'xxs': '.5rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}