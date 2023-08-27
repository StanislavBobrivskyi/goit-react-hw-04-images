import React from 'react';
import { Imagegalleryitem, Imagegalleryitemimage } from './ImageGallery.styled';

export const ImageGalleryItem = ({ image, onClick }) => {
  const { webformatURL, tags } = image;

  return (
    <Imagegalleryitem>
      <Imagegalleryitemimage
        src={webformatURL}
        alt={`Image: ${tags}`}
        onClick={onClick}
      />
    </Imagegalleryitem>
  );
};
