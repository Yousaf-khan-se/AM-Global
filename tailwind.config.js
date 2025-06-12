/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ]
  ,
  theme: {
    extend: {
      boxShadow: {
        'white-soft': '0px 1px 20px 1px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}

