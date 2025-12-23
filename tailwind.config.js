/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Disable automatic dark mode based on system preference
    theme: {
        extend: {
            colors: {
                primary: '#11625F',
                secondary: '#D5882E',
                tertiary: '#628c84',
                navy: '#0F172A',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Noto Serif', 'serif'],
            },
            // AQUI ESTÁ A CORREÇÃO: Escala suave (apenas 10-15% maior que o padrão)
            fontSize: {
                xs: ['0.875rem', { lineHeight: '1.25rem' }],   // 14px (Legível, mas pequeno)
                sm: ['1rem', { lineHeight: '1.5rem' }],        // 16px (Tamanho ideal para detalhes)
                base: ['1.125rem', { lineHeight: '1.75rem' }], // 18px (Parágrafos confortáveis)
                lg: ['1.25rem', { lineHeight: '1.75rem' }],    // 20px (Destaques)
                xl: ['1.5rem', { lineHeight: '2rem' }],        // 24px (Subtítulos)
                '2xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
                '3xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
                '4xl': ['3rem', { lineHeight: '1' }],          // 48px
                '5xl': ['3.75rem', { lineHeight: '1' }],       // 60px
                '6xl': ['4.5rem', { lineHeight: '1' }],        // 72px
            },
        },
    },
    plugins: [],
}
