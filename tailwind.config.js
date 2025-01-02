module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        redFlow: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", backgroundColor: "#d62b2b" },
          "50%": { transform: "scale(1.1)", backgroundColor: "#b02424" },
        },
      },
      animation: {
        redFlow: "redFlow 20s infinite",
        pulse: "pulse 2s infinite",
      },
      rotate: {
        45: "45deg",
        135: "135deg",
        225: "225deg",
        270: "270deg",
        315: "315deg",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
      },
      screens: {
        sm: "640px", // Small screens (Mobile Portrait)
        md: "768px", // Medium screens (Tablet Portrait)
        lg: "1024px", // Large screens (Laptop)
        xl: "1280px", // Extra large screens (Desktop)
        "2xl": "1536px", // 2x extra large screens (Large Desktop)
      },
    },
  },
  plugins: [],
};
