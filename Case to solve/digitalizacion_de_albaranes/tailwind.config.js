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
    },
  },
  theme: {
    extend: {
      textShadow: {
        default: "2px 4px 6px rgb(26, 1, 255)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.3)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.25)",
        xl: "5px 5px 10px rgba(0, 0, 0, 0.2)",
        none: "none",
      },
    },
  },
};
