import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MyButton from "./MyButton";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        width: "40%",
        display: "inline",
        backgroundColor: "grey",
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
      <Link to="/">
        <MyButton>Submit</MyButton>
      </Link>
    </Box>
  );
}
