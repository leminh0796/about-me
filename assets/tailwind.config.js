// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

let plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: [
		'../lib/**/*.ex',
		'../lib/**/*.leex',
		'../lib/**/*.heex',
		'../lib/**/*.lexs',
		'../lib/**/*.exs',
		'../lib/**/*.eex',
		'./js/**/*.js'
	],
  theme: {
    extend: {
      backgroundImage: {
        'beautiful': "url('../static/images/background.webp')",
      },
      height: {
        'fit-content': 'fit-content'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({addVariant}) => addVariant('phx-no-feedback', ['&.phx-no-feedback', '.phx-no-feedback &'])),
    plugin(({addVariant}) => addVariant('phx-click-loading', ['&.phx-click-loading', '.phx-click-loading &'])),
    plugin(({addVariant}) => addVariant('phx-submit-loading', ['&.phx-submit-loading', '.phx-submit-loading &'])),
    plugin(({addVariant}) => addVariant('phx-change-loading', ['&.phx-change-loading', '.phx-change-loading &']))
  ]
}
