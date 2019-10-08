import React, { useState } from 'react';

import unsplash from '../apis/unsplash';

import Search from './Search/Search';
import ImageList from './ImageList/ImageList';
import PagePlaceholder from './PagePlaceholder/PagePlaceholder';
import Loader from './Loader/Loader';

import './App.css';

const App = () => {

  const [response, setResponse] = useState({
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

  const renderPageTitle = () => {
    if (response.total && response.total !== 0 && !isLoading) {
      return <h2 className="page__title">Found {response.total} results for this search term</h2>
    }
  }

  const renderPageContent = () => {
    if (isLoading) {
      return <Loader className="loader--big"/>;
    }
    if (response.results) {
      if (response.results.length === 0) {
        return <PagePlaceholder imageURL="/images/nodata.svg" message="Oops! We couldn't find any results for that search term" imageAlt="Clipboard with blank document" />
      }
      return <ImageList images={response.results} isLoading={isLoading} />
    }
    return <PagePlaceholder imageURL="/images/search.svg" message="Get started by searching for something using the search bar above." imageAlt="Magnifying glass on paper" />
  }

  return (
    <div className="page">
      <Search onSubmit={handleSubmit} isLoading={isLoading}/>
      { renderPageTitle() }
      { renderPageContent() }
    </div>
  );
}

export default App;
