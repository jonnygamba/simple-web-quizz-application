module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-shade": "#2F3D51",
        "dark-accent": "#A24E6F",
        "light-shade": "#F5F1ED",
        "light-accent": "#B37B51",
        "main-brand": "#C59CA7",
        success: "#70a96a",
        danger: "#f44336",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
