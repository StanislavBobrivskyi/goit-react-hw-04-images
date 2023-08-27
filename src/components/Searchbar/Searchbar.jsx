import React, { useState } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormbutton,
  SearchForminput,
} from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormbutton type="submit">
          <BiSearchAlt />
        </SearchFormbutton>
        <SearchForminput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchBar>
  );
};
