import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { lazy } from "@loadable/component";
import pMinDelay from "p-min-delay";

import TextLeft2 from "../../Content/Text/TextLeft2";
import CoverPages from "../../Content/CoverPages/CoverPages";
import Loading from "../../Content/SpinnerLoading/Loading"
import foto from "../../../img/Cover1.jpg";

const TextRight = lazy(() => pMinDelay(import("../../Content/Text/TextRight"), 2000));
const TextLeft = lazy(() => pMinDelay(import("../../Content/Text/TextLeft"), 2000));

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    background: theme.palette.background.default,
  },
  content: {
    padding: theme.spacing(10, 16, 20),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(10, 3, 10),
    },
  },
}));
const Activities = () => {
  const [act, setAct] = useState([]);

  useEffect(() => {
    ActivitiesApi();
  }, []);

  async function ActivitiesApi() {
    const res = await axios
      .get("/Info.json", { withCredentials: true })
      .then((res) => {
        setAct(res.data.Actividades2);
      });
  }
  const classes = useStyles();
  return (
    <Container className={classes.root} disableGutters maxWidth="xl">
      <CoverPages img={foto} title={"Actividades"} />
      <Suspense fallback={<Loading />}>
        <div className={classes.content}>
          {act.map((item) => {
            if (item.id == 1) {
              return (
                <TextLeft2
                  key={item.id}
                  Img={item.Img}
                  Nombre={item.Nombre}
                  Titulo={item.Titulo}
                  Subtitulo={item.Subtitulo}
                  Descripción={item.Descripción}
                />
              );
            } else if (item.id % 2 == 0) {
              return (
                <TextRight
                  key={item.id}
                  Img={item.Img}
                  Nombre={item.Nombre}
                  Titulo={item.Titulo}
                  Subtitulo={item.Subtitulo}
                  Descripción={item.Descripción}
                />
              );
            } else {
              return (
                <TextLeft
                  key={item.id}
                  Img={item.Img}
                  Nombre={item.Nombre}
                  Titulo={item.Titulo}
                  Subtitulo={item.Subtitulo}
                  Descripción={item.Descripción}
                />
              );
            }
          })}
        </div>
      </Suspense>
    </Container>
  );
};
export default Activities;
