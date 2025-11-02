import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  containerClassName?: string;
}

/**
 * PageWrapper Component
 *
 * A simple wrapper for page content that provides consistent spacing and container width.
 * Use this when you need a standard page layout with max-width container.
 * Automatically adds top padding to account for the fixed header.
 *
 * @param fullWidth - If true, content spans full width. If false, uses max-width container.
 * @param className - Additional classes for the wrapper div
 * @param containerClassName - Additional classes for the container div
 */
export function PageWrapper({
  children,
  fullWidth = false,
  className = '',
  containerClassName = '',
}: PageWrapperProps) {
  return (
    <div className={`w-full pt-32 ${className}`}>
      <div className={
        fullWidth
          ? `w-full ${containerClassName}`
          : `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`
      }>
        {children}
      </div>
    </div>
  );
}

export default PageWrapper;