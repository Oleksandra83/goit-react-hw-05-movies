import React from "react";
import { MovieListItem, MoviePoster, MovieTitle } from "./MovieGalleryItem.styled";
import { Link } from "react-router-dom";
import NoPoster from "../../images/no-movie-poster.png";
import PropTypes from "prop-types";

export const MovieGalleryItem = ({
	movie: {
		id,
		original_title,
		poster_path,
		title,
		name},
	state
	}) => {

	return (
		<MovieListItem>
			<Link to={`/movies/${id}`} state={state}>
				<MoviePoster>
					<img src={poster_path
						? `https://image.tmdb.org/t/p/original${poster_path}`
						: NoPoster
					}
						alt={original_title}
						width="200"
					/>
				</MoviePoster>
				<MovieTitle>{title || name}</MovieTitle>
			</Link>
		</MovieListItem>
	);
};

MovieGalleryItem.propTypes = {
	id: PropTypes.number.isRequired,
	original_title: PropTypes.string.isRequired,
	poster_path: PropTypes.string,
	title: PropTypes.string.isRequired,
}