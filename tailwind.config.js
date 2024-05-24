/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "products.html", "buyAnsSellScripts.js"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
