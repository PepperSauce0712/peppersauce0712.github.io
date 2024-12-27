/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/*.astro',
      './src/components/*.astro',
      './src/index.html'
    ],
    theme: {
        extend: {
          colors: {
            customGray: '#60656C', // 喜好灰
          },
        },
      },
      plugins: [],
  }