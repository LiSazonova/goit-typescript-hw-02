import React, { useState, useEffect } from 'react';
import fetchImages from './components/Api/unsplash-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer/Footer';
import { Images } from './types/images';
import s from './App.module.css';

const App: React.FC = () => {
  const [images, setImages] = useState<Images[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Images | null>(null);
  const [noImages, setNoImages] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getImages = async (): Promise<void> => {
      setLoading(true);
      setNoImages(false);
      setTimeout(async () => {
        try {
          const newImages: Images[] = (await fetchImages(query, page));
          if (newImages.length === 0 && page === 1) {
            setNoImages(true);
          }
          setImages(prevImages => [...prevImages, ...newImages]);
        } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
          setLoading(false);
        }
      }, 1000);
    };

    getImages();
  }, [query, page]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setError(null);
    setNoImages(false);
  };

  const handleLoadMore: () => void = () => setPage(prevPage => prevPage + 1);

  const handleImageClick: (image: Images) => void = image => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal: () => void = () => setShowModal(false);

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {noImages && !loading && <p className={s.error}>No images found</p>}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          image={selectedImage}
        />
      )}
      {images.length > 0 && <Footer />}
      <Toaster />
    </div>
  );
};

export default App;
