import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
// import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relativa",
    background: "#0d3269",
    background: "-webkit-linear-gradient(to left,  #1965d6, #0d3269)",
    background: "linear-gradient(to left,  #1965d6, #0d3269)",
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
  // divText: {
  //   marginBottom: "16px",
  // },
}));

const AP = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container className={classes.gridCont}>
        <Grid item sm={12} md={6}>
          <Box className={classes.text}>
            <h4 className="title">Ayuda al Prójimo</h4>
            <div className="divText">
              <h6 className="subtitle">Misión</h6>
              <p className="body1">
                Dar a conocer el mensaje del evangelio de Cristo revelado en la
                Biblia, rescatar al perdido, mostrando el amor y misericordia de
                Dios a través de la ayuda social.
              </p>
            </div>
            <div className="divText">
              <h6 className="subtitle">Visión</h6>
              <p className="body1">
                Ser el vinculo entre el prójimo y la iglesia, entre el
                necesitado y Cristo. Suplir y apoyar las necesidades de nuestra
                sociedad.
              </p>
            </div>
            <div className="divText">
              <h6 className="subtitle">Objetivos</h6>
              <ul className="body1">
                <li>Predicar a Cristo.</li>
                <li>Capacitar a personas para un Evangelismo efectivo.</li>
                <li>
                  Despertar el corazón de la Iglesia para ayudar al prójimo.
                </li>
                <li>
                  Ayudar a suplir necesidades en zonas marginadas y personas de
                  escasos recursos.
                </li>
                <li>
                  Apoyar instituciones como orfanatos, asilos, centros de
                  rehabilitación que lo requieran.
                </li>
                <li>
                  Ser apoyo a las iglesias en actividades evangélicas y
                  capacitación.
                </li>
              </ul>
            </div>
            <div className="divText">
              <h6 className="subtitle">Metas</h6>
              <ul className="body1">
                <li>Discipular a los recién convertidos.</li>
                <li>
                  Llevar despensas / ropa / comida, o alguna forma de apoyo a
                  las personas.
                </li>
              </ul>
            </div>
            <div className="divText">
            <h6 className="subtitle">
              Reglas
            </h6>
              <ul className="body1">
                <li>Ser Bautizado.</li>
                <li>Haber servido al menos 6 meses.</li>
                <li>Haber tomado el curso de “Hermano mayor”.</li>
                <li>Ser autorizado por el Pastor.</li>
              </ul>
            </div>
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
export default AP;
