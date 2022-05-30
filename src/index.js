import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import TodoContainer from "./functionBased/components/TodoContainer";
import "./functionBased/App.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>
);
