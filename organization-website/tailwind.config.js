/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				obsidian: '#02040a',
				'deep-navy': '#0f172a',
				'charcoal': '#1a1f2e',
				gold: {
					DEFAULT: '#d4af37',
					light: '#f3e5ab',
					dark: '#b8960c',
					metallic: 'linear-gradient(135deg, #d4af37 0%, #f3e5ab 50%, #d4af37 100%)',
				},
				platinum: '#e5e4e2',
				'financial-green': '#10b981',
				'negative-red': '#ef4444',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#d4af37',
					foreground: '#02040a',
				},
				secondary: {
					DEFAULT: '#0f172a',
					foreground: '#e2e8f0',
				},
				accent: {
					DEFAULT: '#d4af37',
					foreground: '#02040a',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			fontFamily: {
				serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
				sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
			},
			backgroundImage: {
				'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f3e5ab 50%, #d4af37 100%)',
				'dark-gradient': 'linear-gradient(180deg, #02040a 0%, #0f172a 100%)',
				'radial-gold': 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'pulse-gold': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
					'50%': { boxShadow: '0 0 20px 5px rgba(212, 175, 55, 0.2)' },
				},
				'ticker': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
				'pulse-gold': 'pulse-gold 2s infinite',
				'ticker': 'ticker 30s linear infinite',
				'shimmer': 'shimmer 3s infinite linear',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
