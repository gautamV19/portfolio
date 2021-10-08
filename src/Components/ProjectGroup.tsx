import React from "react";
import Grid from "@mui/material/Grid";
import FlipCard from "./FlipCard";
import { projects } from "../assets/data/projects";

function ProjectGroup() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      wrap="wrap"
    >
      {projects.map((p) => (
        <FlipCard
          title={p.title}
          link={p.link}
          img={p.img}
          description={p.description}
        />
      ))}
    </Grid>
  );
}

export default ProjectGroup;

// .map((p)=> {return(<FlipCard title={p.title}>)})
