import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { lazy } from "@loadable/component";
import pMinDelay from "p-min-delay";

// import TextLeft2 from "../../Content/Text/TextLeft2";
// import ServiceB from "./ServiceB";
import AP from "./Equipment/AP";
import CoverPages from "../../Content/CoverPages/CoverPages";
import Loading from "../../Content/SpinnerLoading/Loading";
import foto from "../../../img/Cover1.jpg";

const Agora = lazy(() => pMinDelay(import("./Equipment/Agora"), 2000));
const ReThink = lazy(() => pMinDelay(import("./Equipment/ReThink"), 2000));

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
const ServiceAreas = () => {
  const [act, setAct] = useState([]);

  useEffect(() => {
    EquipmentApi();
  }, []);

  async function EquipmentApi() {
    const res = await axios
      .get("/Info.json", { withCredentials: true })
      .then((res) => {
        setAct(res.data.Equipos);
      });
  }
  console.log(act[0]);
  const classes = useStyles();
  return (
    <Container className={classes.root} disableGutters maxWidth="xl">
      <CoverPages img={foto} title={"Equipos"} />
      <Suspense fallback={<Loading />}>
        <div className={classes.content}>
          {act[0] && act[1] && act[2] ? (
                <>
                  <AP
                    key={act[0].id}
                    Img={act[0].Img}
                    Nombre={act[0].Nombre}
                  />
                  <Agora
                    key={act[1].id}
                    Img={act[1].Img}
                    Nombre={act[1].Nombre}
                  />
                  <ReThink
                    key={act[2].id}
                    Img={act[2].Img}
                    Nombre={act[2].Nombre}
                  />
                </>
                ) : null}
        </div>
      </Suspense>
    </Container>
  );
};
export default ServiceAreas;
