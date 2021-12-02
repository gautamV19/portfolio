import { Project } from "../../interface";
import cart from "../Images/Portfolio/cart.png";
import socialMedia from "../Images/Portfolio/socialmedia.png";
import rollthedice from "../Images/Portfolio/rollthedice.png";
import portfolio from "../Images/Portfolio/portfolio.png";
import typegr from "../Images/Portfolio/typegr.png";

export const projects: Project[] = [
  {
    title: "My Porfolio",
    img: `${portfolio}`,
    link: "/",
    description:
      "My personal portfolio website tells almost everything about myself. Stack Used : ReactJS, material UI and Frammer Motion",
  },
  {
    title: "Socail App",
    img: `${socialMedia}`,
    link: "https://social-media-app19gautam.herokuapp.com/",
    description:
      "A social media app to connect with people where you can make post and comments. Stack Used: MongoDB, ExpressJS, ReactJS, NodeJS",
  },
  {
    title: "Cart",
    img: `${cart}`,
    link: "https://cart1319.herokuapp.com/",
    description: "A simple cart app, I made this to practice React JS.",
  },
  {
    title: "Roll the Dice",
    img: `${rollthedice}`,
    link: "http://ma13gautamvaja.me/Roll-the-dice/",
    description: "A simple game using HTML, CSS and JavaScript.",
  },
  {
    title: "Todos Api using TypeGraphQL",
    img: `${typegr}`,
    link: "https://github.com/gautamV19/Todos-App",
    description:
      "A graphQL api for todos app with authentication. Stack used: TypeGraphQL, Apollo server, Typescript",
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
