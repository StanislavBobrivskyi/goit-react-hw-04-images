import React, { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImages } from './api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { AppWrapper } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');

  const handleSearchSubmit = async newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setLoading(true);

    try {
      const newImages = await fetchImages(newQuery, 1);
      setImages(newImages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);

    try {
      const nextPage = page + 1;
      const newImages = await fetchImages(query, nextPage);
      setImages(prevImages => [...prevImages, ...newImages]);
      setPage(nextPage);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = largeImageUrl => {
    setShowModal(true);
    setLargeImageUrl(largeImageUrl);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <AppWrapper>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        largeImageUrl={largeImageUrl}
      />
    </AppWrapper>
  );
};
