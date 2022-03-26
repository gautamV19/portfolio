import { Project } from "../../interface";

import socialMedia from "../Images/Portfolio/socialmedia.png";
import rollthedice from "../Images/Portfolio/rollthedice.png";
import portfolio from "../Images/Portfolio/portfolio.png";
import typegr from "../Images/Portfolio/typegr.png";
import cfi from "../Images/Portfolio/cfiwebsite.png";
import scoring from "../Images/Portfolio/scoringDetector.png";
import rtk from "../Images/Portfolio/rtk.png";

export const projects: Project[] = [
  {
    title: "My Porfolio",
    img: `${portfolio}`,
    link: "https://github.com/gautamV19/portfolio",
    description:
      "My personal portfolio website tells almost everything about myself. Stack Used : ReactJS, Material UI and Frammer Motion",
  },
  {
    title: "Socail App",
    img: `${socialMedia}`,
    link: "https://social-media-app19gautam.herokuapp.com/",
    description:
      "A social media app to connect with people where you can make post and comments. Stack Used: MongoDB, ExpressJS, ReactJS, NodeJS",
  },
  {
    title: "CFI website",
    img: `${cfi}`,
    link: "https://cfi.iitm.ac.in",
    description:
      "Contributed in building the main site for cfi with other developers in my college. Stack used: React with typescript, Material UI, Framer Motion",
  },
  {
    title: "Scoring Detector",
    img: `${scoring}`,
    link: "https://github.com/gautamV19/scoring-detector9",
    description:
      "Upload a video it will show is the event scoring or not. My contribution was to make api in flask to interact with ml code, and also node backend to upload the video. Stack used: Node, Express, Flask",
  },
  {
    title: "Dogs gallery",
    img: `${rtk}`,
    link: "https://github.com/gautamV19/reduxToolKit",
    description:
      "Fetch dogs picture and show using ReduxToolkit. This is learning project.",
  },
  {
    title: "Chat Api",
    img: `${typegr}`,
    link: "https://github.com/gautamV19/chat-app-graphql",
    description:
      "Basic chating to send and get message using TypeGraphQL. Stack used: TypeGraphQL, Apollo server, Typescript",
  },
  {
    title: "Roll the Dice",
    img: `${rollthedice}`,
    link: "http://ma13gautamvaja.me/Roll-the-dice/",
    description: "A simple game using HTML, CSS and JavaScript.",
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
