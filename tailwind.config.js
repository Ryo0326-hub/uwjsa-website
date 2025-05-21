/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        uwjsa: "#7a0606", // tweak if your logo hex is different
      },
    },
  },
  plugins: [],
};

