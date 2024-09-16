import Campaign from '../assets/projects/campaign.png';
import Charity from '../assets/projects/charity.png';
import Cosy from '../assets/projects/cosy.png';
import Butter from '../assets/projects/butter-screenshot.png';
import Memory from '../assets/projects/memory.png';
import Ws from '../assets/projects/ws.png';
import Real from '../assets/projects/real.png';
import Parivest from '../assets/projects/parivest.png';
import Greyfield from '../assets/projects/greyfield.png';
import Web3 from '../assets/projects/web3.png';
import Bd from '../assets/projects/bd.png';

export const projects = [
  {
    name: 'Expense Tracker',
    description:
      'This full-stack web application enables users to manage and track their expenses effortlessly. A key feature is the integration of Google OAuth for quick and secure authentication, implemented using Passport.js on the backend. This allows users to sign in seamlessly, ensuring a smooth user experience.',
    github: 'https://github.com/Netacci/expenseTracker',
    live: 'https://expense-tracker-netaccis-projects.vercel.app',
    image: Bd,
    tags: [
      'ExpressJS',
      'ReactJS',
      'Redux',
      'Google oauth2',
      'SendGrid',
      'Shadcn',
    ],
    // article:
    //   'https://netacci.hashnode.dev/real-time-updates-with-websockets-in-react-and-express-js',
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
    name: 'Real estate agency',
    description:
      'This project enables realtors to sign up and list properties, providing a seamless experience for users to browse all approved listings. It also features an admin dashboard where administrators can efficiently manage realtors and their uploaded properties. While the frontend is still a work in progress, the backend infrastructure is robust and ready to support a dynamic real estate marketplace. For this project, I used sendGrid to send OTP to realtors email when they sign up and I used morgan and winston for logging.',
    github: 'https://github.com/Netacci/skenny-backend',
    live: 'https://www.postman.com/red-station-829900/workspace/public/folder/18521077-b0dfa972-b981-43e1-b539-e76174dbfe12?action=share&creator=18521077&ctx=documentation&active-environment=18521077-749b7b31-a059-4a38-bf0e-d6f0ae0345c8',
    image: Real,
    tags: ['ExpressJS', 'ReactJS', 'Redux', 'MongoDB', 'NodeJS', 'SendGrid'],
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
  {
    name: 'Campaign page',
    description:
      'Webpage was used for a marketing campaign to promote a new product for the company',
    github: 'https://github.com/Netacci/After-countdown/settings',
    live: 'https://new-aftercountdown.netlify.app/',
    image: Campaign,
    tags: ['Html', 'css', 'javascript', 'bootstrap'],
  },
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
  {
    name: 'Mini eCommerce site',
    description:
      'This mini e-commerce website was developed to highlight the advantages of using a Content Management System (CMS). The project served as the basis for an article I wrote, which was published by ButterCMS. This website demonstrates my ability to create functional e-commerce solutions and effectively communicate the benefits of CMS integration through technical writing.',
    github: 'https://github.com/Netacci/buttercms-ecommerce',
    live: 'https://buttercms-ecommerce.vercel.app',
    image: Butter,
    tags: ['React', 'ButterCMS', 'Redux'],
    article: 'https://buttercms.com/blog/dynamic-react-ecommerce/',
  },
  {
    name: 'Netbox',
    description:
      'A mini game developed to learn javascript. One of my first projects',
    github: 'https://github.com/Netacci/memorygame',
    live: 'https://memory-game-sca.netlify.app/',
    image: Memory,
    tags: ['Javascript', 'CSS', 'HTML'],
  },
];
