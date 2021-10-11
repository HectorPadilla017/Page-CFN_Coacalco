import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/core/styles";

import CardHourHand from "./CardHourHand";
import CardMap from "../../../Content/Cards/CardMap";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    background: "#0d3269",
    background: "-webkit-linear-gradient(to top, #1965d6, #0d3269)",
    background: "linear-gradient(to top, #1965d6, #0d3269)",
    padding: theme.spacing(5, 20),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 3, 6),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 3, 6),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 2, 6),
    },
  },
  grid1: {
    padding: theme.spacing(0, 5, 5, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  grid2: {
    padding: theme.spacing(0, 0, 5, 5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  title: {
    display: "flex",
    color: "#fff",
    alignItems: "center",
    padding: theme.spacing(2),
    height: "148px",
  },
  icon: {
    fontSize: "45px",
    marginRight: theme.spacing(1),
  },
}));

const CardInfo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item className={classes.grid1} xs={12} sm={12} md={6} lg={4}>
          <Box className={classes.title}>
            <AccessTimeIcon className={classes.icon} />
            <Typography variant="h3" color="inherit">
              Nuestros Horarios
            </Typography>
          </Box>
          <CardHourHand />
        </Grid>
        <Grid item className={classes.grid2} xs={12} sm={12} md={6} lg={8}>
          <Box className={classes.title}>
            <LocationOnIcon className={classes.icon} />
            <Typography variant="h3" color="inherit">
              Dirección
            </Typography>
          </Box>
          <CardMap />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardInfo;
