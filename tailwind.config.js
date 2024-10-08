module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    color: {
      customlightblack: 'rgb(216,216,216)',
    },
    fontFamily: {
      courier: ['Courier New', 'monospace'],
      fira: ['Fira Code', 'monospace'],
    },
    fontSize: {
      'xxs': '.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    extend: {},
  },
  variants: {
    extend: {
      transform: ['group-hover', 'group-focus-visible'],
      translate: ['group-hover', 'group-focus-visible'],
    },
  },
  plugins: [],
}