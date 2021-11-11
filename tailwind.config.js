const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			display: ['Inter-Bold', 'Inter', 'system-ui', 'sans-serif'],
			medium: ['Inter-SemiBold', 'Inter', 'system-ui', 'sans-serif'],
			sans: ['Inter', 'system-ui', 'sans-serif'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
