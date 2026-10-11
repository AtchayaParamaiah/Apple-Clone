import { useState, useEffect, useRef } from "react";

const shows = [
  {
    name: "Monarch: Legacy of Monsters",
    genre: "Adventure",
    description: "A new threat will surface.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/ubyMKBPSumJZe4z6Nn1A2A/1250x668sr.jpg",
  },
  {
    name: "Slow Horses",
    genre: "Thriller",
    description: "Emmy® Award Winner",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/x5JjmiSD75wN12-HmmZRcg/1250x668sr.jpg",
  },
  {
    name: "Hijack",
    genre: "Thriller",
    description: "Who can you trust when it's all on the line?",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/810FL_VK0SEREgoMM3eKtA/1250x668sr.jpg",
  },
  {
    name: "Pluribus",
    genre: "Drama",
    description: "Happiness is a state of mind.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/S9dLxU_nCvhomqGnI3-d_g/1250x668sr.jpg",
  },
  {
    name: "Shrinking",
    genre: "Comedy",
    description: "Getting it together. Together.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/OmAEHiPsBUBSNjqgm9ItjA/1250x668sr.jpg",
  },
  {
    name: "F1 The Movie",
    genre: "Action",
    description: "Let's ride.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/zLbkVwwHwe8I5EtuXc8wWg/1250x668sr.jpg",
  },
  {
    name: "Severance",
    genre: "Thriller",
    description: "Winner of 8 Emmy® Awards",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/yLaIuyo68a7gtcjngkHQiQ/1250x668sr.jpg",
  },
  {
    name: "Your Friends & Neighbours",
    genre: "Drama",
    description: "Is it a crime to want more?",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/DECsbtpVyiT0zpSeop88gg/1250x668sr.jpg",
  },
  {
    name: "The Studio",
    genre: "Comedy",
    description: "Winner of 13 Emmy® Awards",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/5Qz4uhl7ZfeRONLyHtOGfw/1250x668sr.jpg",
  },
];

export default function Stream() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);

  // Automatically change slide every 5 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % shows.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // Scroll to the active slide
  useEffect(() => {
    const slider = sliderRef.current;
    const slide = slider?.children[activeIndex];

    if (slider && slide) {
      slider.scrollTo({
        left: slide.offsetLeft - slider.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="w-full overflow-hidden bg-gray-100 py-1 pb-5 md:py-1 md:pb-5">
      

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[6vw] md:gap-5 md:px-[1vw]"
        style={{ scrollbarWidth: "none" }}
      >
        {shows.map((show, index) => (
          <article
            key={show.name}
            className="group relative h-[300px] w-[88vw] flex-none snap-start overflow-hidden rounded-xl bg-gray-900 shadow-2xl md:h-[430px] md:w-[80vw] lg:h-[500px] lg:w-[75vw]"
          >
            <img
              src={show.image}
              alt={show.name}
              loading={index < 2 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

            {/* Show details */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-between gap-5 p-5 text-white sm:p-7 md:flex-row md:items-end md:p-10">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gray-300 md:text-sm">
                  {show.genre}
                </p>

                <h3 className="text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
                  {show.name}
                </h3>

                <p className="mt-3 text-sm text-gray-200 sm:text-base md:text-lg">
                  {show.description}
                </p>
              </div>

              <button
                type="button"
                className="shrink-0 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Stream now
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Navigation dots and playback control */}
      <div className="mt-8 flex items-center justify-center gap-5">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {shows.map((show, index) => (
            <button
              key={show.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${show.name}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-white"
                  : "w-2.5 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Start / Pause */}
        <button
          type="button"
          onClick={() => setIsPlaying((playing) => !playing)}
          aria-label={isPlaying ? "Pause slideshow" : "Start slideshow"}
          title={isPlaying ? "Pause slideshow" : "Start slideshow"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-600 bg-gray-800 text-white transition hover:bg-gray-700"
        >
          {isPlaying ? (
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M7 4.8c0-.8.9-1.3 1.6-.9l11 6.8a1.5 1.5 0 0 1 0 2.6l-11 6.8c-.7.4-1.6-.1-1.6-.9V4.8Z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}