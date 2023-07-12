import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	margin: 1vh auto;
`;

export const Text = styled.p`
	max-width: 80%;
	color: #9e035d;
	text-shadow: 2px 2px 5px white;
	text-align: center;
	font-family: 'Dancing Script';
	font-size: 48px;
`;

export const ErrorImg = styled.img`
	width: 25vw;
	height: auto;
	object-fit: contain;
	object-position: center;
	margin: 0 auto;
`;