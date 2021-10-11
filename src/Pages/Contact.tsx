import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ContactForm from "../Components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      wrap="wrap"
      sx={{
        backgroundColor: "grey",
        // position: "absolute",
        // top: "14vh",
        // left: 0,
        // right: 0,
      }}
    >
      <motion.div
        animate={{ translateX: [-150, -50, -25, 0], opacity: [0, 0.5, 1] }}
        transition={{ duration: 2, ease: "linear" }}
      >
        <Grid
          container
          item
          spacing={3}
          direction="column"
          wrap="wrap"
          sx={{ backgroundColor: "grey", width: "40vw" }}
        >
          <Typography variant="h2" color="black">
            Contact
          </Typography>
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{ marginBottom: "3rem" }}
          >
            Looking forward to hearing from you
          </Typography>
          <Typography variant="h4" color="initial">
            Phone
          </Typography>
          <Typography variant="subtitle1" color="primary">
            8779536074
          </Typography>
          <Typography variant="h4" color="initial">
            Email:
          </Typography>
          <Typography variant="subtitle1" color="primary">
            gautamiitmee@gmail.com
          </Typography>
        </Grid>
      </motion.div>

      <motion.div
        animate={{ translateX: [-150, -50, -25, 0], opacity: [0, 0.5, 1] }}
        transition={{ duration: 2, ease: "linear" }}
      >
        <Grid item sx={{ backgroundColor: "grey", width: "40vw" }}>
          <ContactForm />
        </Grid>
      </motion.div>
    </Grid>
  );
}
