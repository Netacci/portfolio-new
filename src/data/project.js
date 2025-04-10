// import Campaign from '../assets/projects/campaign.png';
import Charity from '../assets/projects/charity.png';
import Cosy from '../assets/projects/cosy.png';
import Butter from '../assets/projects/butter-screenshot.jpg';
// import Memory from '../assets/projects/memory.png';
import Ws from '../assets/projects/ws.png';
import Real from '../assets/projects/skenny.jpg';
import Parivest from '../assets/projects/parivest.jpg';
import Greyfield from '../assets/projects/greyfield.jpg';
import Web3 from '../assets/projects/web3.png';
import Bd from '../assets/projects/bd.png';
import Prestay from '../assets/projects/prestay.png';
import Adblabla from '../assets/projects/adblabla.jpg';
import Kandy from '../assets/projects/kandy.jpg';
import RecipeFinderImage from '../assets/projects/recipefinder.png';

export const projects = [
  {
    name: 'AI Powered Expense Tracker',
    description:
      'This full-stack web application enables users to manage and track their expenses effortlessly. A key feature is the integration of Google OAuth for quick and secure authentication, implemented using Passport.js on the backend. This allows users to sign in seamlessly, ensuring a smooth user experience. Users can also download AI generated report based on their spending habits',
    github: 'https://github.com/Netacci/expenseTracker',
    live: 'https://expense-tracker-netaccis-projects.vercel.app',
    image: Bd,
    tags: [
      'ExpressJS',
      'ReactJS',
      'Redux',
      'Google oauth2',
      'Resend',
      'Shadcn',
      'MongoDB',
      'groq',
    ],
  },
  {
    name: 'AI-Powered Recipe Finder',
    description:
      'A full-stack web application that allows users to search for recipes by dish name and country. Leveraging AI, the app generates detailed recipes if they are not already in the database. It also integrates with the Pexels API to fetch high-quality food images and uses MongoDB for storing recipe data. React Query is used for efficient data fetching and state management.',
    github: 'https://github.com/Netacci/Recipefinder',
    live: 'https://recipefinder-netaccis-projects.vercel.app',
    image: RecipeFinderImage,
    tags: [
      'ExpressJS',
      'ReactJS',
      'Redux',
      'MongoDB',
      'Pexels API',
      'React Query',
      'Grok AI',
      'TypeScript',
      'Shadcn',
    ],
  },

  {
    name: 'Real estate agency',
    description:
      'This project enables realtors to sign up and list properties, providing a seamless experience for users to browse all approved listings. It also features an admin dashboard where administrators can efficiently manage realtors and their uploaded properties.  For this project, I used sendGrid to send OTP to realtors email when they sign up and I used morgan and winston for logging.',
    github: 'https://github.com/Netacci/skenny-backend',
    live: 'https://skenny.org',
    image: Real,
    tags: ['ExpressJS', 'ReactJS', 'Redux', 'MongoDB', 'NodeJS', 'SendGrid'],
  },
  {
    name: 'PreStayCheck',
    description:
      'A modern, AI-powered solution for Airbnb and property hosts to protect their assets. This landing page showcases PreStayCheck, a tool designed to help hosts track and manage property items, preventing theft by guests.',
    live: 'https://prestaycheck.vercel.app',

    image: Prestay,
    tags: ['ReactJS', 'TailwindCSS'],
  },
  {
    name: 'Adblabla',
    description:
      "The official website for Adblabla Technologies, a parent company focused on AI-driven startups. This sleek site highlights the company's innovative ventures in the AI space.",
    live: 'https://adblabla.vercel.app',

    image: Adblabla,
    tags: ['ReactJS', 'TailwindCSS', 'Shadcn'],
  },
  {
    name: 'Kandy Montessori Schools',
    description:
      "The official website for Kandy Montessori Group of Schools, offering a seamless online experience for parents and visitors to learn more about the school's programs and offerings.",
    live: 'https://www.kandymontessorischools.com/',

    image: Kandy,
    tags: ['ReactJS', 'TailwindCSS'],
  },
  {
    name: 'P2P',
    description:
      'This project enables users to send and receive money, marking a significant step in my backend development journey. I used WebSocket technology to provide real-time updates to users. This approach was not only more efficient than traditional polling but also incredibly exciting to implement. I also wrote an article on the websocket implementation and why it was used instead of polling. The frontend is work in progress',
    github: 'https://github.com/Netacci/bm',
    live: '',
    image: Ws,
    tags: ['ExpressJS', 'ReactJS', 'Redux', 'WebSocket'],
    article:
      'https://netacci.hashnode.dev/real-time-updates-with-websockets-in-react-and-express-js',
  },

  {
    name: 'Parivest website',
    description:
      'For this project. I developed the company website and integrated Contentful to host the blog content. Additionally, I built the web admin dashboard, which allows admins to view and manage all user details efficiently. While the repository is company-owned and private, this project showcases my ability to integrate CMS and create comprehensive admin UI. The admin dashboard is built with ReactJS and state management is handled with redux toolkit',

    live: 'https://parivest.com/',
    image: Parivest,
    tags: ['NextJS', 'MUI', 'Contentful', 'Redux Toolkit', 'TailwindCSS'],
  },
  {
    name: 'Web3 project',
    description:
      'I was curious about web3 and crypto so I did this project to dabble into that. This is a simple project that lets a user sign in using their solana wallet or metamask wallet.',

    live: 'https://web3-task-two.vercel.app/',
    github: 'https://github.com/Netacci/web3-task',
    article:
      'https://netacci.hashnode.dev/connect-metamask-wallet-to-a-react-app',
    image: Web3,
    tags: ['Nextjs', 'TailwindCSS', 'MetaMask', 'Solana', 'Vercel', 'web3'],
  },
  {
    name: 'Greyfield apartments and hotel',
    description:
      'This website, built with WordPress, showcases one of the most luxurious hotels and apartments in Benin, Nigeria. It was an incredible experience working with the clients on this project, as it allowed me to create a visually appealing and user-friendly site that reflects the elegance and sophistication of the hotel.',

    live: 'https://greyfieldapartments.com/',
    image: Greyfield,
    tags: ['Wordpress', 'CMS'],
  },
  // {
  //   name: 'Campaign page',
  //   description:
  //     'Webpage was used for a marketing campaign to promote a new product for the company',
  //   github: 'https://github.com/Netacci/After-countdown/settings',
  //   live: 'https://new-aftercountdown.netlify.app/',
  //   image: Campaign,
  //   tags: ['Html', 'css', 'javascript', 'bootstrap'],
  // },
  {
    name: 'Charity themed site',
    description:
      'Charity website built with HTML5, CSS and Javascript. This was originally built to be used as a theme website',
    github: 'https://github.com/Netacci/Team-Fierce-Charity',
    live: 'https://benignity-charity.netlify.app/',
    image: Charity,
    tags: ['Html', 'CSS', 'Javascript', 'Bootstrap'],
  },
  {
    name: 'Interior decor webpage',
    description: 'Charity website built with HTML5, CSS and Javascript',
    github: 'https://github.com/Netacci/Team-Fierce-Charity',
    live: 'https://cosy-line.netlify.app/',
    image: Cosy,
    tags: ['Html', 'CSS', 'Javascript', 'Bootstrap'],
  },
  // {
  //   name: 'Mini eCommerce site',
  //   description:
  //     'This mini e-commerce website was developed to highlight the advantages of using a Content Management System (CMS). The project served as the basis for an article I wrote, which was published by ButterCMS. This website demonstrates my ability to create functional e-commerce solutions and effectively communicate the benefits of CMS integration through technical writing.',
  //   github: 'https://github.com/Netacci/buttercms-ecommerce',

  //   image: Butter,
  //   tags: ['React', 'ButterCMS', 'Redux'],
  //   article: 'https://buttercms.com/blog/dynamic-react-ecommerce/',
  // },
  // {
  //   name: 'Netbox',
  //   description:
  //     'A mini game developed to learn javascript. One of my first projects',
  //   github: 'https://github.com/Netacci/memorygame',
  //   live: 'https://memory-game-sca.netlify.app/',
  //   image: Memory,
  //   tags: ['Javascript', 'CSS', 'HTML'],
  // },
];
