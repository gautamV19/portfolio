import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { CSSTransition } from "react-transition-group";

import MyButton from "../Components/MyButton";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Grid
      container
      direction="row"
      p={2.6}
      sx={{
        backgroundColor: "grey",
      }}
      spacing={5}
    >
      <Grid
        container
        item
        lg={6}
        xs={10}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="wrap"
        sx={{ backgroundColor: "grey", width: "40vw" }}
      >
        <motion.span
          animate={{ translateX: [-150, -50, -25, 0], opacity: [0, 0.5, 1] }}
          transition={{ duration: 2, ease: "linear" }}
        >
          <Typography variant="h2" color="black">
            Contact
          </Typography>
          <Typography
            variant="subtitle1"
            color="black"
            sx={{ marginBottom: "3rem" }}
          >
            Looking forward to hearing from you
          </Typography>
          <Typography variant="h4" color="initial">
            Phone
          </Typography>
          <Typography variant="subtitle1" color="inherit">
            8779536074
          </Typography>
          <Typography variant="h4" color="initial">
            Email:
          </Typography>
          <Typography variant="subtitle1" color="inherit">
            gautamiitmee@gmail.com
          </Typography>
        </motion.span>
      </Grid>

      <Grid
        container
        item
        lg={4}
        md={5}
        sm={10}
        xs={11}
        justifyContent="center"
        alignItems="center"
      >
        <motion.span
          animate={{ translateX: [-150, -50, -25, 0], opacity: [0, 0.5, 1] }}
          transition={{ duration: 2, ease: "linear" }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
              display: "inline",
              width: "100%",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-textarea" label="First Name" multiline />
            <TextField id="outlined-textarea" label="Last Name" multiline />
            <TextField id="outlined-textarea" label="Email" multiline />
            <TextField id="outlined-textarea" label="Subject" multiline />
            <TextField
              id="outlined-multiline-static"
              label="Your message"
              multiline
              rows={4}
            />
            <CSSTransition
              in={true}
              appear={true}
              timeout={1000}
              classNames="fade"
            >
              <Link to="/">
                <MyButton
                  style={{
                    backgroundColor: "#eea302",
                    height: "130px",
                    width: "130px",
                  }}
                >
                  Submit
                </MyButton>
              </Link>
            </CSSTransition>
          </Box>
        </motion.span>
      </Grid>
    </Grid>
  );
}
