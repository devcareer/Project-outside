import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Venue from "./pages/Venue";
import { Routes, Route } from "react-router-dom";
import Shows from "./pages/Shows";
import Layout from "./Layouts/DefaultLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/shows" element={<Shows />} />
          <Route path="/venue" element={<Venue />} />
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
