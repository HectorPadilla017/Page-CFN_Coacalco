import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer.jsx";
import NotFound from "../Pages/NotFound";

import Home from "../Pages/Home/Home";
import Activities from "../Pages/Activities/Activities";
import Videos from "../Pages/Videos/Videos";
import Contact from "../Pages/Contact/Contact";

const Routes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Actividades" component={Activities} />
        <Route exact path="/Videos" component={Videos} />
        <Route exact path="/Contacto" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};
export default Routes;
