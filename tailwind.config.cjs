/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/*.astro',
      './src/layouts/*.astro',
      './src/components/*.astro',
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