import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import "../../../Function/FadeScroll";
import "../../../styles/fade.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relativa",
    background: theme.palette.background.default,
    height: "500px",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down(1700)]: {
      height: "450px",
    },
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "900px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "700px",
    },
    [theme.breakpoints.down(450)]: {
      height: "500px",
    },
  },
  imgCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "500px",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down(1700)]: {
      height: "450px",
    },
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "450px",
      padding: theme.spacing(2, 3, 0),
    },
    [theme.breakpoints.down("xs")]: {
      height: "350px",
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.down(450)]: {
      height: "250px",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  text: {
    color: "#000",
    height: "500px",
    overflowY: "overlay",
    scrollBehavior: "smooth",
    padding: theme.spacing(6, 5, 6),
    [theme.breakpoints.down(1700)]: {
      height: "450px",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 3, 4),
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "450px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "350px",
      padding: theme.spacing(3, 2, 3),
    },
    [theme.breakpoints.down(450)]: {
      height: "250px",
    },
  },
  // des: {
  //   textAlign: "justify",
  // },
  // title: {
  //   lineHeight: "1",
  // },
  // vignettes: {
  //   fontSize: "1.5em",
  //   textIndent: "20px",
  // },
}));

const Agora = (props) => {
  const classes = useStyles();
  return (
    <Box className={`${classes.root} ${"fade_right"}`}>
      <Grid container>
        <Grid item sm={12} md={6}>
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
        <Grid item sm={12} md={6}>
          <Box className={classes.text}>
            <h4 className="title">??gora - Reunion de J??venes Profesionistas</h4>
            <div className="divText">
              <h6 className="subtitle">??Por qu?? ??gora?</h6>
              <p className="body1">
                Este nombre fue elegido por el contexto primario de la formaci??n
                del grupo, una reuni??n de j??venes profesionistas de veintisiete
                a??os en adelante, cuyas necesidades distan mucho de j??venes de
                menor edad o universitarios.
              </p>
              <p className="body1">
                En ??gora buscamos, virtud del trasfondo sociocultural de la
                palabra, ministrar el coraz??n de nuestros profesionistas y
                adultos j??venes que vienen de diferentes entornos sociales y
                laborales, de igual manera, poder cubrir ??reas espirituales y
                teol??gicas que <strong>afirmen mas su fe en Cristo</strong>, de esta manera ellos
                puedan llevar el Evangelio a sus lugares de desarrollo laboral.
              </p>
            </div>
            <div className="divText">
              <h6 className="subtitle">??Qu?? es ??gora?</h6>
              <p className="body1">
                La palabra ??gora la encontramos en el libro de los Hechos 17, en
                el original griego <strong className="cursive">koin??</strong>, que evoca una reuni??n con un fin.
                Pablo se encuentra en la ??gora (traducido como Mercado) hablando
                con jud??os, fil??sofos y piadosos habl??ndoles del Evangelio, ese
                discurso en la ??gora lo llevo hasta are??pago a predicar del
                <strong> ???Dios no conocido???</strong> y ah?? les fue revelado Cristo.
              </p>
              <p className="body1">
                Entonces la ??gora como medio de divulgaci??n multicultural y como
                un mercado o un sitio de comercio y conversaciones
                interculturales, fue el pelda??o para poder predicar de el
                evangelio de Cristo a jud??os, paganos y fil??sofos que se
                presentaban en ese lugar.
              </p>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Agora;
