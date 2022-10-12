import React from "react";
import Grid from "@mui/material/Grid";
import FlipCard from "./FlipCard";
import { projects } from "../assets/data/projects";
import { motion } from "framer-motion";
import { useMediaQuery, Container } from "@mui/material";

function ProjectGroup() {
  return (
    <Grid container xs={12} justifyContent="center" alignItems="center" p={2}>
      {projects.map((p, i) => (
        <Grid
          item
          container
          justifyContent="center"
          sm={6}
          md={4}
          xs={10}
          lg={4}
          key={i}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <FlipCard
              title={p.title}
              link={p.link}
              img={p.img}
              description={p.description}
            />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectGroup;
