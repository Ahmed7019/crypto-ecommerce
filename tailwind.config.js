/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
