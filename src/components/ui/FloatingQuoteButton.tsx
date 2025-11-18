'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import QuoteButton from './QuoteButton';

interface FloatingQuoteButtonProps {
  onClick?: () => void;
}

export default function FloatingQuoteButton({ onClick }: FloatingQuoteButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Show button right after scrolling starts (after hero)
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed bottom-6 right-24 z-[99999] transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <QuoteButton variant="nav" onClick={onClick} />
    </div>,
    document.body
  );
}
