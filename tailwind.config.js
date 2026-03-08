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
        orange: {
          900: "#6B250D",
          800: "#8C3111",
          700: "#B53F15",
          600: "#F5551B",
          500: "#FF6B22",
          400: "#FF7A4B",
          300: "#FF9068",
          200: "#FFB398",
          100: "#FFCCB9",
          50: "#FFEEE9",
        },
      },
      fontFamily: {
        inter: ["Inter-Regular"],
        "inter-medium": ["Inter-Medium"],
        "inter-semibold": ["Inter-SemiBold"],
        "inter-bold": ["Inter-Bold"],
      },
    },
  },
  plugins: [],
}

// border-primary : F5F4F5