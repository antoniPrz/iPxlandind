// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Esto habilita el modo oscuro basado en clases
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#4E1E6E', // Morado
        'primary-pink': '#D9298A',   // Rosa
        'primary-blue': '#00AEEF',   // Azul
        'dark-bg': '#1a202c',        // Fondo gris oscuro
        'dark-text': '#e2e8f0',      // Texto gris claro
        'dark-secondary': '#2d3748', // Fondo secundario gris oscuro
        'dark-highlight': '#4a5568', // Resaltado gris oscuro
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
