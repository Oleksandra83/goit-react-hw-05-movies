import { HeaderStyled, Logo, Box, Nav, NavLinkStyled } from "./Header.styled";
import LogoType from "../../../images/movie.png";


export const Header = () => {
	return (
		<HeaderStyled>
			<Box>
				<Logo to="/">
				<img src={LogoType} alt="logo" width="60px" />
			</Logo>
			<Nav>
				<NavLinkStyled to="/">Home</NavLinkStyled>
				<NavLinkStyled to="/movies">Movies</NavLinkStyled>
			</Nav>
			</Box>
		</HeaderStyled>
	);
}