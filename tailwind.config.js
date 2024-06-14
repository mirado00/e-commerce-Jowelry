/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'or-gradient':
                    'linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
            },
            colors: {
                primary: '#C0C0C0',
                secondary: '#FFFFFF',
                third: '#EAEAEA',
                'cl-arg': '#C0C0C0',
                'cl-or': '#D4AF37',
            },
            container: {
                center: true,
                padding: {
                    default: '1rem',
                    sm: '3rem',
                },
            },
            fontFamily: {
                myFont: ['MyFont', 'sans-serif'],
            },
            fontSize: {
                xxs: '0.7rem',
            },
        },
    },
    plugins: [],
}
