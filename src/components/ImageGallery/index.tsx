// src/components/ImageGallery/index.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  GalleryContainer, MainImageWrapper, MainImage,
  ThumbnailRail, Thumbnail
} from './ImageGallery.styles';

interface ImageGalleryProps {
  images: string[];
}

// A simple, robust cross-fade animation
const galleryVariants: Variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <GalleryContainer>
      <MainImageWrapper>
        {/* AnimatePresence is now responsible for the container's animation */}
        <AnimatePresence initial={true} mode="wait">
          <motion.div
            // The key is essential for AnimatePresence to detect changes
            key={activeIndex}
            variants={galleryVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.3, ease: 'easeInOut' }
            }}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
          >
            <MainImage 
              src={images[activeIndex]} 
              alt={`Project image ${activeIndex + 1}`} 
              fill
              priority={activeIndex === 0} // Prioritize loading the first image
            />
          </motion.div>
        </AnimatePresence>
      </MainImageWrapper>

      {images.length > 1 && (
        <ThumbnailRail>
          {images.map((img, index) => (
            <Thumbnail
              key={img}
              $isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <Image 
                src={img} 
                alt={`Thumbnail ${index + 1}`} 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </Thumbnail>
          ))}
        </ThumbnailRail>
      )}
    </GalleryContainer>
  );
};

export default ImageGallery;