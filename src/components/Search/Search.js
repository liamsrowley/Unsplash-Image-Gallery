import React, { useState, useEffect } from 'react';
import { IoMdSearch } from 'react-icons/io';

import Loader from '../Loader/Loader';
import Tooltip from '../Tooltip/Tooltip';

import './Search.css';

const Search = ({ onSubmit, isLoading }) => {

  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [error]);

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
        <div className="field-container" onClick={handleSubmit}>
          { isLoading ? (
            <Loader />
          ) : (
            <IoMdSearch className="field-container__icon" />
          ) }
        </div>
        <input type="text" name="search" placeholder="Search for images..." onChange={handleChange} />
      </div>
      { error && <Tooltip message={error} /> }
    </form>
  );
}

export default Search;
