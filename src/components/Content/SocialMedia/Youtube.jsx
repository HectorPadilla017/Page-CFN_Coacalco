import React from "react";
import IconButton from "@material-ui/core/IconButton";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '3rem',
  },
}));

const Youtube = (props) => {
  const classes = useStyles();
  return (
    <IconButton
      className={props.className}
      href="http://www.youtube.com/user/gkmbio"
      target="_blank"
      rel="noopener"
    >
      <YouTubeIcon className={classes.icon}/>
    </IconButton>
  );
};
export default Youtube;
