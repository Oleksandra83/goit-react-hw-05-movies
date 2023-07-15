import React from "react";
import {
	SearchForm,
	SearchFormBtn,
	SearchFormInput,
} from "./Searchbar.styled";
import { HiMagnifyingGlass } from "react-icons/hi2";
import PropTypes from "prop-types";

export const Searchbar = ({ value, onChange }) => {

	return (
		<SearchForm>
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
		</SearchForm>
		);
	}

Searchbar.propType = {
	handleFormSubmit: PropTypes.func.isRequired,
};
