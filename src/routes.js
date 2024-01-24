import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import Users from "./pages/users"


function Nav() {
    // extema atenção usa corretor do vs code - erro facil
    return (
        <Router>

                <Route path='/' Component={Home} />

                <Route path='/usuarios' Component={Users} />
            
        </Router>
    )
}


export default Nav;


