import React from "react";
import {
	Shearch,
	SearchFormBtn,
	SearchFormInput,
} from "./Searchbar.styled";
import { HiMagnifyingGlass } from "react-icons/hi2";
import PropTypes from "prop-types";

export const Searchbar = ({ value, onChange }) => {

	return (
		<Shearch>
					<SearchFormInput
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search movies"
						value={value}
						onChange={onChange}
					/>
					<SearchFormBtn >
						<HiMagnifyingGlass size="24" />
					</SearchFormBtn>
			</Shearch>
		);
	}

Searchbar.propType = {
	onSubmit: PropTypes.func.isRequired,
};
