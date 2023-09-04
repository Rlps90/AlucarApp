/** @type {import('tailwindcss').Config} */
/* global require, module */
/* eslint no-undef: "error" */

const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: { backgroundImage: "url('/src/assets/hero-bg.jpg')" },
	},
	plugins: [],
})
