import styled from "styled-components";

export const SearchForm = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	margin-top: 20px;
	width: 100%;
	max-width: 320px;
	height: 34px;
	border: 0;
	outline: 0;
	color: #fff;
	background-color: #f3f7f5;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	backdrop-filter: blure(2px);
	overflow: hidden;
`;

export const SearchFormBtn = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	border: 0;
	opacity: 0.6;
	background: linear-gradient(#f698a8, #f03251);
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	outline: none;

	:hover {
		opacity: 1;
	}

	svg {
		fill: #3d3a3a;
		stroke: #fff;
		stroke-width: 1px;
		transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

		:hover {
			transform: scale(1.2);
		}
	}
`;

export const SearchFormInput = styled.input`
	display: inline-block;
	width: 100%;
	min-height: 34px;
	border-radius: 4px;
	font: inherit;
	font-size: 14px;
	border: none;
	outline: none;
	padding-left: 20px;
	padding-right: 8px;
	background: none;
	color: #3d3a3a;
	letter-spacing: 1.4px;
	text-shadow: 2px 2px 5px white;

	::placeholder {
		font-weight: 400;
		color: #3d3a3a;
		text-shadow: 2px 2px 5px white;
		font-size: 18px;
		letter-spacing: 1.2px;
	}
`;