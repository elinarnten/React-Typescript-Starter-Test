import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Dishes from "./components/Dishes";
import { Header } from "./components/layout/header/Header";
import Sports from "./components/Sports";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/sports" component={Sports} />
        <Route path="/dishes" component={Dishes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
