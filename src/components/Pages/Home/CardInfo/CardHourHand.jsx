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
          <strong>06:00</strong> Oración de Varones "Rosh" <br />
          <strong>21:00</strong> Oración Sanidades y Milagros
        </Typography>
        <hr />
        <Typography className={classes.title} variant="h6">
          Miércoles
        </Typography>
        <Typography variant="body1">
          <strong>19:00</strong> Reunión General
        </Typography>
        <hr />
        <Typography className={classes.title} variant="h6">
          Jueves
        </Typography>
        <Typography variant="body1">
          <strong>10:00</strong> Reunión de Damas <br />
          <strong>19:00</strong> Reuniones Familiares "Células" (Webex o Zoom)
        </Typography>
        <hr />
        <Typography className={classes.title} variant="h6">
          Viernes
        </Typography>
        <Typography variant="body1">
          <strong>19:00</strong> Oración por los estados de la República (Solo
          presencial) <br />
          <strong>21:00</strong> Niveles de Enseñanza (Webex o Zoom)
        </Typography>
        <hr />
        <Typography className={classes.title} variant="h6">
          Sábado
        </Typography>
        <Typography variant="body1">
          <strong>11:00</strong> Escuela para Padres (Facebook) <br />
          <strong>Reunión de Jóvenes</strong>
          <ul>
            <li>
              <strong>16:00</strong> Generación de Cambio (18-26 años)
            </li>

            <li>
              <strong>16:30</strong> Valientes on the Rock (15-17 años)
            </li>

            <li>
              <strong>18:00</strong> Ágora (27 años en adelante)
            </li>
          </ul>
          <strong>17:00</strong> Mujeres con Propósito <br />
          <strong>19:00</strong> Reunión de Matrimonios (cada 15 días)
        </Typography>
        <hr />
        <Typography className={classes.title} variant="h6">
          Domingo
        </Typography>
        <Typography variant="body1">
          <strong>08:00 - 09:00</strong> Reunión General <br />
          <strong>09:30 - 10:30</strong> Reunión General <br />
          <strong>11:00 - 12:00</strong> Reunión General <br />
          <strong>12:30 - 13:30</strong> Reunión General
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardHourHand;
