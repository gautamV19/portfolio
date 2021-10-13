import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import MyButton from "./MyButton";

export default function ContactForm() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
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
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <Link to="/">
          <MyButton style={{ backgroundColor: "#eea302" }}>Submit</MyButton>
        </Link>
      </CSSTransition>
    </Box>
  );
}
