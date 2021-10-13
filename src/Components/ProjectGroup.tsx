import React from "react";
import Grid from "@mui/material/Grid";
import FlipCard from "./FlipCard";
import { projects } from "../assets/data/projects";
import { motion } from "framer-motion";
import { useMediaQuery, Container } from "@mui/material";

function ProjectGroup() {
  const dir = useMediaQuery("(min-width:450px)") ? "row" : "column";
  return (
    <Grid
      container
      xs={12}
      justifyContent="center"
      alignItems="center"
      // spacing={{ xs: 3, md: 3 }}
      // columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      p={2}
    >
      {projects.map((p) => (
        <Grid
          item
          container
          justifyContent="center"
          sm={6}
          md={4}
          xs={10}
          lg={4}
        >
          <motion.div
            animate={{ scale: [1.1, 1.2, 1] }}
            transition={{ duration: 1, ease: "linear" }}
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

// .map((p)=> {return(<FlipCard title={p.title}>)})
/*
<Grid
      container
      direction={dir}
      justifyContent="space-evenly"
      alignItems="center"
      wrap="wrap"
      // sx={{ position: "absolute", top: "14vh", left: 0, right: 0 }}
    >
</Grid>
*/
