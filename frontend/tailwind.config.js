/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
