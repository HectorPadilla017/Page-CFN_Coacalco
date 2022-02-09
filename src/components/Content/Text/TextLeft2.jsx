import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// import '../../Function/FadeScroll'
// import '../../styles/fade.css'

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relativa",
    background: "#0d3269",
    background: "-webkit-linear-gradient(to left,  #1965d6, #0d3269)",
    background: "linear-gradient(to left,  #1965d6, #0d3269)",
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
  gridCont: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  imgCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "500px",
    paddingRight: theme.spacing(2),
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
    color: "#fff",
    overflowY: "overlay",
    scrollBehavior: "smooth",
    padding: theme.spacing(6, 5, 6),
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(255,255,255,0.1)",
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(255,255,255,0.4)",
      borderRadius: "5px",
    },
    [theme.breakpoints.down(1700)]: {
      height: "450px",
    },
    [theme.breakpoints.down("md")]: {
      height: "400px",
      padding: theme.spacing(4, 3, 4),
    },
    [theme.breakpoints.down("sm")]: {
      height: "450px",
      "&::-webkit-scrollbar-thumb": {
        background: "rgba(255,255,255,0.4)",
      },
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3, 2, 3),
      height: "350px",
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

const TextLeft2 = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container className={classes.gridCont}>
        <Grid item sm={12} md={6}>
          <Box className={classes.text}>
            <Typography className={classes.title} gutterBottom variant="h4">
              {props.Titulo} Ayuda al Prójimo
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub1} Misión
            </Typography>
            <Typography className={classes.des} variant="body1">
              {props.Des1} Dar a conocer el mensaje del evangelio de Cristo
              revelado en la Biblia, rescatar al perdido, mostrando el amor y
              misericordia de Dios a través de la ayuda social.
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub2} Visión
            </Typography>
            <Typography className={classes.des} variant="body1">
              {props.Des2} Ser el vinculo entre el prójimo y la iglesia, entre
              el necesitado y Cristo. Suplir y apoyar las necesidades de nuestra
              sociedad.
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub3}
            </Typography>
            <Typography className={classes.des} variant="body1">
              {props.Des3}
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub4}
            </Typography>
            <Typography className={classes.des} variant="body1">
              {props.Des4}
            </Typography>
            <Typography gutterBottom variant="h6">
              {props.Sub5} Objetivos
            </Typography>
            <body1>
              <ul>
                <li>{props.Vig1} Predicar a Cristo</li>
                <li>
                  {props.Vig2} Capacitar a personas para un Evangelismo efectivo
                </li>
                <li>
                  {props.Vig3}
                  Despertar el corazón de la Iglesia para ayudar al prójimo
                </li>
                <li>
                  {props.Vig4}
                  Ayudar a suplir necesidades en zonas marginadas y personas de
                  escasos recursos
                </li>
                <li>
                  {props.Vig5}
                  Apoyar instituciones como orfanatos, asilos, centros de
                  rehabilitación que lo requieran.
                </li>
                <li>
                  {props.Vig6}
                  Ser apoyo a las iglesias en actividades evangélicas y
                  capacitación.
                </li>
              </ul>
            </body1>
            <Typography gutterBottom variant="h6">
              {props.Sub6} Metas
            </Typography>
            <body1>
              <ul>
                <li>{props.Vig7} Discipular a los recién convertidos</li>
                <li>{props.Vig8} Llevar despensas / ropa / comida, o alguna forma de
              apoyo a las personas.</li>
              </ul>
            </body1>
            <Typography gutterBottom variant="h6">
              {props.Sub7} Reglas
            </Typography>
            <body1>
              <ul>
                <li>{props.Vig13} Ser Bautizado</li>
                <li>{props.Vig14} Haber servido al menos 6 meses</li>
                <li>{props.Vig15} Haber tomado el curso de “Hermano mayor”</li>
                <li>{props.Vig16} Ser autorizado por el Pastor</li>
              </ul>
            </body1>
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
      </Grid>
    </Box>
  );
};
export default TextLeft2;
