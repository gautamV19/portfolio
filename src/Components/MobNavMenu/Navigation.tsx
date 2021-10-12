import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    <Link to="/resume" style={{ textDecoration: "none" }}>
      <MenuItem i={"Resume"}></MenuItem>
    </Link>
    <Link to="/portfolio" style={{ textDecoration: "none" }}>
      <MenuItem i={"Projects"}></MenuItem>
    </Link>
    <Link to="/contact" style={{ textDecoration: "none" }}>
      <MenuItem i={"Contact Me"}></MenuItem>
    </Link>
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
