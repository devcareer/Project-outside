import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Shows from './pages/Shows';
import Layout from './Layouts/DefaultLayout';
import Venues from './pages/Venues';
import Artists from './pages/Artists';
import Home from './pages/Home';
import SingleVenue from './pages/SingleVenue';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/shows" element={<Shows />} />
					<Route path="/venues" element={<Venues />} />
					<Route path="/artists" element={<Artists />} />
					<Route path="/Singlevenue" element={<SingleVenue />} />
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
