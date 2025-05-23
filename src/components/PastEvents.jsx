import { past } from "../data/events";
import { useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function PastEvents() {
  const { language } = useLanguage();
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Combined array with existing past events plus 6 demo events
  const allPastEvents = [
    ...past,
    // Demo events (reusing existing images)
    { id: 14, title: "Sushi Making Workshop", titleJp: "寿司作りワークショップ", img: past[0].img },
    { id: 15, title: "Japanese Film Festival", titleJp: "日本映画祭", img: past[1].img },
    { id: 16, title: "Karaoke Night", titleJp: "カラオケナイト", img: past[2].img },
    { id: 17, title: "Calligraphy Class", titleJp: "書道教室", img: past[0].img },
    { id: 18, title: "Anime Marathon", titleJp: "アニメマラソン", img: past[1].img },
    { id: 19, title: "Cultural Exchange", titleJp: "文化交流", img: past[2].img },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-12 bg-white">
      <h2 className="mb-8 text-center text-3xl font-semibold text-black">
        {language === 'en' ? 'Past Events' : '過去のイベント'}
      </h2>

      <div className="relative mx-auto max-w-4xl px-4">
        {/* Navigation buttons */}
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-uwjsa"
          aria-label="Previous events"
        >
          ←
        </button>
        
        {/* OUTER scrolling frame - limited to showing 3 cards */}
        <div 
          ref={scrollRef}
          className="w-full overflow-x-auto scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {/* INNER strip */}
          <div className="flex gap-6 pb-4 w-max">
            {allPastEvents.map((p, index) => (
              <figure
                key={p.id}
                className="shrink-0 w-64 text-center snap-center group"
                style={{ 
                  transition: "all 0.3s ease", 
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={p.img}
                    alt={language === 'en' ? p.title : p.titleJp || p.title}
                    className="h-64 w-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <figcaption className="mt-3 text-base font-medium text-gray-800 group-hover:text-uwjsa transition-colors duration-300">
                  {language === 'en' ? p.title : p.titleJp || p.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-uwjsa"
          aria-label="Next events"
        >
          →
        </button>
      </div>
    </section>
  );
}
