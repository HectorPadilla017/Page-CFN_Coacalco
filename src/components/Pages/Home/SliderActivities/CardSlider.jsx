import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "332px",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "310px",
    },
  },
  img: {
    height: "300px",
    width: "300px",
    margin: "auto",
    objectFit: "contain",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      height: "280px",
      width: "280px",
    },
  },
  content: {
    height: "150px",
    width: "300px",
    margin: "auto",

    [theme.breakpoints.down("xs")]: {
      width: "280px",
    },
  },
  title: {
    fontSize: "25px",
  },
  body: {
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(2),
    },
  },
  link: {
    fontWeight: "bold",
    color: "rgba(13, 50, 105, 1)",
  },
}));

export default function CardSlider(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.img}
        component="img"
        alt={props.Titulo}
        image={props.Img}
        title={props.Titulo}
      />
      <CardContent className={classes.content}>
        <Typography
          className={`${classes.body} ${classes.title}`}
          gutterBottom
          variant="h6"
          component="h6"
        >
          {props.Titulo}
        </Typography>
        <Typography
          className={classes.body}
          variant="body2"
          align="justify"
          color="textSecondary"
          component="p"
        >
          {props.Descripción}
        </Typography>
        <Link
          className={classes.link}
          href={props.Href}
          underline="none"
          target="_blank"
          rel="noopener"
        >
          {props.Link}
        </Link>
      </CardContent>
    </Card>
  );
}
