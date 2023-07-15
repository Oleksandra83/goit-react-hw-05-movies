import styled from "styled-components";

export const ReviewsList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px;
`;

export const ReviewItem = styled.li`
	display: flex;
	flex-direction: column;
	gap: 8px;
	font-size: 12px;
`;

export const WrapReviews = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 8px;
`;

export const ReviewPhotoCard = styled.div`
	position: relative;
`;

export const ReviewPhoto = styled.img`
	display: block;
	width: auto;
	height: 60px;
	object-fit: cover;
	object-position: center;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
`;

export const ReviewsAuthor = styled.p`
	color: #f03251;
	font-weight: 700;
`;

export const ReviewsContent = styled.p`
	font-weight: 400;
`;