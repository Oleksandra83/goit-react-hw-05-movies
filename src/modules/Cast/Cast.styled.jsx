import styled from "styled-components";

export const CastList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 16px;
	padding: 16px 0;
	text-align: center;
`;

export const CastItem = styled.li`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	max-width: 100%;
	width: 200px;
	/* height: 100%; */
	border-radius: 8px;
	border: none;
	outline: none;
	font-size: 12px;
	font-weight: 700;
	overflow: hidden;
	box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.17);
`;

export const CastPhotoCard = styled.div`
	position: relative;
	overflow: hidden;
	margin-bottom: 8px;
`;

export const CastPhoto = styled.img`
	display: block;
	width: 100%;
	height: 320px;
	min-height: 100%;
	object-fit: cover;
	object-position: center;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	transition: transform 250ms linear;
	transform: scale(1);

	&:hover {
		transform: scale(1.1);
	}
`;

export const WrapActors = styled.div`
	flex-direction: column;
	align-items: center;
	flex: 1 0 auto;
	padding: 4px;
`;

export const ActorsName = styled.h3`
	margin-bottom: 8px;
	text-align: center;
	color: #2b2828;
	font-size: 12px;
	font-weight: 500;
`;

export const ActorsCharacter = styled.p`
	margin-bottom: 8px;
	text-align: center;
	color: #2b2828;
	font-size: 12px;
	font-weight: 500;
`;

export const MovieHero = styled.span`
	color: #f03251;
`