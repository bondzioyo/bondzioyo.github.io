/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "16px",
        sm: "2rem",
        lg: "4rem",
        xl: "8rem",
        "2xl": "11rem",
      },
    },
    extend: {
      colors: {
        "my-white": "#FCFCFC",
        "my-black": "#16151C",
        accent: "#FFCD40",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
