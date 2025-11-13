'use client';

import { useEffect } from 'react';
import { getSiteConfigIntegrations } from '@/lib/get-site-config';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const integrations = getSiteConfigIntegrations();

  // Extract form URL from the popup embed code
  const embedCode = integrations.ghl?.quoteFormEmbedPopup || integrations.ghl?.quoteFormEmbedInline || '';
  const srcMatch = embedCode.match(/src="([^"]+)"/);
  const formUrl = srcMatch ? srcMatch[1] : '';
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-1 shadow-md"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* GHL Form Embed */}
        <div className="w-full overflow-hidden rounded-xl" style={{ height: '700px' }}>
          {formUrl && (
            <iframe
              src={formUrl}
              className="w-full"
              style={{
                height: '750px',
                border: 'none'
              }}
              title="Get Free Quote"
            />
          )}
        </div>
      </div>
    </div>
  );
}
