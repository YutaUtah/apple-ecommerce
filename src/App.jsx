import './App.css';
import { Link , Outlet } from "react-router-dom";
import Header from "./components/Header.jsx"
import DefaultProductPage from "./pages/DefaulProductPage"

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <DefaultProductPage/>
    </div>
  );
}

export default App;
