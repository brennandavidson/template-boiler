'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { seoConfig } from '@/seo/seo.config';

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

interface HeaderProps {
  navLinks?: NavLink[];
  phoneNumber?: string;
  onQuoteClick?: () => void;
}

export function Header({
  navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Projects' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  phoneNumber = '(555) 123-4567',
  onQuoteClick,
}: HeaderProps) {
  const { mode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 ${
        isScrolled || isMenuOpen
          ? 'bg-background-blue shadow-lg border-b-2 border-primary'
          : ''
      }`}
      style={{
        transition: 'background-color 0ms, box-shadow 0ms'
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logos/horizontal-logo-inverted.png"
              alt={`${seoConfig.siteName} Logo`}
              width={180}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden nav:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-white hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-montserrat text-white hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA Section - Right */}
          <div className="hidden nav:flex items-center space-x-4">
            {/* Phone Number Button */}
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="font-heading bg-white hover:bg-gray-100 text-primary px-6 py-4 rounded-md font-bold uppercase text-sm transition-colors shadow-md flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {phoneNumber}
            </a>

            {/* Get Free Quote Button */}
            <button
              onClick={handleQuoteClick}
              className="font-heading bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-md font-bold uppercase text-sm transition-colors shadow-md"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile/Tablet CTA & Menu - Right Side */}
          <div className="nav:hidden flex items-center gap-4">
            {/* Mobile Call Button */}
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="font-heading bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-md font-bold uppercase text-xs transition-colors shadow-md flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden min-[500px]:inline">{phoneNumber}</span>
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`block w-full h-0.5 bg-gray-300 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-full h-0.5 bg-gray-300 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 bg-gray-300 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`nav:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className={`py-4 space-y-4 transition-all duration-300 ${isMenuOpen ? 'border-t border-primary' : ''}`}>
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="block text-gray-300 hover:text-background-blue transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-gray-300 hover:text-background-blue transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              )
            ))}

            {/* Mobile Quote Button */}
            <button
              onClick={handleQuoteClick}
              className="font-heading w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-bold uppercase text-sm transition-colors"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
