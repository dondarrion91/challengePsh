import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/shared/NavBar";

// Core styles
import "./App.scss";

// Views
import Home from "./views/Home/Home";
import HackatonList from "./views/HackathonList/HackatonList";

function App() {
  return (
    <div className="App dark-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackathon-list" element={<HackatonList />} />
      </Routes>
    </div>
  );
}

export default App;
