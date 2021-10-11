import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    top: "0",
    width: "100%",
    height: "800px",
    zIndex: "2",
    background: "rgba(13, 50, 105, 0)",
    background:
      "linear-gradient(rgba(13, 50, 105, 0.8), rgba(255, 255, 255, 0) 12%)",
    background:
      "-webkit-linear-gradient(rgba(13, 50, 105, 0.8), rgba(255, 255, 255, 0) 12%)",
    [theme.breakpoints.down("sm")]: {
      background:
        "linear-gradient(rgba(13, 50, 105, 0.8), rgba(255, 255, 255, 0) 10%)",
      background:
        "-webkit-linear-gradient(rgba(13, 50, 105, 0.8), rgba(255, 255, 255, 0) 10%)",
    },
  },
  title: {
    whiteSpace: "pre-wrap",
    whiteSpace: "-moz-pre-wrap",
    whiteSpace: "-o-pre-wrap",
    textAlign: "center",
    paddingTop: "300px",
    paddingRight: "15%",
    paddingLeft: "15%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "280px",
      paddingRight: "10%",
      paddingLeft: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "280px",
      paddingRight: "8%",
      paddingLeft: "8%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "230px",
      paddingRight: "6%",
      paddingLeft: "6%",
    },
  },
  ico: {
    height: "200px",
    color: "black",
    size: "200px",
  },
  text1: {
    fontWeight: "900",
  },
  text2: {
    color: "rgba(13, 50, 105, 1)",
  },
  text3: {
    color: "rgba(84, 84, 84,, 1)",
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.title}`}>
      <Typography className={classes.text1} variant="h1" color="inherit">
        Ooops...
      </Typography>
      <Typography className={classes.text2} variant="h4" color="inherit">
        Esta pagina no esta disponible
      </Typography>
      <Typography className={classes.text3} variant="h6" color="inherit">
        Regresa a la página principal o vuelve a acceder desde el menú.
      </Typography>
    </div>
  );
};
export default NotFound;
