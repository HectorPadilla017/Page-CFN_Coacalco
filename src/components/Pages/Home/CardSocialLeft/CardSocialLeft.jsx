import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import WelcomeCard from "../../../Content/Cards/WelcomeCard";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "realtive",
    background: theme.palette.background.default,
    padding: theme.spacing(10, 20),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6, 3),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(6, 3),
    },
  },
}));

export default function CardSocialLeft() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <WelcomeCard />
    </Box>
  );
}
