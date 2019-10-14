import React, { useState, Fragment } from 'react';

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
  const [query, setQuery] = useState('');
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch images from Unsplash based on provided params
  const fetchImages = async (query, page = 1, per_page = 20) => {
    setIsLoading(true);

    const config = {
      params: {
        query,
        page,
        per_page
      }
    }

    const response = await unsplash.get('/search/photos/', config);
    setIsLoading(false);
    return response.data;
  }

  // Fetch the next set of results and add them to the images array
  const loadMoreImages = async () => {
    const nextPage = response.current_page + 1;
    const data = await fetchImages(query, nextPage);
    setImages([ ...images, ...data.results ]);
    setResponse({
      total: data.total,
      total_pages: data.total_pages,
      current_page: nextPage
    });
  }

  // Set the search query to whatever was typed into the search bar
  // then fetch images from the API;
  const handleSubmit = async (query) => {
    setQuery(query);
    const data = await fetchImages(query);
    setResponse({
      total: data.total,
      total_pages: data.total_pages,
      current_page: 1
    });
    setImages(data.results);
  }

  const renderPageTitle = () => {
    if (response.total && response.total !== 0 && !isLoading) {
      return <h2 className="page__title">Found {response.total.toLocaleString()} results for this search term</h2>
    }
  }

  const renderPageContent = () => {
    if (images) {
      if (images.length === 0) {
        return <PagePlaceholder imageURL="/images/nodata.svg" message="Oops! We couldn't find any results for that search term" imageAlt="Clipboard with blank document" />
      }
      return (
        <Fragment>
          <ImageList images={images} isLoading={isLoading} loadMoreImages={loadMoreImages} />
          <button className="button" onClick={loadMoreImages}>
            { isLoading && <Loader /> }
            { !isLoading && 'Load More' }
          </button>
        </Fragment>
      )
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
