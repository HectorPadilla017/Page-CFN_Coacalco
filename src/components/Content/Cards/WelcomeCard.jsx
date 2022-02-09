import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import foto from "../../../img/Card.jpg";

import "../../Function/FadeScroll";
import "../../styles/fade.css";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      opacity: "1 !important",
    },
    [theme.breakpoints.down("xs")]: {
      opacity: "1 !important",
    },
  },
  girdItem: {
    margin: "auto 0",
  },
  img: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  },
  text: {
    textAlign: "justify",
    [theme.breakpoints.up("xl")]: {
      fontSize: "14px",
    },
  },
  cardContent: {
    padding: theme.spacing(4),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(2, 4, 3),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3),
    },
  },
  cardActions: {
    padding: theme.spacing(3, 1, 1, 0),
  },
}));

const WelcomeCard = () => {
  const classes = useStyles();
  return (
    <Card className={`${classes.card} ${"fade_down"}`}>
        <Grid container>
          <Grid className={classes.girdItem} item md={6}>
            <CardMedia
              className={classes.img}
              component="img"
              alt="Contemplative Reptile"
              image={foto}
              title="Contemplative Reptile"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h4" component="h4">
                ¿Quiénes Somos?
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="subtitle1"
              >
                Iglesia Cristiana
              </Typography>
              <Typography
                className={classes.text}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Somos un grupo de cristianos comprometidos que reconocemos a
                Jesucristo como el Señor y Salvador. Nuestro propósito es dar a
                conocer el mensaje del evangelio, revelado en las Sagradas
                Escrituras que es nuestra norma de fe y conducta.
                <br />
                <br />
                Tenemos como objetivo que toda persona que lo desee, tenga un
                encuentro personal con el Señor Jesús, produciendo así un cambio
                interno que da vida y traerá como consecuencia propósito y
                destino. Trabajamos por la unidad e integración de la familia.
                <br />
                <br />
                Deseamos bendecir nuestra comunidad llevando un mensaje de amor
                y de valores que impacte la vida de los que nos rodean.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
  );
};
export default WelcomeCard;

// <CardActions className={classes.cardActions}>
//     <Button variant="contained" size="large" color="primary">
//         Leer más
//     </Button>
// </CardActions>
