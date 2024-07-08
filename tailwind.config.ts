import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "lg": "1275px",
      },
    },
    extend: {
      colors: {
        dark: {
          1: "#323133",
          2: "#131217",
          3: "#1c1c21"
        },
        light: {
          1: "#F0F4FA",
          2: "#FFFFFF"
        },
        blue: {
          1: "#6B8AFD"
        },
        icon: {
          1: '#605455',
          2: "#e6e2e1"
        },
        text: {
          1: '#2f92ef',
          2: "#e94d5f"
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config