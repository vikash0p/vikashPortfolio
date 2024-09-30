/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	container: {
  		padding: {
  			DEFAULT: '15px'
  		}
  	},
  	extend: {
  		listStyleImage: {
  			checkmark: 'url("/8665019_check_mark_icon.png") '
  		},
  		colors: {
  			primary: '#131424',
  			secondary: '#393A47',
  			accent: '#F13024'
  		},
  		backgroundImage: {
  			explosion: 'url("/images/bg-explosion.png")',
  			circles: 'url("/images/bg-circles.png")',
  			circleStar: 'url("/images/circle-star.svg")',
  			site: 'url("/images/site-bg.svg")'
  		},
  		animation: {
  			'spin-slow': 'spin 6s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: ['tailwind-scrollbar', require("tailwindcss-animate")],
}
