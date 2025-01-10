import { navbar } from 'vuepress-theme-hope';

export const enNavbar = navbar([
    // "/",

    { text: 'Tag', icon: 'tag', link: '/tag/javascript/' },
    {
        text: 'Category',
        icon: 'category',
        prefix: '/category/',
        children: [
            { text: 'Front End', link: 'front-end/' },
            { text: 'Design', link: 'des/' },
            { text: 'IELTS', link: 'ielts/' },
            // { text: 'Năm 2', link: 'y2/' },
            // { text: 'Năm 3', link: 'y3/' },
            // { text: 'Năm 4', link: 'y4/' },
            // { text: 'Năm 5', link: 'y5/' },
            // { text: 'Năm 6', link: 'y6/' },
        ],
    },
    //   "/demo/",
    //   {
    //     text: "Posts",
    //     icon: "pen-to-square",
    //     prefix: "/posts/",
    //     children: [
    //       {
    //         text: "Banana",
    //         icon: "pen-to-square",
    //         prefix: "banana/",
    //         children: [
    //           {
    //             text: "Banana 1",
    //             icon: "pen-to-square",
    //             link: "1",
    //           },
    //           {
    //             text: "Banana 2",
    //             icon: "pen-to-square",
    //             link: "2",
    //           },
    //           "3",
    //           "4",
    //         ],
    //       },
    //       { text: "Cherry", icon: "pen-to-square", link: "cherry" },
    //       { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
    //       "tomato",
    //       "strawberry",
    //     ],
    //   },
]);
