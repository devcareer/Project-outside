import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Shows from './pages/Shows';
import Layout from './Layouts/DefaultLayout';
import Venues from './pages/Venues';
import AddShow from './pages/AddShow';
import AddArtist from './pages/AddArtist';
import AddVenue from './pages/AddVenue';
import Artists from './pages/Artists';
import Home from './pages/Home';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/shows" element={<Shows />} />
					<Route path="/venues" element={<Venues />} />
					<Route path="/add-show" element={<AddShow />} />
					<Route path="/add-artist" element={<AddArtist />} />
					<Route path="/add-venue" element={<AddVenue />} />
					<Route path="/artists" element={<Artists />} />
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
