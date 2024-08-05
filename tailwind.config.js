const heroPatterns = require("tailwindcss-hero-patterns/src/patterns");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        shadows: ['"Shadows Into Light"', "cursive"],
      },
      backgroundImage: (theme) => ({
        ...heroPatterns,
        "hero-pattern-topography": "url('/doodle.jpg')",
      }),
    },
    backgroundSize: {
      "50%": "50%",
      "25%": "25%",
      "10%": "10%",
      "1%": "1%",
      // Tambahkan ukuran lain sesuai kebutuhan
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-hero-patterns")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "aqua",
      "luxury",
      "lofi",
      "cyberpunk",
      "valentine",
      "forest",
    ],
  },
};
