import './App.css';
import { Link , Outlet } from "react-router-dom";
import Header from "./components/Header.jsx"
import Category from "./components/Category.jsx"

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Category/>
    </div>
  );
}

export default App;
