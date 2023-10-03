/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)',
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue: 'hsl(233, 8%, 79%)',
        darkGrayishBlue: 'hsl(236, 13%, 42%)',
        veryDarkBlue: 'hsl(240, 100%, 5%)',
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        openmenu: 'openmenu 500ms ease-in',
        closemenu: 'closemenu 500ms ease-in',
      },
      keyframes: {
        openmenu: {
          // initial position
          '0%': { right: '-300px' },
          // final position
          '100%': { right: '0px' }
        },
        closemenu: {
          // initial position
          '0%': { right: '0px' },
          // final position
          '100%': { right: '-300px' }
        },
      },
    },
  },
  plugins: [],
}
