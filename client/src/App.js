import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/shared/NavBar";

// Core styles
import "./App.scss";

// Views
import Home from "./views/Home/Home";
import HackatonList from "./views/HackathonList/HackatonList";
import Hackathon from "./views/Hackathon/Hackathon";
import WorldRanking from "./views/WorldRanking/WorldRanking";

function App() {
  return (
    <div className="App dark-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackathon-list" element={<HackatonList />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/world-ranking" element={<WorldRanking />} />
      </Routes>
    </div>
  );
}

export default App;
