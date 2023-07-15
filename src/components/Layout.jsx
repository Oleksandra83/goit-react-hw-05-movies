import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from '../modules/SaredLayout/SharedLayout';
import  NotFoundPage  from '../pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('../modules/Cast/Cast'));
const Reviews = lazy(() => import('../modules/Reviews/Reviews'));

const Layout = () => {
	return (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<HomePage />} />
				<Route path='movies' element={<MoviesPage />} />
				<Route path='movies/:movieId' element={<MovieDetailsPage />}>
					<Route path='cast' element={<Cast />} />
					<Route path='reviews' element={<Reviews />} />
				</Route>
			<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default Layout;