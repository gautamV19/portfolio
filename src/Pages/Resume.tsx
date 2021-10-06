import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import myPhoto from "../assets/Images/myPhoto.png";
import myResume from "../assets/Images/Resume.png";

export default function Resume() {
  return (
    <Grid container alignItems="center" sx={{ backgroundColor: "#FFF9EB" }}>
      <Box sx={{ margin: "auto", border: "2px dashed black" }}>
        <img
          src={myResume}
          alt="resume"
          style={{ height: "180vh", width: "80vw" }}
        />
      </Box>
    </Grid>
  );
}
