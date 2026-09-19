import React, { createContext, useContext, useRef, useState } from 'react';
import { Platform, ScrollView } from 'react-native';

interface ScrollContextType {
  setScrollViewRef: (ref: React.RefObject<ScrollView | null>) => void;
  registerSection: (name: string, yOffset: number) => void;
  scrollToSection: (name: string) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  setScrollViewRef: () => {},
  registerSection: () => {},
  scrollToSection: () => {},
});

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const sectionPositions = useRef<{ [key: string]: number }>({});

  const setScrollViewRef = (ref: React.RefObject<ScrollView | null>) => {
    if (ref && ref.current) {
      scrollViewRef.current = ref.current;
    }
  };

  const registerSection = (name: string, yOffset: number) => {
    sectionPositions.current[name] = yOffset;
  };

  const scrollToSection = (name: string) => {
    // Web smooth scroll if element exists
    if (Platform.OS === 'web' && typeof document !== 'undefined') {
      const element = document.getElementById(name);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Fallback or Native Mobile scroll
    const y = sectionPositions.current[name];
    if (typeof y === 'number' && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: Math.max(0, y - 80), animated: true });
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        setScrollViewRef,
        registerSection,
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
