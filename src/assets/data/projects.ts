import { Project } from "../../interface";
import cart from "../Images/Portfolio/cart.png";
import socialMedia from "../Images/Portfolio/socialmedia.png";
import rollthedice from "../Images/Portfolio/rollthedice.png";
import portfolio from "../Images/Portfolio/portfolio.png";
import analogclock from "../Images/Portfolio/analogclock.png";

export const projects: Project[] = [
  {
    title: "My Porfolio",
    img: `${portfolio}`,
    link: "/",
    description: "",
  },
  {
    title: "Socail App",
    img: `${socialMedia}`,
    link: "https://social-media-app19gautam.herokuapp.com/",
    description: "",
  },
  {
    title: "Cart",
    img: `${cart}`,
    link: "https://cart1319.herokuapp.com/",
    description: "",
  },
  {
    title: "Roll the Dice",
    img: `${rollthedice}`,
    link: "http://ma13gautamvaja.me/Roll-the-dice/",
    description: "",
  },
  {
    title: "Analog Clock",
    img: `${analogclock}`,
    link: "http://ma13gautamvaja.me/analog-clock/",
    description: "",
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
