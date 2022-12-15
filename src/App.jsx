import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import Layout from "./Layouts/DefaultLayout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
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
