import { useState, useEffect, useRef, Suspense } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "services/api";
import { BackLink } from "components/BackLink/BackLink";
import { Loader } from "components/Loader/Loader";
import ErrorView from "components/ErrorView/ErrorView";
import {
	MovieSection,
	WraperMovie,
	MovieContainer,
	PosterMovie,
	WraperDetails,
	DetailsTitle,
	VoteAvarage,
	Genres,
	Genre,
	MovieNavigation,
	MovieNavigationTitle,
	NavLink,
} from "./MovieDetailsPage.styled";
import NoPoster from "../../images/No_movie_poster.png";

const MovieDetailsPage = () => {
	const [movieDetails, setMovieDetails] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const location = useLocation();
	const backLinkRef = useRef(location.state?.from ?? '/');
	const { movieId } = useParams();

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				setError(false);

				const data = await getMovieDetails(movieId);
				setMovieDetails(data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [movieId]);

	if (!movieId) {
		return;
	}

	const {
		poster_path,
		original_title,
		title,
		release_date,
		vote_average,
		genres,
		overview,
	} = movieDetails;

	return (
		<>
			{isLoading && <Loader />}
			{error && <ErrorView message="Oops, mistake... Please try again" />}

			{!error && (
				<>
					<MovieSection>
						<WraperMovie>
							<MovieContainer>
								{`https://image.tmdb.org/t/p/original${poster_path}` && (
									<PosterMovie
										src={poster_path
											? `https://image.tmdb.org/t/p/original${poster_path}`
											: NoPoster
										}
										alt={title || original_title}
										width="300"
									/>
								)}
							</MovieContainer>
							<WraperDetails>
								<DetailsTitle>
									{title || original_title}
									{release_date && <p>({parseInt(release_date)})</p>}
								</DetailsTitle>
								{(vote_average || vote_average > 0) && (
									<VoteAvarage>Rating: { vote_average}</VoteAvarage>
								)}
								{genres && (
									<Genres>
										{genres.map((genre, index) => (
											<Genre key={index}>{genre.name}</Genre>
										))}
									</Genres>
								)}

								{overview && (
									<>
										<h2>Overview</h2>
										<p>{overview}</p>
									</>
								)}

							</WraperDetails>
						</WraperMovie>
						<MovieNavigation>
							<MovieNavigationTitle>Additional information</MovieNavigationTitle>
							<BackLink to={backLinkRef.current}>Go Back</BackLink>
							<nav>
								<NavLink to="cast" state={location.state}>Cast</NavLink>
								<NavLink to="reviews" state={location.state}>Reviews</NavLink>
							</nav>
						</MovieNavigation>
					</MovieSection>
					<Suspense>
						<Outlet />
					</Suspense>
				</>
			)}
		</>
	);
};
export default MovieDetailsPage;