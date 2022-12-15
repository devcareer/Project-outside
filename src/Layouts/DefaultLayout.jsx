import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div>
			{/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="/shows">Shows</Link>
					</li>
				</ul>
			</nav>

			<hr />

			{/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
			<div className="max-w-screen-xl mx-5 sm:mx-auto">
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
