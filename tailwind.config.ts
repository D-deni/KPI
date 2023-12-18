import type {Config} from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bgWhite': 'rgba(255,255,255, 0.3)',
        'blueDark': '#023e8a',
        'blueDarkSemiLight': '#0077B6',
        'blueSemiLight': '#0096C7',
        'semiCyan': '#3fb1c9',
        'cyan': '#90E0EF',
        'bgPages': '#4B5563'
      },
    }
  },
  plugins: [
    require('autoprefixer')
  ],

  content: []
}