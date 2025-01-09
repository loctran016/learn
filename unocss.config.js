/** @type {import('unocss').Config} */
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
    content: {
        filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,md}'],
    },
    presets: [presetUno()],
});

// theme: {
//     extend: {
//         // colors: {
//         //     transparent: 'transparent';
//         //     // brown: {
//         //     //     50: '#fdf8f6';
//         //     //     100: '#f2e8e5';
//         //     //     200: '#eaddd7';
//         //     //     300: '#e0cec7';
//         //     //     400: '#d2bab0';
//         //     //     500: '#bfa094';
//         //     //     600: '#a18072';
//         //     //     700: '#977669';
//         //     //     800: '#846358';
//         //     //     900: '#43302b';
//         //     // }
//         // },
//         minHeight: {
//             '100rem': '100rem',
//         },
//         fontFamily: {
//             // sans: ['Inter', ...defaultTheme.fontFamily.sans],
//             // LumiosMarker
//             heading: ['LumiosMarker', ...defaultTheme.fontFamily.serif],
//             content: ['Tangerine', ...defaultTheme.fontFamily.sans],
//             GrowingGarden: [
//                 'GrowingGarden',
//                 ...defaultTheme.fontFamily.serif,
//             ],
//         },
//     },
// },
// plugins: [
//     require('@tailwindcss/typography'),
//     require('tailwind-scrollbar')({ nocompatible: true }),
// ],
