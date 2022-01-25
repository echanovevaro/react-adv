import { BrowserRouter, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';
// import {
// 	LazyPage1,
// 	LazyPage2,
// 	LazyPage3,
// } from '../01-lazyLoad/pages/index';

export const Navigation = () => {
	return (
		<Suspense fallback={<h1>Loading profile...</h1>}>
			<BrowserRouter>
				<div className='main-layout'>
					<nav>
						<img src={logo} alt='React Logo' />
						<ul>
							{routes.map(({ path, to, name }) => (
								<li key={path}>
									<NavLink
										to={to}
										className={({ isActive }) =>
											isActive ? 'nav-active' : ''
										}>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
					<Routes>
						{routes.map(({ to, path, Component }) => (
							<Route
								key={to}
								path={path}
								element={<Component />}
							/>
						))}

						<Route
							path='/*'
							element={<Navigate to={routes[0].to} replace />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};
