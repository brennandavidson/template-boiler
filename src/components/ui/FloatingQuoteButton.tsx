'use client';

import { useState, useEffect } from 'react';

interface FloatingQuoteButtonProps {
  onClick?: () => void;
}

export default function FloatingQuoteButton({ onClick }: FloatingQuoteButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button right after scrolling starts (after hero)
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`font-heading fixed bottom-6 right-24 z-30 bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-md font-bold uppercase text-sm shadow-lg transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      aria-label="Get a free quote"
    >
      Get Free Quote
    </button>
  );
}
