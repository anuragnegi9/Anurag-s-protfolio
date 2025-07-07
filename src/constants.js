// Skills Section Logo's

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png'
import sassLogo from './assets/tech_logo/sass.png'
import javascriptLogo from './assets/tech_logo/javascript.png'
import reactjsLogo from './assets/tech_logo/reactjs.png'
import reduxLogo from './assets/tech_logo/redux.png'
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png'
import materialuiLogo from './assets/tech_logo/materialui.png'
import gitLogo from './assets/tech_logo/git.png'
import githubLogo from './assets/tech_logo/github.png'
import vscodeLogo from './assets/tech_logo/vscode.png'
import vercelLogo from './assets/tech_logo/vercel.png'
import passwordGenerator from './assets/work_logo/PasswordGenerator.png'
import ImageEnhancer from './assets/work_logo/imageEnhancer.png'
import CurrencyConverter from './assets/work_logo/currencyConverter.png'
import movie_app from './assets/work_logo/movie_app.png'
import cryptoTracker from './assets/work_logo/cryptoTracker.png'


// Education Section Logo's

import collegelogo from './assets/education_logo/College_logo.jpg'
import SchoolLogo from './assets/education_logo/school_logo.jpg'

//project section logo

import imagesearchlogo from './assets/work_logo/image_search.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },

  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },

    ],
  },
];

export const education = [
  {
    id: 0,
    img: collegelogo,
    school: "Maharaja Agrasen Himalayan Garhwal University",
    date: "june 2021 - June 2024",
    grade: "7.81 CGPA",
    desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from MAHGU University Pauri. During my time at MAHGU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at MAHGU University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor's of Computer Applications - BCA",
  },
  {
    id: 1,
    img: SchoolLogo,
    school: "Govt. Intercollege Gauchar",
    date: "Ap 2020 - March 2021",
    grade: "65.4%",
    desc: "I completed my class 12th education from Govt. InterCollege Gauchar, under the Uttarakhand board, where I studied Science with Math.",
    degree: "12th, PCM",
  },
];

export const projects = [

  {
    id: 0,
    title: "Image Enhancer",
    description:
      "A React.js-based tool that allows users to upload low-quality images and enhance them using AI. It processes the image on the server and returns a high-resolution, improved version in seconds.",
    image: ImageEnhancer,
    tags: ["React JS", "API", "Tailwind", "Javascript"],
    github: "https://github.com/anuragnegi9/ImageEnhancer",
    webapp: "https://anurag-image-enhancer.vercel.app/",
  },

  {
    id: 1,
    title: "Movie App",
    description:
      "React-based app that lets users discover trending movies and search thousands of titles instantly using the TMDB API. With features like live search, loading spinners, and Appwrite-powered analytics, it offers a fast and user-friendly experience for users.",
    image: movie_app,
    tags: ["React JS", "Tailwind", "API", "CSS", "Javascript"],
    github: "https://github.com/anuragnegi9/Movie_App",
    webapp: "https://movie-app-theta-inky.vercel.app/",
  },

  {
    id: 3,
    title: "Crypto Tracker",
    description:
      "A responsive web application built with React.js to track real-time prices of cryptocurrencies. It features a clean UI, live data updates, and seamless user interactions.",
    image: cryptoTracker,
    tags: ["React JS", "API", "Live Crypto Update", "CSS", "Javascript"],
    github: "https://github.com/anuragnegi9/CryptoTracker",
    webapp: "https://crypto-trackeri.vercel.app/",
  },

];  