import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from 'vuepress';
import { getDirname, path } from 'vuepress/utils';
// import UnoCSS from 'unocss/vite'

// import viteImagemin from 'vite-plugin-imagemin';
import theme from './theme.js';
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    base: '/learn/',
    lang: 'vi-VN',

    dest: './dist',
    title: 'Self Learn',
    description: 'A note for yds-er',

    //   bundler: viteBundler(),

    bundler: viteBundler({
        viteOptions: {
            // plugins: [viteImagemin()],
        },
    }),

    theme,

    plugins: [removeHtmlExtensionPlugin()],

    // enable it with pwa
    shouldPrefetch: false,

    head: [
        //...

        // Import the corresponding link
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        [
            'link',
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: '',
            },
        ],
        [
            'link',
            {
                href: 'https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Patrick+Hand+SC&family=Roboto+Slab:wght@100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet',
                // href: 'https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Quicksand:wght@300..700&family=Caveat:wght@400..700&family=Patrick+Hand&display=swap',
                rel: 'stylesheet',
            },
        ],
    ],

    alias: {
        '@theme-hope/modules/blog/components/BlogHero': path.resolve(
            __dirname,
            './components/BlogHero.vue',
        ),
    },
});
