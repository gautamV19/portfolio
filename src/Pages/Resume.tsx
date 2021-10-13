import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import myResume from "../assets/Images/Resume.png";

export default function Resume() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#FFF9EB",
      }}
    >
      <Box sx={{ margin: "auto", width: "100%", border: "2px dashed black" }}>
        <img
          src={myResume}
          alt="resume"
          style={{ height: "180vh", width: "100%" }}
        />
      </Box>
    </Grid>
  );
}
