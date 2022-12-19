import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shows from './pages/Shows';
import Layout from './Layouts/DefaultLayout';
import Venues from './pages/Venues';
import ListShow from './pages/ListShow';
import ListArtist from './pages/ListArtist';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/shows" element={<Shows />} />
					<Route path="/venues" element={<Venues />} />
					<Route path="/list-show" element={<ListShow />} />
					<Route path="/list-artist" element={<ListArtist />} />
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
