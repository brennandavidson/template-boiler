'use client';

import React, { createContext, useContext, useState } from 'react';

interface HeaderContextType {
  hasHeroImage: boolean;
  setHasHeroImage: (hasHero: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function useHeader() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
}

interface HeaderProviderProps {
  children: React.ReactNode;
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [hasHeroImage, setHasHeroImage] = useState(true);

  return (
    <HeaderContext.Provider value={{ hasHeroImage, setHasHeroImage }}>
      {children}
    </HeaderContext.Provider>
  );
}
