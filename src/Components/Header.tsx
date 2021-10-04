import React from "react";
import Navtabs from "./Navtabs";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Header() {
  return (
    <div id="header">
      <Button href="#" id="profile-button">
        Gautam Vaja
      </Button>
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        fullWidth
        size="large"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}
