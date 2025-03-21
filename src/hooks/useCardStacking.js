import { useEffect, useRef } from 'react';

/**
 * Custom hook for creating a card stacking effect on scroll
 * @param {boolean} isEnabled - Whether the stacking effect should be applied (e.g., only on mobile)
 * @param {object} options - Configuration options
 * @param {number} options.spaceBetween - Vertical space between cards in vh units (default: 30)
 * @param {number} options.scaleAmount - How much to scale down cards when stacked (default: 0.05)
 * @param {string} options.cardSelector - CSS selector for cards within container (default: '.card')
 * @param {string} options.innerSelector - CSS selector for inner card content (default: '.card-inner')
 * @returns {object} - Refs for the container and cards
 */
export const useCardStacking = (isEnabled, options = {}) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  
  const {
    spaceBetween = 30,
    scaleAmount = 0.05,
    cardSelector = '.card',
    innerSelector = '.card-inner'
  } = options;
  
  useEffect(() => {
    if (!isEnabled) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    // Get cards either from refs or from DOM if refs aren't populated
    let cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) {
      cards = Array.from(container.querySelectorAll(cardSelector));
    }
    
    if (cards.length === 0) return;
    
    // Important: Reverse the array so first card has highest z-index
    // This ensures cards stack ON TOP of each other
    const reversedCards = [...cards].reverse();
    
    // Set initial styles
    reversedCards.forEach((card, index) => {
      const zIndex = 1000 - index; // Start with high z-index for first card (will be on top)
      card.style.position = 'sticky';
      card.style.top = '20px';
      card.style.zIndex = zIndex;
      card.style.marginBottom = `40px`;
      
      const cardInner = card.querySelector(innerSelector);
      if (cardInner) {
        cardInner.style.transition = 'transform 0.2s ease-out';
        // Reset any existing transforms
        cardInner.style.transform = 'none';
      }
    });
    
    // Last card needs less space after it
    if (reversedCards.length > 0) {
      reversedCards[reversedCards.length - 1].style.marginBottom = '10vh';
    }
    
    // Setup scroll observers
    const cleanupFns = [];
    
    for (let i = 0; i < reversedCards.length - 1; i++) {
      const currentCard = reversedCards[i];
      const nextCard = reversedCards[i + 1];
      const currentCardInner = currentCard.querySelector(innerSelector);
      
      const handleScroll = () => {
        if (!nextCard || !currentCardInner) return;
        
        const nextCardRect = nextCard.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how far the next card has entered the viewport
        const visibleAmount = (viewportHeight - nextCardRect.top) / viewportHeight;
        const clampedVisibility = Math.max(0, Math.min(1, visibleAmount * 1.5)); // Multiply for faster effect
        
        // Scale down current card as next card appears
        currentCardInner.style.transform = `scale(${1 - clampedVisibility * scaleAmount})`;
      };
      
      window.addEventListener('scroll', handleScroll);
      cleanupFns.push(() => window.removeEventListener('scroll', handleScroll));
      
      // Initial calculation
      handleScroll();
    }
    
    return () => {
      // Clean up all event listeners
      cleanupFns.forEach(fn => fn());
    };
  }, [isEnabled, spaceBetween, scaleAmount, cardSelector, innerSelector]);
  
  return { containerRef, cardsRef };
};