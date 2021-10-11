import React, { Suspense } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import loadable, { lazy } from "@loadable/component";
import pMinDelay from "p-min-delay";

import Loading from "../../Content/SpinnerLoading/Loading";

const Carousel = lazy(() => pMinDelay(import("./Carousel"), 1000));
const CardSocialLeft = lazy(() =>
  pMinDelay(import("./CardSocialLeft/CardSocialLeft"), 5000)
);
const CardInfo = lazy(() => pMinDelay(import("./CardInfo/CardInfo"), 5000));
const SliderActivities = lazy(() =>
  pMinDelay(import("./SliderActivities/SliderActivities"), 5000)
);
const MessagePas = lazy(() => pMinDelay(import("./MessagePas"), 5000));

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
}));

const Inicio = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} disableGutters maxWidth="xl">
      <Suspense fallback={<Loading />}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <CardSocialLeft />
        <CardInfo />
        <SliderActivities />
        <MessagePas />
      </Suspense>
    </Container>
  );
};

export default Inicio;
