/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald"],
        kanit: ["Kanit"],
        indie: ["Indie"],
        ubuntu: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
