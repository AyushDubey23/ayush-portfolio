import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        none: "0",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
        "slide-right": "slideRight 0.5s ease-out",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        "spin-slow": "spin 3s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        glitch: "glitch 1s linear infinite",
        matrix: "matrix 3s linear infinite",
        "neon-pulse": "neonPulse 2s ease-in-out infinite alternate",
        typing: "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        glitch: {
          "0%": {
            textShadow: "0.05em 0 0 #ef4444, -0.05em -0.025em 0 #00ff00, 0.025em 0.05em 0 #0000ff",
          },
          "15%": {
            textShadow: "0.05em 0 0 #ef4444, -0.05em -0.025em 0 #00ff00, 0.025em 0.05em 0 #0000ff",
          },
          "16%": {
            textShadow: "-0.05em -0.025em 0 #ef4444, 0.025em 0.025em 0 #00ff00, -0.05em -0.05em 0 #0000ff",
          },
          "49%": {
            textShadow: "-0.05em -0.025em 0 #ef4444, 0.025em 0.025em 0 #00ff00, -0.05em -0.05em 0 #0000ff",
          },
          "50%": {
            textShadow: "0.025em 0.05em 0 #ef4444, 0.05em 0 0 #00ff00, 0 -0.05em 0 #0000ff",
          },
          "99%": {
            textShadow: "0.025em 0.05em 0 #ef4444, 0.05em 0 0 #00ff00, 0 -0.05em 0 #0000ff",
          },
          "100%": {
            textShadow: "-0.025em 0 0 #ef4444, -0.025em -0.025em 0 #00ff00, -0.025em -0.05em 0 #0000ff",
          },
        },
        matrix: {
          "0%": { transform: "translateY(-100vh)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        neonPulse: {
          "0%": {
            textShadow: "0 0 5px #ef4444, 0 0 10px #ef4444, 0 0 15px #ef4444, 0 0 20px #ef4444",
          },
          "100%": {
            textShadow: "0 0 2px #ef4444, 0 0 5px #ef4444, 0 0 8px #ef4444, 0 0 12px #ef4444",
          },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "#ef4444" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px #ef4444, 0 0 10px #ef4444, 0 0 15px #ef4444",
          },
          "100%": {
            boxShadow: "0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #ef4444",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid":
          "linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)",
        "matrix-rain":
          "linear-gradient(0deg, transparent 24%, rgba(239, 68, 68, 0.05) 25%, rgba(239, 68, 68, 0.05) 26%, transparent 27%, transparent 74%, rgba(239, 68, 68, 0.05) 75%, rgba(239, 68, 68, 0.05) 76%, transparent 77%, transparent)",
      },
      backgroundSize: {
        "cyber-grid": "20px 20px",
        "matrix-rain": "20px 20px",
      },
      boxShadow: {
        neon: "0 0 5px #ef4444, 0 0 10px #ef4444, 0 0 15px #ef4444",
        "neon-lg": "0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #ef4444",
        cyber: "0 0 20px rgba(239, 68, 68, 0.5), inset 0 0 20px rgba(239, 68, 68, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
