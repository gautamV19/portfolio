import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <img
          src="https://cdn-icons.flaticon.com/png/512/2976/premium/2976215.png?token=exp=1634043723~hmac=ad15f39b4458725d1c2ad08c4ef7a68a"
          alt="menu"
          style={{ height: "1rem", width: "1rem" }}
        />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}></AppBar>
        <List>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <ListItem button>
            <Link to="/resume" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }} onClick={handleClose}>
                Resume
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }} onClick={handleClose}>
                Projects
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }} onClick={handleClose}>
                Contact Me
              </Button>
            </Link>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
