import React from "react";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import Link1 from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 2, 2, 2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(8, 0, 0, 0),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    paddingBottom: theme.spacing(4),
    textAlign: "center",
  },
  list: {
    width: "200px",
    margin: "auto",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Map = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">
        Mapa del Sitio
      </Typography>
      <List className={classes.list}>
        <Typography
          className={classes.link}
          component={Link}
          to="/"
          variant="h6"
        >
          Inicio
        </Typography>
        <br />
        <Typography
          className={classes.link}
          component={Link}
          to="/Actividades"
          variant="h6"
        >
          Actividades
        </Typography>
        <br />
        <Typography
          className={classes.link}
          component={Link}
          to="/Videos"
          variant="h6"
        >
          Videos
        </Typography>
        <br />
        <Typography
          className={classes.link}
          component={Link1}
          href="https://cfn.org.mx/blog/"
          target="_blank"
          rel="noopener"
          variant="h6"
        >
          Blog
        </Typography>
        <br />
        {/* <Typography variant="h6">
          <Link
            className={classes.link}
            // component={Button}
            href="https://cfn.org.mx/blog/"
            target="_blank"
            rel="noopener"
          >
            Blog
          </Link>
        </Typography> */}
        <Typography
          className={classes.link}
          component={Link}
          to="/Contacto"
          variant="h6"
        >
          Contacto
        </Typography>
      </List>
    </div>
  );
};

export default Map;
