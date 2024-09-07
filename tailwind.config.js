/** @type {import('tailwindcss').Config */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'naruto-orange': '#FF7A00',
        'naruto-blue': '#0066CC',
        'leaf-green': '#4CAF50',
      },
      backgroundImage: {
        'ninja-pattern': "url('/path/to/subtle-ninja-star-pattern.png')",
      },
      gradients: {
        'naruto-gradient': 'linear-gradient(135deg, #FF7A00 0%, #FFA500 100%)',
      },
    },
  },
  plugins: [],
}
