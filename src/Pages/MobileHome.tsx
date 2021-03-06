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
          <Typography
            variant="h4"
            color="initial"
            mb={4}
            sx={{ fontWeight: "600" }}
          >
            Jai Swaminarayan
          </Typography>
        </Grid>
        <Grid item>
          <motion.div
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <Typography variant="h6" color="initial">
              Full stack developer | Product Management | Entrepreneurship
            </Typography>
            <Typography variant="h6" color="initial" mt={2} mb={2}>
              EE at IIT M | Buiding softwares for real impact
            </Typography>
          </motion.div>
        </Grid>
        <Grid item container>
          <motion.div
            animate={{ scale: [0, 0.5, 1] }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <Grid item container spacing={3} justifyContent="center">
              <Grid item>
                <Link to="/resume" style={{ textDecoration: "none" }}>
                  <MyButton
                    style={{
                      height: "6.8rem",
                      width: "6.8rem",
                      fontSize: "1.3rem",
                      backgroundColor: "#eea302",
                    }}
                  >
                    Resume
                  </MyButton>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/portfolio" style={{ textDecoration: "none" }}>
                  <MyButton
                    style={{
                      height: "6.8rem",
                      width: "6.8rem",
                      fontSize: "1.3rem",
                      backgroundColor: "#ff3b25",
                    }}
                  >
                    Projects
                  </MyButton>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <MyButton
                    style={{
                      height: "6.8rem",
                      width: "6.8rem",
                      fontSize: "1.3rem",
                      backgroundColor: "#80d8da",
                    }}
                  >
                    Contact
                  </MyButton>
                </Link>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
      <Grid item container xs={11} justifyContent="center" mb={2}>
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
              height: "16.8rem",
              width: "16.8rem",
              borderRadius: "50%",
            }}
          />
        </motion.div>
      </Grid>
    </Grid>
  );
}

export default MobileHome;
