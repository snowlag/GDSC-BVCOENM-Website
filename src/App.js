import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Containers/Navbar";
import Body from "./Routes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </BrowserRouter>
  );
}
