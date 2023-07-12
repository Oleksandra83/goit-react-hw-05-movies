import PropTypes from 'prop-types';
import ErrorImage from '../../images/No_movie_poster.png';
import { Wrapper, ErrorImg, Text } from './ErrorView.styled';

export default function ErrorView({ message }) {
	return (
		<Wrapper role="alert">
			<Text>{message}</Text>
			<ErrorImg src={ErrorImage} width="180" alt="movie poster" />
		</Wrapper>
	);
}

ErrorView.propTypes = {
	message: PropTypes.string,
};