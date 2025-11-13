import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import reviewData from '../data/review.json';

export function Reviews() {
  const { writeReviewLink, totalReviews, averageRating, businessName, reviews } = reviewData;
  const scrollContainerRef = useRef(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState({});

  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < rating ? "#FFB800" : "none"}
            stroke={i < rating ? "#FFB800" : "#E0E0E0"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const scrollReviews = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleReviewExpansion = (reviewId) => {
    setExpandedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  // Get all review images with their review IDs for unique keys
  const reviewImages = reviews
    .filter(review => review.imageUrl)
    .map(review => ({ id: review.id, imageUrl: review.imageUrl }));
  const displayedImages = showAllImages ? reviewImages : reviewImages.slice(0, 4);
  const MAX_REVIEW_LENGTH = 150;

  return (
    <div style={{ padding: '60px 0', background: '#f8f9fa', width: '100%', overflow: 'hidden', boxSizing: 'border-box' }}>
      <div className="container" style={{ maxWidth: '100%', width: '100%', boxSizing: 'border-box' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 40 }}
        >
          <h2 className="section-title-with-line" style={{ marginBottom: 16, textAlign: 'center' }}>
            Real Experiences from Our Valued Customers
          </h2>
          
          {/* Business Name and Rating */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 700, 
              marginBottom: '12px', 
              color: 'var(--text)',
              lineHeight: 1.3
            }}>
              {businessName}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
              {renderStars(Math.round(averageRating))}
              <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginLeft: 4 }}>
                {averageRating.toFixed(1)}
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#666' }}>
              {totalReviews} Google reviews
            </p>
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '100%', overflow: 'hidden', marginBottom: 40 }} className="reviews-carousel-wrapper">
            <div
              ref={scrollContainerRef}
              style={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                overflowY: 'hidden',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                paddingBottom: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                width: '100%',
                maxWidth: '100%'
              }}
              className="reviews-scroll"
            >
              {reviews.map((review, idx) => {
                const isExpanded = expandedReviews[review.id];
                const shouldTruncate = review.reviewText.length > MAX_REVIEW_LENGTH;
                const displayText = isExpanded || !shouldTruncate 
                  ? review.reviewText 
                  : review.reviewText.substring(0, MAX_REVIEW_LENGTH);
                
                return (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="review-card"
                    style={{
                      background: '#ffffff',
                      borderRadius: '12px',
                      padding: '20px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      border: '1px solid rgba(0,0,0,0.06)',
                      flexShrink: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative'
                    }}
                  >
                    {/* Google Logo */}
                    <div style={{ 
                      position: 'absolute', 
                      top: '16px', 
                      right: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      fontSize: '16px',
                      fontWeight: 700,
                      lineHeight: 1
                    }}>
                      <span style={{ color: '#4285F4' }}>G</span>
                      <span style={{ color: '#EA4335' }}>o</span>
                      <span style={{ color: '#FBBC05' }}>o</span>
                      <span style={{ color: '#4285F4' }}>g</span>
                      <span style={{ color: '#34A853' }}>l</span>
                      <span style={{ color: '#EA4335' }}>e</span>
                    </div>

                    {/* Review Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, paddingRight: '70px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        flexShrink: 0,
                        background: '#f0f0f0'
                      }}>
                        <img
                          src={review.profileImage}
                          alt={review.authorName}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          marginBottom: '4px', 
                          color: 'var(--text)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {review.authorName}
                        </div>
                        <div style={{ fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                          {formatDate(review.date)}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          {renderStars(review.rating)}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="#4285F4" style={{ flexShrink: 0 }}>
                            <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p style={{
                      fontSize: '13px',
                      lineHeight: 1.6,
                      color: '#333',
                      margin: '0 0 12px 0',
                      flexGrow: 1,
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}>
                      {displayText}
                      {shouldTruncate && !isExpanded && '... '}
                      {shouldTruncate && (
                        <button
                          type="button"
                          onClick={() => toggleReviewExpansion(review.id)}
                          style={{
                            color: '#4285F4',
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'none'
                          }}
                        >
                          {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                      )}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Scroll Arrows - Hidden on mobile */}
            <button
              onClick={() => scrollReviews('left')}
              className="review-scroll-btn review-scroll-btn-left"
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scrollReviews('right')}
              className="review-scroll-btn review-scroll-btn-right"
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

        {/* Verified by Trustindex Badge
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#1a5f3f',
            color: '#ffffff',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 600
          }}>
            <span>Verified by Trustindex</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </div>
        </div> */}

        {/* Review Images Gallery */}
        {reviewImages.length > 0 && (
          <div style={{ marginTop: '40px', width: '100%' }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 700, 
              marginBottom: '20px', 
              textAlign: 'center',
              color: 'var(--text)'
            }}>
              Customer Moments
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: displayedImages.length < reviewImages.length ? '20px' : 0,
              maxWidth: '100%'
            }} className="review-images-grid">
              {displayedImages.map((imageItem, idx) => (
                <motion.div
                  key={imageItem.id || `image-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    aspectRatio: '16/9',
                    background: '#f0f0f0',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={imageItem.imageUrl}
                    alt={`Customer moment ${idx + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
            {reviewImages.length > 4 && !showAllImages && (
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => setShowAllImages(true)}
                  type="button"
                  style={{
                    padding: '12px 24px',
                    background: 'var(--brand)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--brand-2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--brand)';
                  }}
                >
                  View All Images ({reviewImages.length})
                </button>
              </div>
            )}
            {showAllImages && reviewImages.length > 4 && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '16px',
                marginTop: '20px',
                width: '100%',
                maxWidth: '100%'
              }}>
                {reviewImages.slice(4).map((imageItem, idx) => (
                  <motion.div
                    key={imageItem.id || `image-${idx + 4}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      aspectRatio: '16/9',
                      background: '#f0f0f0',
                      cursor: 'pointer',
                      width: '100%'
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={imageItem.imageUrl}
                      alt={`Customer moment ${idx + 5}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Add Review Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href={writeReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: '#ffffff',
              border: '2px solid var(--brand)',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--brand)',
              textDecoration: 'none',
              transition: 'all 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--brand)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = 'var(--brand)';
            }}
          >
            Add Review
          </a>
        </div>
      </div>

      <style>{`
        .reviews-scroll::-webkit-scrollbar {
          display: none;
        }
        .review-scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          z-index: 10;
          transition: all 0.2s;
        }
        .review-scroll-btn:hover {
          background: #f8f9fa;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .review-scroll-btn-left {
          left: 10px;
        }
        .review-scroll-btn-right {
          right: 10px;
        }
        .reviews-carousel-wrapper {
          min-width: 0;
          overflow: hidden;
        }
        .review-card {
          min-width: 280px;
          max-width: 320px;
          width: 320px;
        }
        
        @media (max-width: 1024px) {
          .review-scroll-btn {
            width: 32px;
            height: 32px;
          }
          .review-scroll-btn-left {
            left: 5px;
          }
          .review-scroll-btn-right {
            right: 5px;
          }
        }
        
        @media (max-width: 968px) {
          .review-scroll-btn {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .reviews-scroll {
            padding-left: 16px;
            padding-right: 16px;
          }
          .review-card {
            min-width: calc(100vw - 96px);
            max-width: calc(100vw - 96px);
            width: calc(100vw - 96px);
          }
          .review-images-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
          }
        }
        
        @media (max-width: 480px) {
          .review-card {
            min-width: calc(100vw - 80px);
            max-width: calc(100vw - 80px);
            width: calc(100vw - 80px);
          }
          .review-images-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        @media (max-width: 360px) {
          .review-card {
            min-width: calc(100vw - 64px);
            max-width: calc(100vw - 64px);
            width: calc(100vw - 64px);
          }
        }
      `}</style>
    </div>
  );
}