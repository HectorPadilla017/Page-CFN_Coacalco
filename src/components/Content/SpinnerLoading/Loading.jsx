import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    position: "relative",
    background: "#fff",
    zIndex: 20,
  },
  box: {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
  },
  spinner: {
    color: "linear-gradient(to top, #1965d6, #0d3269)",
  },
}));

function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <CircularProgress className={classes.spinner} size={100} />
      </div>
    </div>
  );
}
export default Loading;
