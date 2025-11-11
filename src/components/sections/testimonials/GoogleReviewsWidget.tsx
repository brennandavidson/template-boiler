'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { getSiteConfigIntegrations } from '@/lib/get-site-config';

interface Review {
  uuid: string;
  authorName: string;
  authorAvatar: string;
  text: string;
  starRating: number;
  datePublished: string;
}

interface WidgetData {
  reviews: Review[];
  gbpLocationSummary: {
    reviewsCount: number;
    rating: number;
  };
}

interface GoogleReviewsWidgetProps {
  layout?: 'badge' | 'carousel' | 'grid' | 'custom';
  theme?: 'light' | 'dark';
  maxCharacters?: number;
}

/**
 * Google Reviews Widget Component
 *
 * To use this component, you need to set up one of the following:
 *
 * Option 1 (Recommended - Free): Use Featurable
 * 1. Create a free account at https://featurable.com
 * 2. Create a widget and copy the widget ID
 * 3. Add NEXT_PUBLIC_FEATURABLE_WIDGET_ID to your .env.local file
 *
 * Option 2: Use Google Places API directly
 * 1. Get your Google Place ID
 * 2. Get a Google Places API key
 * 3. Add NEXT_PUBLIC_GOOGLE_PLACE_ID and NEXT_PUBLIC_GOOGLE_API_KEY to .env.local
 */
