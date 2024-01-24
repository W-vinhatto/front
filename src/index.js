import React from 'react';
import ReactDOM from 'react-dom/client';
import Globalstyle from './globalstyles'
import Nav from './routes'


//import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Nav/>
    <Globalstyle />
  </>
);
