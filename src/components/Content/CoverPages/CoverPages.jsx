import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: "0",
    width: "100%",
    height: "270px",
    [theme.breakpoints.down("lg")]: {
      height: "200px",
    },
    [theme.breakpoints.down("md")]: {
      height: "180px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "140px",
    },
  },
  gradient: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    zIndex: "2",
    background: "rgba(13, 50, 105, 0)",
    background: "linear-gradient(rgba(13, 50, 105, 1), rgba(255, 255, 255, 0))",
    background:
      "-webkit-linear-gradient(135deg, rgba(255, 255, 255, 0) 30%, rgba(25, 101, 214, 0.8) 50%, rgba(13, 50, 105, 0.9) 80%)",
    color: "#fff",
  },
  text: {
    padding: theme.spacing(14, 20, 0),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(10, 20, 0),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(10, 10, 0),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 10, 0),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(6, 0, 0, 0),
      textAlign: "center",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    // height: "400px",
    objectFit: "cover",
    filter: "brightness(85%)",
    // [theme.breakpoints.down("lg")]: {
    //   height: "100%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   height: "200px",
    // },
  },
}));

const CoverPages = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.gradient}>
        <Typography className={classes.text} variant="h1" color="inherit">
          {props.title}
        </Typography>
      </div>
      <img className={classes.img} src={props.img} alt={props.img} />
    </div>
  );
};
export default CoverPages;
