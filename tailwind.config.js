/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all React components and files for class names
    "./public/index.html",        // Includes the HTML file in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

