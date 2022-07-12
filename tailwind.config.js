/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        'bounce-short': 'bounce 1s ease-in-out 1',
        'ping-short': 'ping 1s ease-in-out 1',
        wiggle: 'wiggle 1s ease-in-out 1',
        zoomin: 'zoomin 1s ease-in-out 1',
        flip: 'flip 1s ease-in-out 1',
        wrong: 'wrong 2s ease-in-out 2',
        fadein: 'fadein 1s ease-in 1'
      },
      keyframes: {
        fadein: {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: 0
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          }
        },
        zoomin: {
          '0%, 100%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.08)'
          }
        },
        flip: {
          '0%': {
            transform: 'rotateX(0deg)'
          },
          '50%': {
            transform: 'rotateX(-90deg)'
          },
          '100%': {
            transform: 'rotateX(0deg)'
          }
        },
        wrong: {
          '0%': { 'border-color': ' rgba(0, 0, 0, 1)' },
          '50%': { 'border-color': 'rgba(255, 0, 0, 1)' },
          '100%': { 'border-color': 'rgba(0, 0, 0, 1)' }
        }
      },

      backgroundImage: {
        mainbackground:
          "url('https://images.unsplash.com/photo-1625293961325-170b642843dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')"
      },
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        space: '#335c67',
        pewter: '#93b7be',
        madder: '#e71d36',
        crayola: '#c0da74',
        crayolabright: '#e9ffa6',
        midyr: '#e5b181'
      }
    }
  },

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './templates/**/*.{js,jsx,ts,tsx}'
  ],
  corePlugins: {
    aspectRatio: false
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('daisyui')]
};
