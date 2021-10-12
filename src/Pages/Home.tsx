import React from "react";
<<<<<<< HEAD
import { Grid, ButtonGroup, Button, Typography, Slide } from "@mui/material";
import myPhoto from "../assets/Images/myPhoto.png";
import MyButton from "../Components/MyButton";
import { Link } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
=======
import { Grid, Typography } from "@mui/material";
import myPhoto from "../assets/Images/myPhoto.png";
import MyButton from "../Components/MyButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { MakeStylesInterface } from "../interface";
>>>>>>> mobile-resp

function Home() {
  // const theme = useTheme();
  // const useStyles: Function = makeStyles(({ theme }: any) => ({
  //   root: {
  //     // height: "100vh",
  //     backgroundColor: "blue",
  //     [theme.breakpoints.up("sm")]: {
  //       backgroundColor: "red",
  //     },
  //     [theme.breakpoints.up("md")]: {
  //       backgroundColor: "green",
  //     },
  //     [theme.breakpoints.up("lg")]: {
  //       backgroundColor: "orange",
  //     },
  //     [theme.breakpoints.up("xl")]: {
  //       backgroundColor: "cyan",
  //     },
  //   },
  // }));
  // const classes = useStyles();

  return (
    <Grid container direction="row" justifyContent="space-evenly">
      <Grid item lg={4}>
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.7, 1],
            scale: [0.5, 1, 1.5, 1],
            // borderRadius: [0, 20, 50, 50, 50],
          }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          initial={true}
        >
          <img
            src={myPhoto}
            alt="My Photo"
            style={{ height: "26rem", width: "26rem", borderRadius: "50%" }}
          />
        </motion.div>
      </Grid>
      <Grid
        container
        item
        lg={6}
        sx={{ border: "4px dashed black", borderRadius: "2rem" }}
        p={2}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item alignSelf="flex-start">
          <Typography variant="h1" color="initial">
            Hello
          </Typography>
        </Grid>
        <Grid item>
          <motion.div
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <Typography variant="h6" color="initial">
              Institute WebOps Coordinator @ IIT Madras | Project Management
              Coordinator @ Nirmaan IITM | Currently doing web development and
              coding | Aspiring Entrepreneur
            </Typography>
          </motion.div>
        </Grid>
        <Grid item container justifyContent="space-evenly">
          <motion.div
            animate={{ scale: [0, 0.5, 1] }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <Link to="/resume" style={{ textDecoration: "none" }}>
              <MyButton style={{ backgroundColor: "#eea302" }}>Resume</MyButton>
            </Link>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <MyButton style={{ backgroundColor: "#ff3b25" }}>
                Projects
              </MyButton>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <MyButton style={{ backgroundColor: "#80d8da" }}>
                Contact
              </MyButton>
            </Link>
          </motion.div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
