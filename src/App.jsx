import './App.css';
import { Link , Outlet } from "react-router-dom";
import Header from "./components/Header.jsx"

const App = () => {
  return (
    <div className="App">
      <Header/>
      
      {/* <Link to="/invoices">Invoices</Link>{ " " }
      <Link to="/expenses">Expenses</Link> */}
    </div>
  );
}

export default App;
