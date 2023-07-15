import styled from "styled-components";
import { NavLink as MovieLink } from "react-router-dom";

export const MovieSection = styled.section`
	position: relative;
	margin: 0 auto;
	width: 100%;
	padding: 0 16px;
`;

export const WraperMovie = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 0 16px;
	font-weight: 500;
`;

export const MovieContainer = styled.div`
	position: relative;
	border-radius: 8px;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	max-width: 100%;
`;

export const PosterMovie = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	border-radius: 8px;
`;

export const WraperDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	padding: 16px;
	font-weight:500;
`;

export const DetailsTitle = styled.h2`
	margin-bottom: 16px;
	text-align: center;
	color: #2b2828;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 1.5px;
`;

export const VoteAvarage = styled.p`
	margin-bottom: 16px;
`;

export const Genres = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;
	`;

export const Genre = styled.li`
	background: linear-gradient(#f698a8, #f03251);
	color: #515358;
	text-shadow: 0px 0.5px 0.5px #959799;
	font-size: 14px;
	font-weight: 500;
	border-radius: 4px;
	padding: 4px;
	`;

export const MovieNavigation = styled.div`
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		/* justify-content: space-between; */
		gap: 40px;
		height: auto;
		margin-top: 20px;
		padding: 16px;
		background: linear-gradient(
			180deg,
			rgba(2, 0, 36, 0) 0%,
			rgba(121, 9, 9, 0) 10%,
			rgb(92, 170, 123) 100%
		);
		font-size: 14px;
	`;

export const MovieNavigationTitle = styled.h3`
		margin-bottom: 30px;
		color: #2b2828;
		font-size: 18px;
	`;

export const NavLink = styled(MovieLink)`
		position: relative;
		z-index: 10;
		padding: 8px 16px;
		border-radius: 4px;
		text-decoration: none;
		color: #000;
		text-shadow: 0px 0.5px 0.5px #fff, inset 40px 40px 40px #fff;
		font-size: 12px;
		font-weight: 500;

		&.active {
			color: #fff;
			background: linear-gradient(#f698a8, #f03251);
		}

		:hover:not(.active),
		:focus-visible:not(.active) {
			color: #f03251;
	}
	`;