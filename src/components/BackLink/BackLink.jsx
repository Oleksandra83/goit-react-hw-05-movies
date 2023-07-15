import PropTypes from "prop-types";
import { Link } from "./BackLink.styled";
import { HiArrowLeft } from "react-icons/hi2";

export const BackLink = ({ children, to }) => {
	return (
		<Link to={to}>
			<HiArrowLeft size="16" />
			{children}
		</Link>
	);
};

BackLink.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.any.isRequired,
};