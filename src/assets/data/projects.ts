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

export const projects: Project[] = [
  {
    title: "Instispace",
    img: `${instispace}`,
    link: "https://play.google.com/store/apps/details?id=com.cfi.instispace",
    description:
      "An app to share opportunities and events inside IIT Madras; it can be used to connect with like-minded people",
  },
  {
    title: "Science to School",
    img: `${nss}`,
    link: "",
    description:
      "This website is made to connect schools with the NSS team at IIT Madras. With this website, the NSS team can easily send notifications of events and announcements to the schools. They can also take tests and send assignments.",
  },
  {
    title: "Time Lapse Data Visualizer",
    img: `${google}`,
    link: "https://www.dropbox.com/s/ibgjeft3ym9y3tf/Final%20Google%20Demo%2016%20sep.mov?dl=0",
    description:
      "An Youtube data analytics tool for content creators; Developed under guidance of Google. Proposed a Layer-wise and hierarchical representation of all the trading videos in the selected time.",
  },
  {
    title: "CFI Website",
    img: `${cfi}`,
    link: "https://cfi.iitm.ac.in",
    description:
      "Contributed in building the main site for cfi with other developers in my college. Stack used: React with typescript, Material UI, Framer Motion",
  },
  {
    title: "Mapsmap",
    img: `${mapsmap}`,
    link: "https://github.com/gautamV19/mapsmap-server",
    description:
      "Crowdsource and crowdfund collaboration on maps of problems – Hackathon project in a team of 8. Most voted submission on the website and got selected as a Software Developer into Maps DAO community.",
  },
  {
    title: "Logistics Lab Bussiness Site",
    img: `${logi}`,
    link: "https://web1.iitm.ac.in/logistics/",
    description: "Worked as a Frontend Developer to build the bussiness site.",
  },
  {
    title: "Scoring Detector",
    img: `${scoring}`,
    link: "https://github.com/gautamV19/scoring-detector9",
    description:
      "Upload a video it will show is the event scoring or not. My contribution was to make api in flask to interact with ml code, and also node backend to upload the video. Stack used: Node, Express, Flask",
  },
  {
    title: "Code Editor",
    img: `${editor}`,
    link: "https://dev-editor.netlify.app",
    description: "HTML, CSS and JavaScript code editor for rapid development",
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
