/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://img.freepik.com/free-photo/top-view-fresh-vegetables-with-greens-seasonings-dark-space_140725-76231.jpg?w=1060&t=st=1683866286~exp=1683866886~hmac=757d6268a105c7a38232b1c5c44f28599f453211d2f4aa8c03223f7c3e3a113e')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [require("daisyui")],
}

