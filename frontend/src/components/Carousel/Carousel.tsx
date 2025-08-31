import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Carousel.module.css';

interface Image {
  src: string;
  alt?: string;
}

interface CarouselProps {
  images: Image[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  // Debug: verificar se as imagens estão sendo recebidas
  console.log('Carousel images:', images);
  console.log('Current index:', currentIndex);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Avançar automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        {images.map((image: Image, index: number) => (
          <div 
            key={index} 
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <a href="https://www.furia.gg/" target='_blank' rel="noopener">
              <img 
                src={image.src} 
                alt={image.alt || t('carousel.imageAlt', { index: index + 1 })} 
                className={index === currentIndex ? styles.activeImage : styles.inactiveImage}
              />
            </a>
          </div>
        ))}
      </div>
      
      <button 
        className={`${styles.arrow} ${styles.arrowLeft}`} 
        onClick={goToPrevious}
        aria-label={t('carousel.previous')}
      >
        &lt;
      </button>
      
      <button 
        className={`${styles.arrow} ${styles.arrowRight}`} 
        onClick={goToNext}
        aria-label={t('carousel.next')}
      >
        &gt;
      </button>
      
      <div className={styles.indicators}>
        {images.map((_: Image, index: number) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={t('carousel.goToSlide', { index: index + 1 })}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 