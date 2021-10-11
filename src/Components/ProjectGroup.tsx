import React from "react";
import Grid from "@mui/material/Grid";
import FlipCard from "./FlipCard";
import { projects } from "../assets/data/projects";
import { motion } from "framer-motion";

function ProjectGroup() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      wrap="wrap"
      // sx={{ position: "absolute", top: "14vh", left: 0, right: 0 }}
    >
      {projects.map((p) => (
        <motion.div animate={{ scale: 1.1 }} transition={{ duration: 1 }}>
          <FlipCard
            title={p.title}
            link={p.link}
            img={p.img}
            description={p.description}
          />
        </motion.div>
      ))}
    </Grid>
  );
}

export default ProjectGroup;

// .map((p)=> {return(<FlipCard title={p.title}>)})
