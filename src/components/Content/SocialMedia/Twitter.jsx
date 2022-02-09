import React from "react";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '3rem',
  },
}));

const Twitter = (props) => {
  const classes = useStyles();
  return (
    <IconButton
      className={props.className}
      href="http://www.twitter.com/cfnac"
      target="_blank"
      rel="noopener"
    >
      <TwitterIcon className={classes.icon}/>
    </IconButton>
  );
};
export default Twitter;
