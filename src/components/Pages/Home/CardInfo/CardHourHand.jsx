import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

import "../../../Function/FadeScroll";
import "../../../styles/fade.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  cardCont: {
    padding: theme.spacing(3, 6),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(3, 3),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3, 6),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3, 4),
    },
  },
  title: {
    fontWeight: "500",
  },
}));

const CardHourHand = () => {
  const classes = useStyles();
  return (
    <Card className={`${classes.root} ${"fade_down"}`}>
      <CardContent className={classes.cardCont}>
        <Typography className={classes.title} variant="h6">
          Martes
        </Typography>
        <Typography variant="body1">
          21:00 Oración Sanidades y Milagros
        </Typography>
        <hr />
        <Typography className={classes.title} variant="h6">
          Miércoles
        </Typography>
        <Typography variant="body1">
          19:00 Reunión General (Presencial) <br />
          20:30 Niveles de Enseñanza
        </Typography>
        <hr />
        <Typography className={classes.title} variant="h6">
          Jueves
        </Typography>
        <Typography variant="body1">
          10:00 Reunión de Damas <br />
          19:00 Reuniones Familiares (Células) vía Webex
        </Typography>
        <hr />
        <Typography className={classes.title} variant="h6">
          Viernes
        </Typography>
        <Typography variant="body1">
          19:00 Altares de Adoración
        </Typography>
        <hr />
        <Typography className={classes.title} variant="h6">
          Sábado
        </Typography>
        <Typography variant="body1">
          11:00 Escuela para Padres <br />
          16:00 Adolescentes, Jóvenes, Profesionistas (Reuniones Presenciales y Online) <br />
          19:00 Reunión de Matrimonios (cada 15 días)
        </Typography>
        <hr />
        <Typography className={classes.title} variant="h6">
          Domingo
        </Typography>
        <Typography variant="body1">
          08:00 - 09:00 Reunión General <br />
          09:30 - 10:30 Reunión General <br />
          11:00 - 12:00 Reunión General <br />
          12:30 - 13:30 Reunión General
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardHourHand;
