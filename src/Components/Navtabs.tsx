import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function Header() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        variant="fullWidth"
        onChange={handleChange}
        value={value}
        aria-label="Tabs where each tab needs to be selected manually"
        id="nav-tabs"
      >
        <Tab label="Gautam Vaja" />
        <Tab label="Resume" />
        <Tab label="Projects" />
        <Tab label="Contact Me" />
      </Tabs>
    </Box>
  );
}
