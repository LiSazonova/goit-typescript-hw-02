import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { Images } from '../../types/images';

const customStyles = {
  overlay: {
    backgroundColor: 'rgb(40, 40, 40, 0.7)',
  },
  content: {
    backgroundColor: '#333333',
    boxShadow: '4px 4px 8px rgb(97, 214, 251, 0.4)',
    border: '1px solid #61D6FB',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Images | null;
}
const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <h2 className={s.modal_title}>{image.alt_description}</h2>
      <div>
        <img
          className={s.modal_image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
      <div className={s.modal_description}>
        <p className={s.modal_text}>Likes: {image.likes}</p>
        <p className={s.modal_text}>Author: {image.user.name}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
