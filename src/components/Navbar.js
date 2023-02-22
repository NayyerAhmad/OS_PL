import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

const links = [
  { title: "Home", path: "/" },
  { title: "Programming Languages", path: "/programming_languages" },
  { title: "Operating Systems", path: "/operating_systems" },
  { title: "Compatibility Checker", path: "/compatibility" },
];

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  activeLink: {
    borderBottom: "1px solid white",
  }
}));

function Navbar({ title }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          {title}
        </Typography>
        <div className={classes.navlinks}>
          {links.map((link) => (
            <Link
              to={link.path}
              key={link.path}
              className={`${classes.link} ${
                location.pathname === link.path && classes.activeLink
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;