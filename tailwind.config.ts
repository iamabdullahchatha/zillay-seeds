import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          seed: "rgb(var(--seed-green) / <alpha-value>)",
          leaf: "rgb(var(--deep-leaf-green) / <alpha-value>)",
          soil: "rgb(var(--soil-brown) / <alpha-value>)",
          cream: "rgb(var(--cream-background) / <alpha-value>)",
          tomato: "rgb(var(--tomato-red) / <alpha-value>)",
          pepper: "rgb(var(--pepper-orange) / <alpha-value>)",
          watermelon: "rgb(var(--watermelon-pink) / <alpha-value>)",
          border: "rgb(var(--soft-border-color) / <alpha-value>)",
        },
        soil: {
          50: "#fbf6ee",
          100: "#f1e5d2",
          200: "#e3cba8",
          300: "#d2ac7a",
          400: "#b88450",
          500: "#986239",
          600: "#7f4f31",
          700: "#643f29",
          800: "#543526",
          900: "#472d22",
        },
        leaf: {
          50: "#eef8ef",
          100: "#d6efd8",
          200: "#b0deba",
          300: "#81c793",
          400: "#54ae6f",
          500: "#348e52",
          600: "#246f3f",
          700: "#1e5834",
          800: "#1b462b",
          900: "#173a25",
        },
        tomato: "rgb(var(--tomato-red) / <alpha-value>)",
        pepper: "rgb(var(--pepper-orange) / <alpha-value>)",
        melon: "rgb(var(--watermelon-pink) / <alpha-value>)",
        cream: "rgb(var(--cream-background) / <alpha-value>)",
        seed: "#f2dfb1",
        borderSoft: "rgb(var(--soft-border-color) / <alpha-value>)",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(38, 53, 27, 0.12)",
        field: "0 18px 50px rgba(88, 58, 28, 0.18)",
      },
      borderRadius: {
        organic: "2rem",
      },
      backgroundImage: {
        "field-lines":
          "radial-gradient(circle at 20% 20%, rgba(217,75,61,0.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(52,142,82,0.2), transparent 24%), linear-gradient(135deg, rgba(23,58,37,0.06) 25%, transparent 25%), linear-gradient(225deg, rgba(23,58,37,0.06) 25%, transparent 25%)",
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        drift: "drift 18s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        drift: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(6px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
