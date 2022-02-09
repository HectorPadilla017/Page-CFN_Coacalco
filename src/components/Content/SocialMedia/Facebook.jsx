import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '3rem',
  },
}));

const Facebook = (props) => {
  const classes = useStyles();
  return (
    <IconButton
      className={props.className}
      href="http://www.facebook.com/cfnac"
      target="_blank"
      rel="noopener"
    >
      <FacebookIcon className={classes.icon} />
    </IconButton>
  );
};
export default Facebook;
