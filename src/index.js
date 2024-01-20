import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Globalstyle from './globalstyles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />,
    <Globalstyle/>
  </>
);
