import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import router
import { BrowserRouter as Router } from "react-router-dom";

// wrap our application inside of router to enable using router
ReactDOM.render(

      <React.StrictMode>
      <Router>
      <App />
      </Router>,
      </React.StrictMode>,
  
  document.getElementById("root")
  );

