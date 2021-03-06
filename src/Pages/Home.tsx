import React from "react";
import { Grid, Typography } from "@mui/material";
import myPhoto from "../assets/Images/myPhoto.png";
import MyButton from "../Components/MyButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import homeData from "../assets/data/home";

function Home() {
  return (
    <Grid container direction="row" justifyContent="space-evenly" mt={1}>
      <Grid item lg={4}>
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.7, 1],
            scale: [0.5, 1, 1, 1],
          }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          initial={true}
        >
          <img
            src={myPhoto}
            alt="Profile"
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
          <Typography variant="h2" color="initial" fontWeight="600">
            {homeData.gretings}
          </Typography>
        </Grid>
        <Grid item>
          <motion.div
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{ duration: 2, ease: "linear" }}
          >
            <Typography variant="h5" color="initial">
              {homeData.headline1}
            </Typography>
            <Typography variant="h5" color="initial" textAlign="center">
              {homeData.headline2}
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
