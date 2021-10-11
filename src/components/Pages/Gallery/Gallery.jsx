import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import CoverPages from "../../Content/CoverPages/CoverPages";

import foto from "../../../img/Cover1.jpg";

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
}));

const Gallery = () => {
  const classes = useStyles();
  return (
    <Container
      className={classes.root}
      disableGutters
      maxWidth="xl"
    >
      <CoverPages img={foto} title={"Galeria"}/>
      <div className={classes.content}>
        
      </div>
    </Container>
  );
};

export default Gallery;
