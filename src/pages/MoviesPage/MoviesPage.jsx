import { Searchbar } from "../../components/Searchbar/Searchbar";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMoviesSearch } from "../../services/api";
import { MovieGallery } from "../../modules/MovieGallery/MovieGallery";
import { Loader } from "../../components/Loader/Loader";
import ErrorView from "../../components/ErrorView/ErrorView";
import { MoviesContainer} from "./MoviesPage.styled";

const MoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
		query: '',
	});

	const params = useMemo(() => Object.fromEntries([...searchParams]),
		[searchParams]
	);

	const page = Number(params.page || 1);
	let { query } = params;

	const location = useLocation();

	useEffect(() => {
		(async () => {
			try {
				const data = await getMoviesSearch(page, query);
				setMovies(data.results);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [page, query, location.search]);

	useEffect(() => {
		const filtered = movies?.filter(movie =>
			movie?.title?.toLowerCase().includes(query?.toLowerCase())
		);
		setFilteredMovies(filtered);
	}, [movies, query]);

	const handleSearchChange = e => {
		const inputValue = e.target.value;
		query = inputValue;
		setSearchParams({ page: 1, query: query });
	};

	return (
		<>
			<MoviesContainer>
				<Searchbar value={query} onChange={handleSearchChange} />
				{isLoading && <Loader />}
				{error && <ErrorView message="I didn`t find movies. Please try again" />}
				{!error && query && !isLoading && (
					<MovieGallery movies={filteredMovies} />
				)}
			</MoviesContainer>
			{!movies.length && query &&
				<div style={{ padding: '24px', textAlign: 'center' }}>
					<p>We don't have movies by query: { query }</p>
				</div>}
		</>
	);
};

export default MoviesPage;