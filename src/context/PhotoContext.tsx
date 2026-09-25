import React, { createContext, useContext, useState, useEffect } from 'react';
import heroDefault from '../assets/images/nina_rosa_hero_real_1790343504053.jpg';
import tabletSofaDefault from '../assets/images/nina_rosa_tablet_sofa_1790343522666.jpg';
import seatedStoolDefault from '../assets/images/nina_rosa_seated_stool_1790343536737.jpg';

export interface PhotosState {
  heroPhoto: string;
  aboutPhoto: string;
  card1Photo: string;
  card2Photo: string;
  card3Photo: string;
}

const DEFAULT_PHOTOS: PhotosState = {
  heroPhoto: heroDefault,
  aboutPhoto: tabletSofaDefault,
  card1Photo: heroDefault,
  card2Photo: tabletSofaDefault,
  card3Photo: seatedStoolDefault,
};

interface PhotoContextType {
  photos: PhotosState;
  updatePhoto: (key: keyof PhotosState, base64: string) => void;
  resetPhotos: () => void;
  isCustomized: boolean;
  openUploader: boolean;
  setOpenUploader: (open: boolean) => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photos, setPhotos] = useState<PhotosState>(() => {
    try {
      const saved = localStorage.getItem('nina_rosa_custom_photos');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_PHOTOS, ...parsed };
      }
    } catch (e) {
      console.error('Error loading saved photos', e);
    }
    return DEFAULT_PHOTOS;
  });

  const [openUploader, setOpenUploader] = useState(false);

  const updatePhoto = (key: keyof PhotosState, base64: string) => {
    setPhotos((prev) => {
      const next = { ...prev, [key]: base64 };
      try {
        localStorage.setItem('nina_rosa_custom_photos', JSON.stringify(next));
      } catch (e) {
        console.error('Error saving custom photo', e);
      }
      return next;
    });
  };

  const resetPhotos = () => {
    localStorage.removeItem('nina_rosa_custom_photos');
    setPhotos(DEFAULT_PHOTOS);
  };

  const isCustomized = photos.heroPhoto !== DEFAULT_PHOTOS.heroPhoto ||
    photos.aboutPhoto !== DEFAULT_PHOTOS.aboutPhoto;

  return (
    <PhotoContext.Provider
      value={{
        photos,
        updatePhoto,
        resetPhotos,
        isCustomized,
        openUploader,
        setOpenUploader,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};
