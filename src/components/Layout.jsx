import React, { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from '../modules/SaredLayout/SharedLayout';
import  NotFoundPage  from '../pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('pages/MoviesDetailsPage/MoviesDetailsPage'));
// const Cast = lazy(() => import('../modules/Cast/'));
// const Reviews = lazy(() => import('../modules/Reviews'));

const Layout = () => {
	return (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<HomePage />}></Route>
				<Route path='movies' element={<MoviesPage />}></Route>
				<Route path='movies/:movieId' element={<MoviesDetailsPage />}>
					{/* <Route path='cast' element={<Cast />}></Route>
					<Route path='reviews' element={<Reviews />}></Route> */}
				</Route>
				<Route path='*' element={<NotFoundPage />}></Route>
			</Route>
		</Routes>
	);
};

export default Layout;