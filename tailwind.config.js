module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#6C2358",
          800: "#83256B",
          700: "#A02B84",
          600: "#B6349A",
          500: "#DE57C4",
          400: "#EC86D8",
          300: "#F4B3E9",
          200: "#F9D1F2",
          100: "#FCE8F9",
          50: "#FEF5FD",
        },
      }
    },
  },
  plugins: [],
}

