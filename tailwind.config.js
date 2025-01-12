/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clipPath: {
        diamond: "polygon(0% 0%, 100% 0%, 50% 90%, 0% 100%)",
      },
      // colors: {
      //   activeLink: "#1d4ed8", // Add a custom color for active links
      // },
    },
  },
  plugins: [],
};
