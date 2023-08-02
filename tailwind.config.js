/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "hsl(0, 0%, 17%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      fontSize: {
        body: "18px",
      },
      backgroundImage: {
        mobile: 'url("/pattern-bg-mobile.png")',
        desktop: 'url("/pattern-bg-desktop.png")',
      },
      height: {
        "map-mobile": "calc(100svh - 300px)",
        "map-desktop": "calc(100svh - 280px)",
      },
      boxShadow: {
        "3xl": "0 50px 50px -25px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        md: "1040px",
      },
    },
  },
  plugins: [],
};
