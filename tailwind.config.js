const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['*.php', '*/*/*.php', '*/*/*.vue'],
  },
  theme: {
    extend: {
      screens: {
        'sm': '600px',
        'md': '768px',
        'lg': '1000px',
        'xl': '1440px',
      },
      fontFamily: {
        // 'sans': ['Inter'],
        // 'serif': ['"PT Serif"']
      },
      colors: {

      },
      maxHeight: {
        '720': '720px',
      },
      minHeight: {
        '720': '720px',
      },
      zIndex: {
        '-10': '-10'
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    plugin(function({ addUtilities }) {
        const newUtilities = {
            '.container': {
                maxWidth: '1440px',
                paddingRight: '1rem',
                paddingLeft: '1rem',
                margin: '0 auto',
                '@screen md': {
                    paddingRight: '2rem',
                    paddingLeft: '2rem',
                },
                '@screen lg': {
                    paddingRight: '3rem',
                    paddingLeft: '3rem',
                },
                '@screen xl': {
                    paddingRight: '4rem',
                    paddingLeft: '4rem',
                },
            },
        }
        addUtilities(newUtilities)
    })
  ],
}
