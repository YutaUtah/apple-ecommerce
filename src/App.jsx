import "./App.css";
import Page from "./pages/Page";
import FavItemProvider from "./providers/FavItemProvider";

import { BrowserRouter as Router } from "react-router-dom";


const App = () => {
  return (
    <FavItemProvider>
      <Router>
        <Page />
      </Router>
    </FavItemProvider>
  );
};

export default App;
