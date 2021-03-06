module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "accent-color": "var(--accent-color)",
        "accent-color-dark": "var(--accent-color-dark)",
      },
    },
  },
  plugins: [],
}
