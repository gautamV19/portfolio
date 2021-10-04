import { Container, Grid } from "@mui/material";
import React from "react";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navtabs from "./Components/Navtabs";
import Profile from "./Pages/Profile";

import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <Container>
      <Grid container>
        <Header />
        {/* <Navtabs /> */}

        <Footer />
      </Grid>
    </Container>
  );
}

export default App;
/*

<Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor:"green"}}> 
        <Profile />
        </Grid>
       <Grid item xs style={{backgroundColor:"red"}}> 
       <Header />
       <Resume />
       <Portfolio />
       <Footer />
        </Grid>

*/
