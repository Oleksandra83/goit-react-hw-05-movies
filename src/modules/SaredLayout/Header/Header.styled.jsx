import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
position: relative;
display: flex;
align-items: center;
min-height: 64px;
padding: 0px 15px;
margin-bottom: 20px;
background-color: #b1dfc1;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
0px 4px 5px 0px rgba(0, 0, 0, 0.14),
0px 1px 10px 0px rgba(0, 0, 0, 0.12);
backdrop-filter: blur(3.5px);
`;

export const Box = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 500px;
`

export const Logo = styled(NavLink)`
	display: flex;
	align-items: center;
	margin: 0 0 0 50px;
	text-shadow: 0px 1px 1px #7c7c7c;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
	/* margin-top: 12px; */
`;

export const NavLinkStyled = styled(NavLink)`
	padding: 8px 16px;
	border-radius: 4px;
	text-decoration: none;
	color: #2b2828;
	font-size: 16px;
	font-weight: 500;

	&.active {
		color: #fff;
		background: linear-gradient(#f698a8, #f03251);
	}
`
