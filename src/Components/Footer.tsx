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
      <AppBar position="static" color="primary">
        <Grid
          container
          justifyContent="space-evenly"
          pt={3}
          pb={6}
          sx={{ borderTop: "2px black solid" }}
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
              Email:
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
                    pathname:
                      "https://www.linkedin.com/in/gautam-vaja-b80115209/",
                  }}
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <img
                    alt="LinkedIn"
                    src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/6ea5b4a88f0b4f91945b40499aa0af00.webp"
                    style={{ width: "26px", height: "26px" }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to={{ pathname: "https://twitter.com/gautamvaja7" }}
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <img
                    alt="Twitter"
                    src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp"
                    style={{ width: "26px", height: "26px" }}
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
                    src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                    style={{ width: "26px", height: "26px" }}
                  />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="h4" color="secondary">
            © 2022 By Gautam Vaja
          </Typography>
        </Grid>
      </AppBar>
    </motion.div>
  );
}
