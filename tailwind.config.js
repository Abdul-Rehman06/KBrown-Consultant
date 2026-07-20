/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0B1523",
          50: "#1E2A3B",
          100: "#1A2536",
          200: "#162030",
          300: "#13243D", // Secondary Navy
          400: "#0F1A28",
          500: "#0B1523", // Primary Dark
          600: "#08101B",
          700: "#060C14",
          800: "#04070D",
          900: "#020306",
        },
        gold: {
          DEFAULT: "#D4AF37", // Primary Gold
          light: "#F2C96D", // Light Gold
          50: "#FDF8EA",
          100: "#FAF0D5",
          200: "#F5E1AA",
          300: "#F0D280",
          400: "#F2C96D", // Light Gold
          500: "#D4AF37", // Primary Gold
          600: "#B3922E",
          700: "#8F7425",
          800: "#6B571C",
          900: "#473A12",
        },
        gray: {
          DEFAULT: "#6D6E71", // Gray
          light: "#F5F6F8", // White/Light Gray
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Playfair Display", "serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(to right, #D4AF37, #F2C96D, #D4AF37)',
        'dark-gradient': 'linear-gradient(to bottom, #0B1523, #13243D)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        }
      }
    },
  },
  plugins: [],
};