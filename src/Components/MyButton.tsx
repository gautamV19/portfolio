import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: "50%",
  height: "7rem",
  width: "7rem",
  backgroundColor: "lightgreen",
  color: "black",
  "&:hover": {
    backgroundColor: "white",
  },
}));

export default ColorButton;
