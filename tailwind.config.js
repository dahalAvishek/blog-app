/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        landing: "url('/public/landing.png')",
      },
    },
    // animation: {
    //   'scroll-infinite' : 'scrollUp 3s linear infinite'
    // },
    // keyframes: {
    //   scrollUp: {
    //     '0%, 100%' : {transform: 'translate()'}
    //   }
    // }
    // border: {
    //   "y-1": "1px 0px 1px",
    //   "t-2": "2px 0px 0px",
    // },
    minHeight: {
      content: "30rem",
      vh: "100vh",
    },
    gridTemplateRows: {
      fs: "1fr auto",
    },
    maxWidth: {
      vw: "100vw",
    },
  },
  plugins: [],
};
