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
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

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
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClickOpen}
      >
        <MenuIcon />
      </IconButton>
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
              <Button color="secondary" onClick={handleClose}>
                <Typography variant="h4" color="initial">
                  Resume
                </Typography>
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <Button color="secondary" onClick={handleClose}>
                <Typography variant="h4" color="initial">
                  Portfolio
                </Typography>
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button color="secondary" onClick={handleClose}>
                <Typography variant="h4" color="initial">
                  Contact me
                </Typography>
              </Button>
            </Link>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
