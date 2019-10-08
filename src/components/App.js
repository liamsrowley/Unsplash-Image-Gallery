import React, { useState } from 'react';

import unsplash from '../apis/unsplash';

import Search from './Search';
import ImageList from './ImageList';

import './App.css';

const App = () => {

  const [response, setResponse] = useState({
    results: {},
    total: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (query, page = 1) => {
    setIsLoading(true);
    const response = await unsplash.get(`/search/photos/`, {
      params: {
        query,
        page,
        per_page: 20
      }
    });
    setResponse(response.data);
    setIsLoading(false);
  }

  console.log(response);

  return (
    <div className="page">
      <Search onSubmit={handleSubmit} isLoading={isLoading}/>
      { response.total && <h2 className="page__title">Found {response.total} results.</h2> }
      <ImageList images={response.results} isLoading={isLoading} />
    </div>
  );
}

export default App;
