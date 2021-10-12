import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      animate={{ translateY: [200, 0], opacity: [0.3, 1] }}
      transition={{ duration: 1.5, ease: "linear" }}
    >
      <Grid container p={5} justifyContent="center" sx={{ fontSize: "3rem" }}>
        This is my portfolio website
      </Grid>
    </motion.div>
  );
}
