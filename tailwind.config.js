/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'system-ui']
    },
    extend: {
      transitionProperty: {
        'max-height': 'max-height'
      }
    }
  },
  plugins: [],
}

