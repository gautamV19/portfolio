import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: "50%",
  height: "10rem",
  width: "10rem",
  color: "black",
  margin: "0.3rem",
  fontSize: "1.3em",
  border: "2px solid black",
  "&:hover": {
    fontWeight: "900",
  },
}));

export default ColorButton;
