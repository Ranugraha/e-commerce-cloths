/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grays: [
          { 100: "#F9FAFB" },
          { 200: "#E9ECEF" },
          { 300: "#DDE0E5" },
          { 400: "#CED4DA" },
          { 500: "#ADB5BD" },
          { 600: "#6C757D" },
          { 700: "#495057" },
          { 800: "#343A40" },
          { 900: "#212529" },
        ],
        dark: "#1E293B",
        whitee: "#FFFFFF",
        primary: "#3066FF",
        secondary: "#64748B",
        info: "#55A6F8",
        succes: "#67C23A",
        danger: "#EA4E3D",
        warning: "#F19937",
      },
    },
  },
  plugins: [],
};
