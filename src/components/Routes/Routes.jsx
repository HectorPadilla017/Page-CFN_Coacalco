import React, { Suspense, lazy } from 'react';
// import { timeout } from 'promise-timeout';
import pMinDelay from 'p-min-delay';
import {
    Switch,
    Route,
} from "react-router-dom";
import Loading from '../Content/SpinnerLoading/Loading'

import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer.jsx';

// Routes Loadable 

const Home = lazy(() => 
    pMinDelay(import('../Pages/Home/Home'), 5000))

const Activities = lazy(() => 
    pMinDelay(import('../Pages/Activities/Activities'), 2000))

const Videos = lazy(() => 
    pMinDelay(import('../Pages/Videos/Videos'), 2000))

const Contact = lazy(() => 
    pMinDelay(import('../Pages/Contact/Contact'), 2000))

const Routes = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <NavBar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/Actividades' exact component={Activities}/>
                <Route path='/Videos' exact component={Videos}/>
                <Route path='/Contacto' exact component={Contact}/>
            </Switch>
            <Footer/>
        </Suspense>
    )
}
export default Routes
