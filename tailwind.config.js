/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Include all your source files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Custom primary color (blue-600)
        secondary: '#4b5563', // Gray-600
        danger: '#dc2626', // Red-600
        success: '#16a34a', // Green-600
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: better form input styles
    require('@tailwindcss/typography'), // Optional: for rich text formatting
    require('@tailwindcss/aspect-ratio'), // Optional: for responsive media
  ],
};
