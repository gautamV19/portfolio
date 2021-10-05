import { Container, Stack } from "@mui/material";
import React from "react";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navtabs from "./Components/Navtabs";
import Profile from "./Pages/Profile";

import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";

function App() {
  return (
    <Stack
      sx={{ backgroundColor: "lightcyan", height: "100vh", width: "100%" }}
      justifyContent="space-between"
    >
      <Header />
      <Home />
      <Footer />
    </Stack>
  );
}

export default App;
/*

<Stack item xs={12} sm={12} md={4} lg={3} style={{backgroundColor:"green"}}> 
        <Profile />
        </Stack>
       <Stack item xs style={{backgroundColor:"red"}}> 
       <Header />
       <Resume />
       <Portfolio />
       <Footer />
        </Stack>

*/
