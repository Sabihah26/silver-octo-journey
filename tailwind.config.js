/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },

      // ⭐ CUSTOM FONTS
      fontFamily: {
        arabic: ["Amiri", "Scheherazade", "serif"],
        english: ["Inter", "Arial", "sans-serif"],
      },

      // ⭐ CUSTOM FONT SIZES (multiple Arabic sizes)
      fontSize: {
        arabic: "35px",
        arabic40: "40px",
        arabic50: "50px",
        arabic60: "60px",

        english: "18px",
        english22: "22px",
        english28: "28px",
      },
    },
  },
  plugins: [],
}
