import React from "react";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";

import foto from "../../img/Logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  list: {
    width: "310px",
    margin: "auto",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "270px",
    },
  },
  contact: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.spacing(2),
  },
  img: {
    width: "250px",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "220px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "200px",
    },
  },
  icon: {
    fontSize: "4rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "3em",
    },
  },
  iconSocial: {
    margin: theme.spacing(0, 1),
  },
  social: {
    paddingTop: theme.spacing(1),
  },
}));

const SocialMedia = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CardMedia component="img" className={classes.img} src={foto} />
      <List className={classes.list}>
        <div className={classes.contact}>
          <CallIcon className={classes.icon}/>
          <Typography variant="h5">(55) 4948-9384</Typography>
        </div>
        <div className={classes.social}>
          <Link
            href="http://www.facebook.com/cfnac"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <FacebookIcon className={`${classes.icon} ${classes.iconSocial}`}/>
          </Link>
          <Link
            href="http://www.twitter.com/cfnac"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <TwitterIcon className={`${classes.icon} ${classes.iconSocial}`}/>
          </Link>
          <Link
            href="http://www.instagram.com/cfn_coacalco"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon className={`${classes.icon} ${classes.iconSocial}`}/>
          </Link>
          <Link
            href="http://www.youtube.com/user/gkmbio"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <YouTubeIcon className={`${classes.icon} ${classes.iconSocial}`}/>
          </Link>
          <Link
            href="mailto:cfn@cfn.org.mx"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <EmailIcon className={`${classes.icon} ${classes.iconSocial}`}/>
          </Link>
        </div>
      </List>
    </div>
  );
};

export default SocialMedia;
