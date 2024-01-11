import { Project } from "../../interface";

import socialMedia from "../Images/Portfolio/socialmedia.png";
import rollthedice from "../Images/Portfolio/rollthedice.png";
import portfolio from "../Images/Portfolio/portfolio.png";
import typegr from "../Images/Portfolio/typegr.png";
import cfi from "../Images/Portfolio/cfiwebsite.png";
import scoring from "../Images/Portfolio/scoringDetector.png";
import rtk from "../Images/Portfolio/rtk.png";
import instispace from "../Images/Portfolio/instispace.png";
import nss from "../Images/Portfolio/nss.png";
import google from "../Images/Portfolio/google.png";
import mapsmap from "../Images/Portfolio/mapsmap.png";
import logi from "../Images/Portfolio/logi.png";
import editor from "../Images/Portfolio/editor.png";
import crypto from "../Images/Portfolio/Crypto_Trading.png";
import tsa from "../Images/Portfolio/TSA.png";
import tic from "../Images/Portfolio/tic_tac_toe.png";
import cpu from "../Images/Portfolio/cpu.png";

export const projects: Project[] = [
  {
    title: "Time Lapse Data Visualizer",
    img: `${google}`,
    demo: "https://drive.google.com/file/d/1tqAdfVlO3n4cORGmiVYETRwg1ROsXJAx/view?usp=share_link",
    link: "https://drive.google.com/file/d/1XdN_xs_uZPlkkraOEJz4KGcnB-8OpmpK/view",
    description: [
      "Created a category-specific time series data visualizer for YouTube to monitor trends relevant to YouTubers",
      "Automated the backend to clean and process raw YouTube data for dynamic time-series data visualization",
    ],
  },
  {
    title: "Crypto Trading Simulator",
    img: `${crypto}`,
    link: "https://github.com/gautamV19/Crypto-Trading-Plateform",
    demo: "",
    description: [
      "Created a C++ crypto trading system with the time-frame-wise order book execution and matching algorithm",
      "Employed object-oriented programming, including static functions, classes and error handling for reliability",
      "Implemented features like importing orders from CSV, tracking wallet balances, and rapid bid-ask resolution",
    ],
  },
  {
    title: "Stock Price Forecasting",
    img: `${tsa}`,
    link: "https://github.com/gautamV19/Stock-Price-Forecasting/blob/master/TSA_Microsoft_Price.ipynb",
    demo: "",
    description: [
      "Performed time series analysis and deep learning on Microsoft Stock's Price using Y-Finance data in Python",
      "Employed data cleaning and smoothing methods; implemented ARIMA and GARCH models on closing price",
      "Used CNN Model to achieve a remarkable 90% accuracy rate with 1000 epochs with 2 neural network layers",
    ],
  },
  {
    title: "Networked Tic-Tac-Toe On Lan",
    img: `${tic}`,
    link: "https://github.com/gautamV19/Networked-Tic-Tac-Toe-On-Lan",
    demo: "",
    description: [
      "Developed a multiplayer server-based tic-tac-toe game on LAN using network programming",
      "The game allowed for multiple clients to connect to a server, and the server could handle multiple games in parallel using multithreading. Simulated the TCP congestion protocol under the given parameters",
    ],
  },
  {
    title: "CPU Implementation",
    img: `${cpu}`,
    link: "https://github.com/gautamV19/CPU-Implementation",
    demo: "",
    description: [
      "Implemented ALU with 8-bit integer operations, 12-bit floating point arithmetic, and 8-bit comparator",
      "Designed 12-bit register file with 8 registers, 2 read ports, and 1 write port; Implemented Cache-Simulator",
    ],
  },
  {
    title: "Logistics Optimization",
    img: `${logi}`,
    link: "https://blog.ankitsanghvi.in/distributed-graph-backend-logistics-sytem/",
    demo: "https://web1.iitm.ac.in/logistics/",
    description: [
      "Collaborated in a 5-member team to build a delivery system, focusing on ReactJS front-end development",
      "Developed a graphical distributed backend using TypeGraphQL(Typescript) , PostgreSQL Database, TypeORM",
      "Coded 2 pages of Landing Page with another developer from Figma design and Build Redux store for 3 entities",
    ],
  },
  {
    title: "Instispace",
    img: `${instispace}`,
    link: "https://play.google.com/store/apps/details?id=com.cfi.instispace",
    demo: "",
    description: [
      "Developed an app for connecting like-minded people at IIT Madras through opportunities and events",
      "Designed and built GraphQL APIs for CRUD operations in the app using TypeGraphQL and PostgreSQL",
      "Worked on the app from ideation to successful launch, with 1000+ downloads and 4.9 rating on PlayStore",
    ],
  },
  {
    title: "Science to School",
    img: `${nss}`,
    link: "",
    demo: "",
    description: [
      "Led a team of 6 developers to buid a tool for promoting Science in rural areas. This enables kids to learn science experiments through interactive quizzes and assignments. Created PostgreSQL Database with rest APIs in NodeJS and ExpressJS. Guided 2 volunteers in front-end dev in React and Material-UI, implemented Redux Store for state management",
    ],
  },
  {
    title: "CFI Website Development",
    img: `${cfi}`,
    link: "https://cfi.iitm.ac.in",
    demo: "",
    description: [
      "Led ideation & wireframed UI (using Balsamiq) for CFI IIT Madras, a student-run innovation community",
      "Developed 3 main pages using React & Material UI, converting Figma designs to web pages",
      "Maintained website for 1.5 years, enhancing CFI's reach to investors and companies",
    ],
  },
  {
    title: "Mapsmap",
    img: `${mapsmap}`,
    link: "https://github.com/gautamV19/mapsmap-server",
    demo: "",
    description: [
      "Crowdsource and crowdfund collaboration on maps of problems – Hackathon project in a team of 8",
      "Built the backend APIs, structured the database, and documented it in a team of 2, working as a lead",
      "Most voted submission on the website and got selected as a Software Developer into Maps DAO community",
    ],
  },
  {
    title: "Scoring Detector",
    img: `${scoring}`,
    link: "https://github.com/gautamV19/scoring-detector9",
    demo: "",
    description: [
      "Upload a video it will show is the event scoring or not. My contribution was to make api in flask to interact with ml code, and also node backend to upload the video. Stack used: Node, Express, Flask",
    ],
  },
  {
    title: "Code Editor",
    img: `${editor}`,
    link: "",
    demo: "https://dev-editor.netlify.app",
    description: ["HTML, CSS and JavaScript code editor for rapid development"],
  },
];

// bin...

/**
 *  <Switch>
          <TransitionGroup>
            <Route exact path="/">
              <Fade in={true} appear={true}>
                <Home />
              </Fade>
            </Route>
            <Fade in={true} appear={true}>
              <Route exact path="/resume" component={Resume} />
            </Fade>
            <Fade in={true} appear={true}>
              <Route exact path="/portfolio" component={Portfolio} />
            </Fade>
            <Fade in={true} appear={true}>
              <Route exact path="/contact" component={Contact} />
            </Fade>
          </TransitionGroup>
        </Switch>
 */
