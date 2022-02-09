import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer.jsx";
import NotFound from "../Pages/NotFound";

import Home from "../Pages/Home/Home";
// import Activities from "../Pages/Activities/Activities";
import ServiceAreas from "../Pages/ServiceAreas/ServiceAreas";
import Videos from "../Pages/Videos/Videos";
import Contact from "../Pages/Contact/Contact";

const Routes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Equipos" component={ServiceAreas} />
        <Route path="/Videos" component={Videos} />
        <Route path="/Contacto" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};
export default Routes;
