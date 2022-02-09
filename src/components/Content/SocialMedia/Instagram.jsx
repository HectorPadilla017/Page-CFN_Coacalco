import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '3rem',
  },
}));

const Instagram = (props) => {
  const classes = useStyles();

  return (
    <IconButton
      className={props.className}
      href="http://www.instagram.com/cfn_coacalco"
      target="_blank"
      rel="noopener"
    >
      <InstagramIcon className={classes.icon}/>
    </IconButton>
  );
};
export default Instagram;
