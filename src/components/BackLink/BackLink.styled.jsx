import styled from "styled-components";
import { Link as StyledLink } from "react-router-dom";

export const Link = styled(StyledLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 16px;
	padding: 8px 16px;
	width: 100px;
	border: none;
	border-radius: 4px;
	font-size: 12px;
	color: #fff;
	text-transform: uppercase;
	text-align: center;
	background: linear-gradient(#f698a8, #f03251);
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
	transform: scale(1);

	&:hover,
	&:focus {
		transform: scale(0.9);
	}

	svg {
		margin-right: 10px;
	}
`;