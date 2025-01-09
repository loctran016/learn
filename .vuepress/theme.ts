// import { dateSorter } from "@vuepress/helper";
import { hopeTheme } from 'vuepress-theme-hope';

import { enNavbar } from './navbar.js';

export default hopeTheme(
    {
        navbar: enNavbar,
        // sidebar: enSidebar,
        sidebar: false,

        footer: 'MIT License ©️ Tran Tan Loc',

        displayFooter: true,

        // blogLocales: {
        //     tutorial: 'Tutorial',
        // },

        metaLocales: {
            editLink: 'Edit this page on GitHub',
        },

        hostname: 'https://loctran016.github.io/learn/',

        author: {
            name: 'LocTran016',
            url: 'https://loctran016.github.io',
        },

        favicon: '/favicon.ico',

        iconAssets: 'fontawesome-with-brands',

        // logo: "",
        // TODO: add logo

        repo: 'loctran016/learn',
        // docsDir: "blog",

        blog: {
            description:
                'A notes for learning Programming 🧑‍💻 <br> & English 📖',
            intro: 'https://loctran016.github.io',
            avatar: 'logo.jpg',
            medias: {
                Discord: 'https://example.com',
                // Dribbble: "https://example.com",
                Email: 'mailto:ttloc.y24@ump.edu.vn',
                // Evernote: "https://example.com",
                Facebook: 'https://facebook.com/trantanloc016',
                // Flipboard: "https://example.com",
                GitHub: 'https://github.com/loctran016',
                // Gitlab: "https://example.com",
                // Gmail: "mailto:info@example.com",
                // Instagram: "https://example.com",
                // Linkedin: "https://example.com",

                // Pocket: "https://example.com",
                // Rss: "https://example.com",
                // Steam: "https://example.com",
                // VuePressThemeHope: {
                //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
                //   link: "https://theme-hope.vuejs.press",
                // },
            },
        },

        // fullscreen: true,

        encrypt: {
            config: {
                // "/demo/encrypt.html": ["1234"],
                // "/zh/demo/encrypt.html": ["1234"],
            },
        },

        // enable it to preview all changes in time
        // hotReload: true,

        markdown: {
            // math: {
            //     type: 'mathjax', // or 'mathjax'
            // },

            align: true,
            attrs: true,
            component: true,
            mark: true,
            spoiler: true,
            highlighter: {
                type: 'shiki', // or "prismjs"
                langs: ['ts', 'json', 'vue', 'js', 'css', 'html'],
                theme: 'dracula',
                // shiki or prism options
            },

            // or

            // highlighter: 'prismjs',
            // markmap: true,
            // stylize: [
            //   {
            //     matcher: "Recommended",
            //     replacer: ({ tag }) => {
            //       if (tag === "em")
            //         return {
            //           tag: "Badge",
            //           attrs: { type: "tip" },
            //           content: "Recommended",
            //         };
            //     },
            //   },
            // ],
            // TODO: Check back on this later
            sub: true,
            sup: true,
            // tasklist: true,

            imgLazyload: true,
            // Enable image mark
            imgMark: true,
            // Enable image size
            imgSize: true,
            mermaid: true,
        },

        plugins: {
            slimsearch: true,
            blog: {
                excerptLength: 0,
                type: [
                    //   {
                    //     key: "tutorial",
                    //     filter: (page): boolean =>
                    //       Boolean(page.filePathRelative?.includes("demo/")),
                    //     sorter: (pageA, pageB): number =>
                    //       dateSorter(pageA.frontmatter.date, pageB.frontmatter.date),
                    //     layout: "BlogType",
                    //   },
                ],
            },
            // backToTop: true,
            // install @waline/client before enabling it
            // WARNING: This is a test server for demo only.
            // You should create and use your own comment service in production.
            // comment: {
            //   provider: "Waline",
            //   serverURL: "https://waline-comment.vuejs.press",
            // },

            components: {
                components: [
                    'Badge',
                    'VPCard',
                    'PDF',
                    'Share',
                    'VidStack',
                    'FontIcon',
                ],
                componentOptions: {
                    fontIcon: {
                        assets: ['iconify', 'fontawesome'],
                    },
                    share: {
                        //   colorful: true,
                        services: [
                            'email',
                            'facebook',
                            'messenger',
                            'telegram',
                        ],
                        // colorful: true,
                        // inline: true,
                    },
                },
                //   componentsOptions: {},
            },

            // markdownTab: true,

            // markdownMath: true,
            comment: {
                provider: 'Giscus',
                // repo: 'notable', repoId: '', category: '',categoryId:''
                repo: 'loctran016/notable',
                repoId: 'R_kgDONUFZ3A',
                category: 'Q&A',
                categoryId: 'DIC_kwDONUFZ3M4CklO9',
                mapping: 'title',
                lightTheme: 'light_protanopia',
                darkTheme: 'dark_protanopia',
            },

            // All features are enabled for demo, only preserve features you need here
            // mdEnhance: {
            // vPre: true,
            // install chart.js before enabling it
            // chart: true,
            // insert component easily
            // install echarts before enabling it
            // echarts: true,
            // install flowchart.ts before enabling it
            // flowchart: true,
            // gfm requires mathjax-full to provide tex support
            // gfm: true,
            // install mermaid before enabling it
            // playground: {
            //   presets: ["ts", "vue"],
            // },
            // install @vue/repl before enabling it
            // vuePlayground: true,
            // },

            // uncomment these if you want a PWA
            pwa: {
                favicon: '/favicon.ico',
                cacheHTML: true,
                cacheImage: true,
                appendBase: true,
                apple: {
                    icon: '/assets/apple-touch-icon.png',
                    statusBarColor: 'black',
                },
                // msTile: {
                //   image: "/assets/ms-icon-144.png",
                //   color: "#ffffff",
                // },
                manifest: {
                    icons: [
                        {
                            src: '/assets/web-app-manifest-512.png',
                            sizes: '512x512',
                            purpose: 'maskable',
                            type: 'image/png',
                        },
                        {
                            src: '/assets/web-app-manifest-192x192.png',
                            sizes: '192x192',
                            purpose: 'maskable',
                            type: 'image/png',
                        },
                        // {
                        //   src: "/assets/icon/chrome-512.png",
                        //   sizes: "512x512",
                        //   type: "image/png",
                        // },
                        // {
                        //   src: "/assets/icon/chrome-192.png",
                        //   sizes: "192x192",
                        //   type: "image/png",
                        // },
                    ],
                    //   shortcuts: [
                    //     {
                    //       name: "Demo",
                    //       short_name: "Demo",
                    //       url: "/demo/",
                    //       icons: [
                    //         {
                    //           src: "/assets/icon/guide-maskable.png",
                    //           sizes: "192x192",
                    //           purpose: "maskable",
                    //           type: "image/png",
                    //         },
                    //       ],
                    //     },
                    //   ],
                },

                // install @vuepress/plugin-revealjs before enabling it
                // revealjs: {
                //   plugins: ["highlight", "math", "search", "notes", "zoom"],
                // },
            },
        },
    },
    { custom: true },
);
