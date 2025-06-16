import { past } from "../data/events";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function PastEvents() {
  const { language } = useLanguage();
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Create a very large array for infinite scrolling (repeat events many times)
  const infiniteEvents = Array(20).fill(past).flat();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll effect for continuous movement (disabled on mobile)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling || isMobile) return;

    const autoScroll = () => {
      if (scrollContainer && isAutoScrolling && !isMobile) {
        scrollContainer.scrollLeft += 1; // Slow continuous scroll

        // Reset to beginning when we reach the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 50); // Adjust speed here (lower = faster)

    return () => clearInterval(interval);
  }, [isAutoScrolling, isMobile]);

  // Pause auto-scroll on hover (only on desktop)
  const handleMouseEnter = () => {
    if (!isMobile) setIsAutoScrolling(false);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setIsAutoScrolling(true);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      if (!isMobile) setIsAutoScrolling(false); // Pause auto-scroll only on desktop
      scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
      // Resume auto-scroll after a delay (only on desktop)
      if (!isMobile) {
        setTimeout(() => setIsAutoScrolling(true), 2000);
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      if (!isMobile) setIsAutoScrolling(false); // Pause auto-scroll only on desktop
      scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
      // Resume auto-scroll after a delay (only on desktop)
      if (!isMobile) {
        setTimeout(() => setIsAutoScrolling(true), 2000);
      }
    }
  };

  const handleEventClick = (event) => {
    if (event.instagramUrl) {
      window.open(event.instagramUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="w-full py-12 bg-white">
      <h2 className="mb-8 text-center text-3xl font-semibold text-black">
        {language === 'en' ? 'Past Events' : '過去のイベント'}
      </h2>

      <div
        className="relative mx-auto max-w-4xl px-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Navigation buttons (hidden on mobile) */}
        {!isMobile && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-uwjsa"
            aria-label="Previous events"
          >
            ←
          </button>
        )}

        {/* OUTER scrolling frame - infinite scroll */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {/* INNER strip */}
          <div className="flex gap-4 pb-4 w-max">
            {infiniteEvents.map((p, index) => (
              <figure
                key={`${p.id}-${Math.floor(index / past.length)}`}
                className={`shrink-0 w-64 text-center snap-center group ${
                  p.instagramUrl ? 'cursor-pointer' : ''
                }`}
                onClick={() => handleEventClick(p)}
                style={{
                  transition: "all 0.3s ease",
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={p.img}
                    alt={language === 'en' ? p.title : p.titleJp || p.title}
                    className="h-48 w-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.instagramUrl && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-2">
                        <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <figcaption className="mt-3 space-y-1">
                  <p className="text-sm text-gray-500 font-medium">{p.date}</p>
                  <p className="text-base font-medium text-gray-800 group-hover:text-uwjsa transition-colors duration-300">
                    {language === 'en' ? p.title : p.titleJp || p.title}
                  </p>
                  {p.instagramUrl && (
                    <p className="text-xs text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view on Instagram
                    </p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {!isMobile && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-uwjsa"
            aria-label="Next events"
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}
