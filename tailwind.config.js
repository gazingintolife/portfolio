module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      "sm": "640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl":"1536px"
    },
    fontFamily: {
      "serif": ["Roboto Slab"],
      "sans": ['Helvetica', 'Arial', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
