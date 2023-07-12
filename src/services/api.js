import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
	api_key: `effc343b47c620264dd2241b3bdd904f`,
	include_adult: false,
};

export const getTrendingMovies = async (page = 1, lng) => {
	try {
		const { data } = await axios.get('/trending/all/day', {
			params: {
				page,
			},
		});
		return data;
	} catch (error) {
		throw new Error('Oops, there is no movies');
	}
};

export const getMoviesSearch = async (page = 1, query = '', lng) => {
	try {
		const urlParam = query
			? `/search/movie?page=${page}&query=${query}&language=${lng}`
			: `/movie/upcoming?page=${page}&language=${lng}`;
		const { data } = await axios.get(urlParam);
		return data;
	} catch (error) {
		throw new Error('Oops, there is no movie');
	}
};

export const getMoviesDetails = async (movieId, lng) => {
	try {
		const { data } = await axios.get(`/movie/${movieId}`, {
			params: {
				id: movieId,
				language: lng,
			},
		});
		return data;
	} catch (error) {
		throw new Error('Oops, there is no movie with that name');
	}
};

export const getMoviesCast = async (movieId, lng) => {
	try {
		const { data } = await axios.get(`/movie/${movieId}/credits`, {
			params: {
				id: movieId,
				language: lng,
			},
		});
		return data.cast;
	} catch (error) {
		throw new Error('Oops, there is no cast movie');
	}
};

export const getMoviesReviews = async (movieId, lng) => {
	try {
		const { data } = await axios.get(`/movie/${movieId}/reviews`, {
			params: {
				id: movieId,
				language: lng,
			},
		});
		return data.results;
	} catch (error) {
		throw new Error('Oops, we don`t have any reviews');
	}
};