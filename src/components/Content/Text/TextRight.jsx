import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import "../../Function/FadeScroll";
import "../../styles/fade.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relativa",
    background: theme.palette.background.default,
  },
  gridImg: {
    height: "500px",
    [theme.breakpoints.down(1700)]: {
      height: "450px",
    },
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "450px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "350px",
    },
    [theme.breakpoints.down(450)]: {
      height: "250px",
    },
  },
  imgCont: {
    display: "flex",
    alignItems: "center",
    // justifyContent: 'flex-end',
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 3, 0),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 2),
    },
  },
  img: {
    width: "100%",
    height: "500px",
    objectFit: "contain",
    [theme.breakpoints.down(1700)]: {
      height: "450px",
    },
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "420px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "350px",
    },
    [theme.breakpoints.down(450)]: {
      height: "250px",
    },
  },
  gridMsg: {
    height: "500px",
    padding: theme.spacing(6, 5, 4),
    [theme.breakpoints.down(1700)]: {
      height: "450px",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 5, 4),
      height: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3, 2, 3),
    },
  },
  text: {
    color: "#000",
    // textAlign: 'justify',
  },
  des: {
    textAlign: "justify",
  },
}));

const TextRight = (props) => {
  const classes = useStyles();
  return (
    <div className="fade_right">
      <Box className={classes.root}>
        <Grid container>
          <Grid className={classes.gridImg} item sm={12} md={6}>
            <Box className={classes.imgCont}>
              <CardMedia
                className={classes.img}
                component="img"
                image={props.Img}
                alt={props.Nombre}
                title={props.Nombre}
              />
            </Box>
          </Grid>
          <Grid className={classes.gridMsg} item sm={12} md={6}>
            <Box className={classes.text}>
              <Typography gutterBottom variant="h3">
                {props.Titulo}
              </Typography>
              <Typography gutterBottom variant="h6">
                {props.Subtitulo}
              </Typography>
              <Typography className={classes.des} variant="body1">
                {props.Descripción}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default TextRight;
