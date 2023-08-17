/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	important: '#root',
	theme: {
		extend: {
			backgroundImage: "url('/src/assets/hero-bg.jpg')",
		},
	},
	plugins: [],
}
