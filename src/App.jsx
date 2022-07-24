import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Page from "./pages/Page";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Page />
      </Router>
    </div>
  );
};

export default App;
