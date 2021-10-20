import React from "react";
import { Grid, Typography } from "@mui/material";
import myPhoto from "../assets/Images/myPhoto.png";
import MyButton from "../Components/MyButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MobileHome() {
  return (
    <Grid container justifyContent="space-evenly">
      <Grid
        container
        item
        xs={11}
        lg={6}
        p={2}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
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
              <MyButton
                style={{
                  height: "5rem",
                  width: "5rem",
                  fontSize: "0.7rem",
                  backgroundColor: "#eea302",
                }}
              >
                Resume
              </MyButton>
            </Link>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <MyButton
                style={{
                  height: "5rem",
                  width: "5rem",
                  fontSize: "0.7rem",
                  backgroundColor: "#ff3b25",
                }}
              >
                Projects
              </MyButton>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <MyButton
                style={{
                  height: "5rem",
                  width: "5rem",
                  fontSize: "0.7rem",
                  backgroundColor: "#80d8da",
                }}
              >
                Contact
              </MyButton>
            </Link>
          </motion.div>
        </Grid>
      </Grid>
      <Grid item container xs={11} justifyContent="center">
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
            alt="profile"
            style={{
              height: "15rem",
              width: "15rem",
              borderRadius: "50%",
            }}
          />
        </motion.div>
      </Grid>
    </Grid>
  );
}

export default MobileHome;
