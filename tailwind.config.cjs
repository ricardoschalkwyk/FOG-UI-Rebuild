/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#eaeaea",
          image: "#212121",
          teal_green: " #13afa7",
        },
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: ["@tailwindcss/forms"],
};
