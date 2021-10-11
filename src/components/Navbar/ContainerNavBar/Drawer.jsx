import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import Facebook from "../../Content/SocialMedia/Facebook";
import Twitter from "../../Content/SocialMedia/Twitter";
import Instagram from "../../Content/SocialMedia/Instagram";
import Youtube from "../../Content/SocialMedia/Youtube";

import logo from "../../../img/Logo.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "246px",
    color: "#fff",
  },
  drawerPaper: {
    width: "400px",
    borderRadius: "15px 0 0 15px",
    background: "rgba(13, 50, 105, 0.8)",
    // background: "rgba(0,0,0, 0.6)",
    backdropFilter: "blur(20px)",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },
  toolbar: theme.mixins.toolbar,
  img: {
    display: "block",
    width: "100px",
    margin: "auto",
    marginTop: "5px",
    marginBottom: "5px",
  },
  divider: {
    background: "rgba(255,255,255, 0.2)",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  ico: {
    display: "flex",
    justifyContent: "center",
  },
  color: {
    color: "#fff",
  },
}));

const Cajon = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.drawer}>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="temporary"
        anchor="right"
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
      >
        <div className={classes.root}>
          <div className={classes.toolbar}>
            <img className={classes.img} src={logo} />
          </div>
          <Divider className={classes.divider} />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText>
                <Typography className={classes.text} variant="h6">
                  Inicio
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/Actividades">
              <ListItemText>
                <Typography className={classes.text} variant="h6">
                  Actividades
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/Videos">
              <ListItemText>
                <Typography className={classes.text} variant="h6">
                  Videos
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              component={Button}
              href="https://cfn.org.mx/blog/"
              target="_blank"
              rel="noopener"
            >
              <ListItemText>
                <Typography className={classes.text} variant="h6">
                  Blog
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/Contacto">
              <ListItemText>
                <Typography className={classes.text} variant="h6">
                  Contacto
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.ico}>
              <Facebook className={classes.color} />
              <Twitter className={classes.color} />
              <Instagram className={classes.color} />
              <Youtube className={classes.color} />
            </ListItem>
            <Divider className={classes.divider} />
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Cajon;
