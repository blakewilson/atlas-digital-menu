module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        light: 'var(--light-bg)',
        'logo-color': 'var(--logo-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
