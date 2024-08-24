import React from 'react';
import { Images } from '../../types/images';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Images[];
  onImageClick: (image: Images) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.gallery}>
        {images.map(image => (
          <li className={s.gallery__item} key={image.id}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
