export const STATIC_DATA = {
    aboutMe: {
        intro: `Hello! My name is Ilya Ovechkin. I'm 25, and i am frontend developer. Welcome to my site. Here you can see my projects and contact with me.`,
        experience: `I worked for about 3 years in the Yandex group of companies. My work at Yandex-team gave me a lot of experience in solving tasks, managing and self-organization. I also have some experience commercial development like a frontend developer as part of a small studio, now I'm studying JavaScript and his frameworks in more details.`,
        goals: `I graduated from the Pedagogical University as a teacher of mathematics and informatics. In the process of training, I became interested in computer architecture. My dream is to become an operating system developer and write in assembly language.`,
        hobby: `At my free time, I'm tooking a development courses from open sources and reading professional literature. There I got most of the knowledge of programming languages.`,
        conclusion: `At this time I'm free and ready for a new job.`
    },
    skills: [
        {
            title: 'Languages',
            list: [
                'JavaScript (ES6+)',
                'C#',
                'SQL'
            ],
            color: 'green'
        },
        {
            title: 'Frameworks',
            list: [
                'Vue.js',
                'React',
                'Next.js',
                'Unity',
            ],
            color: 'blue'
        },
        {
            title: 'Tools/Others',
            list: [
                'GIT',
                'Docker',
                'PostgreSQL',
                'Bash/Shell scripting',
                'BEM'
            ],
            color: 'orange'
        },
    ],
    projects: [
        {
            title: 'Seltrans',
            description: `This's a multipage site for a company engaged in the production of components for railway transport and urban electric transport. I did the product pages and the blog. Since the customer didn't want to make an admin panel, later I was engaged in site support and content filling.`,
            github: 'https://github.com/Benya-Krik/seltrans',
            deploy: 'https://seltrans.ru/',
            color: 'blue',
        },
        {
            title: 'Flappy Bird Clone',
            description: 'This is a singleplayer project on C# and Unity, the game is adapted to any resolutions, autosave system implemented Using Yandex SDK, also some of the sprites were designed by me.',
            github: 'https://github.com/Benya-Krik/flappyBackup',
            deploy: 'https://yandex.ru/games/app/224987?draft=true&lang=ru',
            color: 'green',
        },{
            title: 'Kinopoisk',
            description: 'This is a SPA project with SSR. Project made on Vue.js, using Vuex state manager and SCSS preprocessor. Used API - kinopoisk.dev.',
            github: '#',
            deploy: '#',
            color: 'orange',
        },
    ]
}