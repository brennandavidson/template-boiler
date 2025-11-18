'use client';

import { useQuoteModal } from '@/contexts/QuoteModalContext';

interface QuoteButtonProps {
  variant?: 'hero' | 'nav';
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function QuoteButton({
  variant = 'hero',
  onClick,
  className = '',
  children = 'Get Free Quote'
}: QuoteButtonProps) {
  const { openModal } = useQuoteModal();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openModal();
    }
  };

  // Base classes shared by all variants
  const baseClasses = 'font-heading bg-primary hover:bg-primary-dark text-white rounded-md font-bold uppercase';

  // Variant-specific classes
  const variantClasses = {
    hero: 'px-8 py-4 text-sm transition-all hover:scale-105 shadow-lg',
    nav: 'px-6 py-4 text-sm transition-colors shadow-md'
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
