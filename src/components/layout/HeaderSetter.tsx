'use client';

import { useEffect, useState } from 'react';
import { useHeader } from '@/contexts/HeaderContext';

interface HeaderSetterProps {
  hasHeroImage: boolean;
}

export function HeaderSetter({ hasHeroImage }: HeaderSetterProps) {
  const { setHasHeroImage } = useHeader();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setHasHeroImage(hasHeroImage);
    }

    // Cleanup: reset to false when component unmounts
    return () => {
      if (mounted) {
        setHasHeroImage(false);
      }
    };
  }, [hasHeroImage, setHasHeroImage, mounted]);

  return null; // This component doesn't render anything
}
