import React from "react";
import {
  Grid,
  ButtonGroup,
  Button,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import myPhoto from "../assets/Images/myPhoto.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Grid container justifyContent="space-between" spacing={2}>
      <Grid item>
        <Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                fontSize: "2.6rem",
                borderBottom: "0.05em dashed grey",
                borderLeft: "0.05em dashed grey",
              }}
            >
              <Avatar
                alt="Gautam Vaja"
                src={myPhoto}
                sx={{ width: 56, height: 56 }}
              />
              <Typography
                variant="h3"
                color="secondary"
                sx={{ fontWeight: "600" }}
              >
                Gautam Vaja
              </Typography>
            </Button>
          </Link>
          <Typography variant="h5" color="secondary" m={1}>
            Software Devloper
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <ButtonGroup size="large" variant="text" aria-label="text button group">
          <Link to="/resume" style={{ textDecoration: "none" }}>
            <Button>
              <Typography variant="h4" color="secondary" m={1}>
                resume
              </Typography>
            </Button>
          </Link>
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            <Button>
              <Typography variant="h4" color="secondary" m={1}>
                portfolio
              </Typography>
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button>
              <Typography variant="h4" color="secondary" m={1}>
                contact
              </Typography>
            </Button>
          </Link>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
