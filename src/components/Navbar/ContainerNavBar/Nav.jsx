import React from "react";
import { Link } from "react-router-dom";
import Link1 from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

import Facebook from "../../Content/SocialMedia/Facebook";
import Twitter from "../../Content/SocialMedia/Twitter";
import Instagram from "../../Content/SocialMedia/Instagram";
import Youtube from "../../Content/SocialMedia/Youtube";

import logo from "../../../img/Logo1.png";

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const useStyles = makeStyles((theme) => ({
  navBar: {
    position: "fixed",
    flexGrow: 1,
    top: 0,
    right: 0,
    left: 0,
    width: "100%",
    transition: "0.6s",
    padding: "30px 0px",
    zIndex: 100,
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px 0px",
    },
    "&.sticky": {
      padding: "0px 0px",
      backgroundColor: "#fff",
      boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.25)",
    },
    "&.sticky $iconButton": {
      color: "#000",
    },
    "&.sticky $logo": {
      color: "#000",
    },
    "&.sticky $imgLogo": {
      color: "#000",
      filter: "invert(1) sepia(1)",
    },
    "&.sticky $linkText": {
      color: "#000",
      "&:hover": {
        color: "rgba(25, 101, 214, 1)",
      },
    },
  },
  grid: {
    justifyContent: "space-between",
  },
  grid1: {
    display: "flex",
    justifyContent: "flex-start",
    width: "200px",
  },
  grid2: {
    display: "flex",
    justifyContent: "flex-end",
    width: "200px",
  },
  gridContainer: {
    justifyContent: "center",
    display: "flex",
  },
  logo: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  imgLogo: {
    height: "30px",
  },
  linkText: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "400",
    textDecoration: "none",
    padding: theme.spacing(1),
    marginInline: theme.spacing(2),
    transition: "all .2s ease-out",
    [theme.breakpoints.down("md")]: {
      marginInline: theme.spacing(1),
    },
    "&:hover": {
      color: "rgba(25, 101, 214, 1)",
      textDecoration: "none",
    },
  },
  iconButton: {
    color: "white",
  },
}));

export default function Nav(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.navBar}>
        <Toolbar className={classes.grid} variant="dense">
          <div className={classes.grid1}>
            <IconButton
              edge="start"
              className={classes.logo}
              color="inherit"
              aria-label="menu"
              component={Link}
              to="/"
            >
              <img className={classes.imgLogo} src={logo} />
            </IconButton>
          </div>
          <Hidden smDown>
            <div className={classes.gridContainer}>
              <Typography className={classes.linkText} component={Link} to="/">
                Inicio
              </Typography>
              <Typography
                className={classes.linkText}
                component={Link}
                to="/Actividades"
              >
                Actividades
              </Typography>
              <Typography
                className={classes.linkText}
                component={Link}
                to="/Videos"
              >
                Videos
              </Typography>
              <Typography
                className={classes.linkText}
                component={Link1}
                href="https://cfn.org.mx/blog/"
                target="_blank"
                rel="noopener"
              >
                Blog
              </Typography>
              <Typography
                className={classes.linkText}
                component={Link}
                to="/Contacto"
              >
                Contacto
              </Typography>
            </div>
          </Hidden>
          <div className={classes.grid2}>
            <Hidden mdUp>
              <IconButton
                edge="end"
                className={classes.iconButton}
                color="inherit"
                aria-label="menu"
                onClick={() => props.actionOpen()}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <div>
                <Facebook className={classes.iconButton} />
                <Twitter className={classes.iconButton} />
                <Instagram className={classes.iconButton} />
                <Youtube className={classes.iconButton} />
              </div>
            </Hidden>
          </div>
        </Toolbar>
      </header>
    </div>
  );
}