export default function GoogleReviewsWidget({
  layout = 'carousel',
  theme = 'light',
  maxCharacters = 200,
}: GoogleReviewsWidgetProps) {
  const integrations = getSiteConfigIntegrations();
  const featurableId = integrations.featurable?.widgetId || process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID;
  const [widgetData, setWidgetData] = useState<WidgetData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [displayCount, setDisplayCount] = useState(9);

  // Helper function to safely format dates
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return '';
    }
  };

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const reviewsPerPage = isMobile ? 1 : 3;

  useEffect(() => {
    if (!featurableId) {
      setLoading(false);
      return;
    }

    const fetchReviews = async () => {
      try {
        // Use the v2 API endpoint
        const response = await fetch(
          `https://featurable.com/api/v2/widgets/${featurableId}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();

        if (data.success && data.widget) {
          console.log('Fetched reviews count:', data.widget.reviews.length);
          console.log('Total reviews on GBP:', data.widget.gbpLocationSummary.reviewsCount);

          // Transform the new API structure to match our interface
          const transformedReviews = data.widget.reviews.map((review: any) => ({
            uuid: review.id,
            authorName: review.author?.name || 'Anonymous',
            authorAvatar: review.author?.avatarUrl || '',
            text: review.text || '',
            starRating: review.rating?.value || 5,
            datePublished: review.publishedAt || '',
          }));

          setWidgetData({
            reviews: transformedReviews,
            gbpLocationSummary: data.widget.gbpLocationSummary,
          });
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [featurableId]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (layout === 'carousel' && widgetData && widgetData.reviews.length > reviewsPerPage) {
      const totalPages = Math.ceil(widgetData.reviews.length / reviewsPerPage);
      const interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [layout, widgetData, reviewsPerPage]);

  if (!featurableId) {
    return (
      <div className="text-center py-12 px-4">
        <div className="max-w-2xl mx-auto bg-primary-50 border border-primary-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary-900 mb-2">
            Google Reviews Setup Required
          </h3>
          <p className="text-sm text-primary-700 mb-4">
            To display real Google reviews, please configure one of the following options:
          </p>
          <div className="text-left text-sm text-primary-800 space-y-2">
            <div>
              <strong>Option 1 (Recommended):</strong> Use Featurable (Free)
              <ol className="list-decimal list-inside ml-4 mt-1">
                <li>Create account at <a href="https://featurable.com" target="_blank" rel="noopener noreferrer" className="underline">featurable.com</a></li>
                <li>Create a widget and copy the widget ID</li>
                <li>Add <code className="bg-primary-100 px-1 rounded">NEXT_PUBLIC_FEATURABLE_WIDGET_ID</code> to .env.local</li>
              </ol>
            </div>
            <div className="mt-3">
              <strong>Option 2:</strong> Use Google Places API
              <ol className="list-decimal list-inside ml-4 mt-1">
                <li>Get your Google Place ID</li>
                <li>Get a Google Places API key</li>
                <li>Add variables to .env.local</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className={`ml-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
          Loading reviews...
        </p>
      </div>
    );
  }

  if (error || !widgetData) {
    return (
      <div className={`text-center py-8 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
        Failed to load Google reviews. Please try again later.
      </div>
    );
  }

  const { reviews, gbpLocationSummary } = widgetData;

  // Grid layout with pagination for reviews page
  if (layout === 'grid') {
    const visibleReviews = reviews.slice(0, displayCount);
    const hasMore = displayCount < reviews.length;

    const loadMore = () => {
      setDisplayCount(prev => Math.min(prev + 9, reviews.length));
    };

    return (
      <div className="w-full">
        {/* Summary Badge */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={`summary-star-${i}`}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="font-semibold text-gray-900">
              {gbpLocationSummary.rating.toFixed(1)}
            </span>
            <span className="text-gray-600">
              ({gbpLocationSummary.reviewsCount} reviews)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleReviews.map((review, index) => {
            const truncatedText = review.text.length > maxCharacters
              ? review.text.substring(0, maxCharacters) + '...'
              : review.text;

            return (
              <div
                key={`grid-review-${review.uuid}-${index}`}
                className="p-6 rounded-lg bg-white border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-background-blue"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate text-gray-900">
                      {review.authorName}
                    </h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={`${review.uuid}-star-${i}`}
                          className={`w-4 h-4 ${
                            i < review.starRating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-300 text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  {truncatedText}
                </p>
                <p className="text-xs mt-4 text-gray-500">
                  {formatDate(review.datePublished)}
                </p>
              </div>
            );
          })}
        </div>

        {/* See More Button */}
        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-background-blue text-white font-bold uppercase text-sm rounded-md hover:bg-background-blue-dark transition-colors shadow-lg"
            >
              See More Reviews
            </button>
          </div>
        )}
      </div>
    );
  }

  if (layout === 'carousel') {
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const startIndex = currentPage * reviewsPerPage;
    const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

    const goToPrevious = () => {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const goToNext = () => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    return (
      <div className="w-full">
        {/* Summary Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className={`flex items-center gap-2 px-6 py-3 rounded-full ${
            theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-white shadow-lg'
          }`}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={`carousel-summary-star-${i}`}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {gbpLocationSummary.rating.toFixed(1)}
            </span>
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              ({gbpLocationSummary.reviewsCount} reviews)
            </span>
          </div>
        </div>

        {/* Carousel Container with external arrows */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto px-2 sm:px-4">
          {/* Left Navigation Arrow */}
          <button
            onClick={goToPrevious}
            className={`flex-shrink-0 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all shadow-lg ${
              theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-white/80 hover:bg-white text-gray-900'
            }`}
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Reviews Grid */}
          <div className="flex-1 overflow-hidden">
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(0)`,
              }}
            >
              {currentReviews.map((review, index) => {
                const truncatedText = review.text.length > maxCharacters
                  ? review.text.substring(0, maxCharacters) + '...'
                  : review.text;

                return (
                  <div
                    key={`${review.uuid}-${startIndex + index}`}
                    className="p-4 sm:p-6 rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold truncate text-gray-900 text-sm sm:text-base">
                          {review.authorName}
                        </h4>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={`${review.uuid}-carousel-star-${i}`}
                              className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                i < review.starRating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'fill-gray-300 text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                      {truncatedText}
                    </p>
                    <p className="text-xs mt-3 sm:mt-4 text-gray-500">
                      {formatDate(review.datePublished)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={goToNext}
            className={`flex-shrink-0 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all shadow-lg ${
              theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-white/80 hover:bg-white text-gray-900'
            }`}
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={`carousel-dot-${index}`}
              onClick={() => setCurrentPage(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentPage
                  ? theme === 'dark'
                    ? 'bg-white w-8'
                    : 'bg-gray-900 w-8'
                  : theme === 'dark'
                  ? 'bg-white/30 w-2'
                  : 'bg-gray-300 w-2'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Default grid layout (for non-carousel)
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.slice(0, 6).map((review, index) => {
        const truncatedText = review.text.length > maxCharacters
          ? review.text.substring(0, maxCharacters) + '...'
          : review.text;

        return (
          <div
            key={`default-review-${review.uuid}-${index}`}
            className="p-6 rounded-lg bg-white shadow-lg"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">
                  {review.authorName}
                </h4>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={`${review.uuid}-default-star-${i}`}
                      className={`w-3 h-3 ${
                        i < review.starRating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-300 text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              {truncatedText}
            </p>
            <p className="text-xs mt-3 text-gray-500">
              {formatDate(review.datePublished)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
