import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getMoviesReviews } from "services/api";
import { Loader } from "components/Loader/Loader";
import ErrorView from "components/ErrorView/ErrorView";
import {
	ReviewsList,
	ReviewItem,
	WrapReviews,
	ReviewPhotoCard,
	ReviewPhoto,
	ReviewsAuthor,
	ReviewsContent,
} from "./Reviews.styled";
import Avatar from "../../images/Avatar-Profile-No.png";

export const Reviews = () => {
	const { movieId } = useParams();
	const [movieReviews, setMovieReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				setError(false);

				const data = await getMoviesReviews(movieId);
				setMovieReviews(data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [movieId]);

	if (!movieReviews) {
		return;
	}

	return (
		<>
			{isLoading && <Loader />}
			{error && <ErrorView message="Oops, mistake... Please try again" />}

			{movieReviews.length > 0 ? (
				<ReviewsList>
					{movieReviews.map(review => (
						<ReviewItem key={review.id}>
							<WrapReviews>
								<ReviewPhotoCard>
									<ReviewPhoto
										src={review.avatar_path
											? `https://image.tmdb.org/t/p/original${review.avatar_path}`
											: Avatar
										}
										alt={review.author}
										width="160" 
									/>
								</ReviewPhotoCard>
								<ReviewsAuthor>
									<span>Author: </span>
									{review.author}
								</ReviewsAuthor>
							</WrapReviews>
							<ReviewsContent>{ review.content}</ReviewsContent>
						</ReviewItem>
					))}
				</ReviewsList>
			) : (
					<div style={{padding: '24px', textAlign: 'center'}}>
						<p>We don't have any reviews for this movie!</p>
					</div>
			)}
		</>
	);
};

export default Reviews;
