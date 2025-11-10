'use client';

import { createContext, useContext } from 'react';

interface QuoteModalContextType {
  openModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({
  children,
  openModal
}: {
  children: React.ReactNode;
  openModal: () => void;
}) {
  return (
    <QuoteModalContext.Provider value={{ openModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (context === undefined) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}
