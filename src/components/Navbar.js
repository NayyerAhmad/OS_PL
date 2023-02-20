import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

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

function Navbar() {
  const classes = useStyles();
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Compatibility Checker
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={`${classes.link} ${isActive("/") && classes.activeLink}`}>
              Home
            </Link>
            <Link to="/programming_languages" className={`${classes.link} ${isActive("/programming_languages") && classes.activeLink}`}>
              Programming Languages
            </Link>
            <Link to="/operating_systems" className={`${classes.link} ${isActive("/operating_systems") && classes.activeLink}`}>
              Operating Systems
            </Link>
            <Link to="/compatibility" className={`${classes.link} ${isActive("/compatibility") && classes.activeLink}`}>
              Compatibility Checker
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
