import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import  "./Styles/app.scss";

const API_KEY = '43679088-c0d84692f93956b11d66778fa';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const fetchImages = useCallback(() => {
    setLoading(true);

    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        setImages((prevImages) => [...prevImages, ...response.data.hits]);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [searchQuery, page]);

  useEffect(() => {
    if (searchQuery) {
      fetchImages();
    }
  }, [searchQuery, page, fetchImages]);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (largeImageURL) => {
    setLargeImageURL(largeImageURL);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      {error && <p>Something went wrong: {error.message}</p>}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
      {showModal && <Modal largeImageURL={largeImageURL} onClose={toggleModal} />}
    </div>
  );
};

export default App;