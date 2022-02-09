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
    height: "500px",
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
    paddingLeft: theme.spacing(2),
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
  des: {
    textAlign: "justify",
  },
  title: {
    lineHeight: "1",
  },
  vignettes: {
    fontSize: "1.5em",
    textIndent: "20px",
  },
}));

const TextRight = (props) => {
  const classes = useStyles();
  return (
    // <div className="fade_right">
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
            <Typography className={classes.title} gutterBottom variant="h4">
              {props.Titulo} Ágora - Reunion de Jóvenes Profesionistas
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub1} ¿Por qué Ágora?
            </Typography>
            <Typography className={classes.des} variant="body1">
              {props.Des1} Este nombre fue elegido por el contexto primario de
              la formación del grupo, una reunión de jóvenes profesionistas de
              veintisiete años en adelante, cuyas necesidades distan mucho de
              jóvenes de menor edad o universitarios.
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub2}
            </Typography>
            <Typography className={classes.des} variant="body1">
              {props.Des2} En Ágora buscamos, virtud del trasfondo sociocultural
              de la palabra, ministrar el corazón de nuestros profesionistas y
              adultos jóvenes que vienen de diferentes entornos sociales y
              laborales, de igual manera, poder cubrir áreas espirituales y
              teológicas que afirmen mas su fe en Cristo, de esta manera ellos
              puedan llevar el Evangelio a sus lugares de desarrollo laboral.
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub3} ¿Qué es Ágora?
            </Typography>
            <Typography className={classes.des} variant="body1">
              {props.Des3} La palabra Ágora la encontramos en el libro de los
              Hechos 17, en el original griego koiné, que evoca una reunión con
              un fin. Pablo se encuentra en la Ágora (traducido como Mercado)
              hablando con judíos, filósofos y piadosos hablándoles del
              Evangelio, ese discurso en la Ágora lo llevo hasta areópago a
              predicar del “Dios no conocido” y ahí les fue revelado Cristo.
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub4}
            </Typography>
            <Typography className={classes.des} variant="body1">
              {props.Des4} Entonces la Ágora como medio de divulgación
              multicultural y como un mercado o un sitio de comercio y
              conversaciones interculturales, fue el peldaño para poder predicar
              de el evangelio de Cristo a judíos, paganos y filósofos que se
              presentaban en ese lugar.
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub5}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig1}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig2}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig3}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig4}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig5}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig6}
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub6}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig7}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig8}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig9}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig10}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig11}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig12}
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub7}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig13}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig14}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig15}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig16}
            </Typography>
            <Typography className={classes.vignettes} variant="body1">
              {props.Vig17}
            </Typography>
            <body1>
              <ul>
                <li>Predicar a Cristo</li>
                <li>Capacitar a personas para un Evangelismo efectivo</li>
                <li>
                  Despertar el corazón de la Iglesia para ayudar al prójimo
                </li>
              </ul>
            </body1>
            <Typography variant="body1">{props.Vig18}</Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub8}
            </Typography>
            <Typography className={classes.des} variant="body1">
              {props.Des5}
            </Typography>
            <Typography className={classes.des} variant="body1">
              {props.Des6}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
    // </div>
  );
};
export default TextRight;
