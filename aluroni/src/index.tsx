import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './pages/Menu';
import 'normalize.css';
import Home from 'pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
