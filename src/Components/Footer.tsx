import React from "react";
import { AppBar, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.div
      animate={{ translateY: [200, 0], opacity: [0.3, 1] }}
      transition={{ duration: 1.5, ease: "linear" }}
    >
      <AppBar position="static" color="primary" sx={{ marginTop: "13px" }}>
        <Grid
          container
          justifyContent="space-evenly"
          pt={3}
          pb={6}
          flexWrap="wrap"
        >
          <Grid item>
            <Typography variant="h5" color="secondary">
              Phone
            </Typography>
            <Link
              to={{
                pathname: `https://api.whatsapp.com/send/?phone=8779536074&text=I%20got%20contact%20from%20your%20website.`,
              }}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="h6" color="secondary" fontWeight="600">
                8779536074
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="initial">
              Email
            </Typography>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:thegautam.vaja@gmail.com";
                e.preventDefault();
              }}
              style={{ textDecoration: "none" }}
            >
              <Typography variant="h6" color="secondary">
                thegautam.vaja@gmail.com
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="secondary">
              Follow me
            </Typography>

            <Grid item container spacing={1}>
              <Grid item>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/in/gautamvaja13/",
                  }}
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <img
                    alt="LinkedIn"
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3258446/linkedin-icon-original.svg"
                    style={{ width: "25px", height: "25px" }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to={{ pathname: "https://github.com/gautamV19" }}
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <img
                    alt="Github"
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3195425/github-icon-original.svg"
                    style={{ width: "26px", height: "26px" }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to={{ pathname: "https://medium.com/@thegautam.vaja" }}
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <img
                    alt="Medium"
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913085/medium-icon-original.svg"
                    style={{ width: "26px", height: "26px" }}
                  />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4" color="secondary">
              © 2024 By Gautam Vaja
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </motion.div>
  );
}
