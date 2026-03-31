
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          'dark-green': '#144A38',
          'bright-green': '#82E578',
          'light-green': '#F6F9F4',
          'dark-blue': '#003B77',
          'body': '#262626',
          'container': '#434343',
          'page': '#F1F1F1',
          'divider': '#D4D4D4',
          'divider-selected': '#C2D6B5',
        }
      },
      fontFamily: {
        'buenos-aires': ['"Buenos Aires"', '-apple-system', '"system-ui"', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 4px 8px 0px #E4E4E4',
      }
    },
  },
  plugins: [],
}
