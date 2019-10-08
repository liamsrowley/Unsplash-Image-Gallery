import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

import Loader from './Loader';

import './Search.css';

const Search = ({ onSubmit, isLoading }) => {

  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      onSubmit(query);
      setError(null);
    } else {
      setError('You must enter a search term')
    }
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="field">
        <div className="field-container">
          { isLoading ? (
            <Loader />
          ) : (
            <IoMdSearch className="field-container__icon" onClick={handleSubmit} />
          ) }
        </div>
        <input type="text" name="search" placeholder="Search for images..." onChange={handleChange} />
        <span className="error">{error}</span>
      </div>
    </form>
  );
}

export default Search;
