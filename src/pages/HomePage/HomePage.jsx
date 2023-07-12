import { useState, useEffect } from "react";

import { Title } from "components/Title/Title";
import { MovieGallery } from "modules/MovieGallery/MovieGallery";
import { Loader } from "components/Loader/Loader";
import { getTrendingMovies } from "services/api";
import ErrorView from "components/ErrorView/ErrorView";
import {HomeContainer} from "./HomePage.styled"

const HomePage = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);



	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				setError(false);

				const data = await getTrendingMovies();
				setTrendingMovies(data.results);
			} catch (error) {
				console.log(error.message);
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	if (!trendingMovies) {
		return <Loader />;
	}

	return (
		<HomeContainer>
			{isLoading && <Loader />}
			{error && <ErrorView message="Oops, mistake... Please try again" />}
				<Title title="Trending today" />
				<MovieGallery movies={trendingMovies ?? []} />
		</HomeContainer>
	);
};

export default HomePage;