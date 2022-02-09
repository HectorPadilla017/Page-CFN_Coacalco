import React, { Suspense } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { lazy } from "@loadable/component";
import pMinDelay from "p-min-delay";

import SocialContact from "./SocialContact";
import CoverPages from "../../Content/CoverPages/CoverPages";
import Loading from "../../Content/SpinnerLoading/Loading"
import foto from "../../../img/Cover3.jpg";

const CardMap = lazy(() =>
  pMinDelay(import("../../Content/Cards/CardMap"), 2000)
);

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    background: theme.palette.background.default,
  },
  content: {
    padding: theme.spacing(10, 16, 20),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(10, 3, 10),
    },
  },
  grid1: {
    padding: theme.spacing(5, 5, 5, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  grid2: {
    padding: theme.spacing(5, 0, 5, 5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  cardMap: {
    opacity: "1 !important",
  },
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} disableGutters maxWidth="xl">
      <CoverPages img={foto} title={"Contacto"} />
      <Suspense fallback={<Loading />}>
        <div className={classes.content}>
          <Grid container>
            <Grid className={classes.grid1} item xs={12} md={4}>
              <SocialContact />
            </Grid>
            <Grid className={classes.grid2} item xs={12} md={8}>
              <CardMap className={classes.cardMap} />
            </Grid>
          </Grid>
        </div>
      </Suspense>
    </Container>
  );
};
export default Contact;
