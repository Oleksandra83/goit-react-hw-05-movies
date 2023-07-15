import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
	api_key: `effc343b47c620264dd2241b3bdd904f`,
	language: 'en-US',
	include_adult: false,
};

export const getTrendingMovies = async (page = 1) => {
	try {
		const { data } = await axios.get('/trending/movie/day', {
			params: {
				page,
			},
		});
		return data;
	} catch (error) {
		throw new Error('Oops, there is no movies');
	}
};

export const getMoviesSearch = async (page = 1, query = '', language) => {
	try {
		const urlParam = query
			? `/search/movie?page=${page}&query=${query}&language=${language}`
			: `/movie/upcoming?page=${page}&language=${language}`;
		const { data } = await axios.get(urlParam);
		return data;
	} catch (error) {
		throw new Error('Oops, there is no movie');
	}
};

export const getMovieDetails = async (movieId) => {
	try {
		const { data } = await axios.get(`/movie/${movieId}`, {
			params: {
				id: movieId,
			},
		});
		return data;
	} catch (error) {
		throw new Error('Oops, there is no movie with that name');
	}
};

export const getMoviesCast = async (movieId) => {
	try {
		const { data } = await axios.get(`/movie/${movieId}/credits`, {
			params: {
				id: movieId,
			},
		});
		return data.cast;
	} catch (error) {
		throw new Error('Oops, there is no cast movie');
	}
};

export const getMoviesReviews = async (movieId) => {
	try {
		const { data } = await axios.get(`/movie/${movieId}/reviews`, {
			params: {
				id: movieId,
			},
		});
		return data.results;
	} catch (error) {
		throw new Error('Oops, we don`t have any reviews');
	}
};