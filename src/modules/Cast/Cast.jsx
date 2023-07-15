import { useState, useEffect} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getMoviesCast } from "services/api";
import { Loader } from "components/Loader/Loader";
import ErrorView from "components/ErrorView/ErrorView";
import {
	CastList,
	CastItem,
	CastPhotoCard,
	CastPhoto,
	WrapActors,
	ActorsName,
	ActorsCharacter,
	MovieHero,
} from "./Cast.styled.jsx";
import Avatar from "../../images/no-avatar.png";

const Cast = () => {
	const location = useLocation();
	const { movieId } = useParams();
	const [castList, setCastList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				setError(false);

				const data = await getMoviesCast(movieId);
				setCastList(data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [movieId]);

	if (!castList) {
		return;
	}

	return (
		<>
			{isLoading && <Loader />}
			{error && <ErrorView message="Oops, mistake... Please try again" />}

			{castList.length > 0 ? (
				<CastList>
					{castList.map(actor => (
						<Link
							to={`/actors/${actor.id}`}
							state={{ from: location }}
							key={actor.id}
						>
							<CastItem key={actor.id}>
								<CastPhotoCard>
									<CastPhoto
										src={actor.profile_path
											? `https://image.tmdb.org/t/p/original${actor.profile_path}`
											: Avatar
										}
										alt={actor.name}
										width="160" 
									/>
								</CastPhotoCard>
								<WrapActors>
									<ActorsName>{actor.name}</ActorsName>
									{actor.character && (
										<ActorsCharacter>
											<span>Character: </span>
											<MovieHero>{actor.character}</MovieHero>
										</ActorsCharacter>
									)}
								</WrapActors>
							</CastItem>
						</Link>
					))}
				</CastList>
			) : (
					<div style={{padding: '24px', textAlign: 'center'}}>
						<p>We don't have info about cast for this movie!</p>
					</div>
			)}
		</>
	);
};

export default Cast;