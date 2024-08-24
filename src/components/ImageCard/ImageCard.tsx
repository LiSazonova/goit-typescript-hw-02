import React from 'react';
import { Images } from '../../types/images';
import s from './ImageCard.module.css';

interface ImageCardProps {
  image: Images;
  onClick: () => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const {
    alt_description,
    urls: { small },
  } = image;

  return (
    <div
      onClick={onClick}
      className={s.imageContainer}
      style={{ cursor: 'pointer' }}
    >
      <img className={s.image} src={small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
