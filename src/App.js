import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Containers/Navbar";
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}
