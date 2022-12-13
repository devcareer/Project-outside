import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Venue from "./pages/Venue";

function App() {
  return (
    <div className="App">
      {/* <h1 className="text-red-500">hello</h1> */}
      <Venue />
    </div>
  );
}

export default App;
