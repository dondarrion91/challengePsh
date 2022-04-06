import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/shared/NavBar";

// Core styles
import "./App.scss";

// Views
import Home from "./views/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
