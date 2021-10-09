import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: "50%",
  height: "7rem",
  width: "7rem",
  backgroundColor: "lightgreen",
  color: "black",
  margin: "1rem",
  border: "2px solid green",
  "&:hover": {
    backgroundColor: "white",
    fontWeight: "500",
  },
}));

export default ColorButton;
