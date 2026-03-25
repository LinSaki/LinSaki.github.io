// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of projects from coursework, professional experience, and personal exploration. Each project reflects my journey in learning, building, and experimenting with code from classroom assignments to creative side projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-pomodoro-gacha-game",
          title: 'Pomodoro Gacha Game',
          description: "Work in Progress - Turning your focus time into rewards",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project.html";
            },},{id: "projects-capstone-project-therapeia",
          title: 'Capstone Project - Therapeia',
          description: "Therapy VR and Mobile App",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-full-stack-web-application",
          title: 'Full-Stack Web Application',
          description: "Built with Spring Boot (REST API), Angular frontend, and a connected database.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-cat-blog-website",
          title: 'Cat Blog Website',
          description: "Early Web Development Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-flappy-pikmin",
          title: 'Flappy Pikmin',
          description: "Flappy Bird that inspired my first Unity Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-front-end-web-application",
          title: 'Front-end Web Application',
          description: "Work in Progress – Front-End Web App (React.js &amp; Tailwind CSS)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-fox-vs-zombies",
          title: 'Fox vs. Zombies',
          description: "3D Third-Person Shooter Game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-bullet-hell-mini-game",
          title: 'Bullet Hell Mini Game',
          description: "Mini bullet game built with WPF, .NET Framework, and C#",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-mobile-2d-rpg-mini-game",
          title: 'Mobile 2D RPG Mini Game',
          description: "Work in Progress - Mini game where you defend a friend from waves of enemies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%69%74%6C%69%6E.%73%61%71%75%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/LinSaki", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kaitlin-saqui", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
