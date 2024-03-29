/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sage: "#9dc183",
        primary: "#4f7942",
      },
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1536px",
      },
    },
    backgroundImage: {
      backgroundImage: "url('/assets/heroImage.webp')",
      loginImage: "url('/assets/loginImage.avif')",
      adminBg: "url('/assets/adminBg.jpg')",
      readBooks: "url('/assets/readBooks.jpg')",
      registerImage: "url('/assets/registerImage.jpg')",
    },
  },
  plugins: [],
};
