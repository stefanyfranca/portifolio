/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#070b14',
        surface: '#0d1424',
        'surface-2': '#111a30',
        line: '#1c2740',
        primary: '#22d3ee',
        secondary: '#a78bfa',
        accent: '#34d399',
        danger: '#fb7185',
        ink: '#e6edf7',
        muted: '#8b98b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(34, 211, 238, 0.45)',
        'glow-soft': '0 0 80px -30px rgba(167, 139, 250, 0.6)',
        card: '0 10px 40px -12px rgba(0, 0, 0, 0.55)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
