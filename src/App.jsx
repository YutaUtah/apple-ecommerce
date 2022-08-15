// React
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Component
import "./App.css";
import { Page } from "./pages/Page";
import ContextProvider from "./providers/ContextProvider";


const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Page />
      </Router>
    </ContextProvider>
  );
};

export default App;
