import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, MapPin } from 'lucide-react';
import { heroSlides } from '../data/content';

export function Hero({ onExplore }: { onExplore: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-out ${
              i === index ? 'scale-110' : 'scale-100'
            }`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/40 to-charcoal-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-charcoal-950/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            {heroSlides[index].kicker}
          </span>
        </div>

        <h1
          className="mt-6 max-w-5xl animate-fade-in-up font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.4s' }}
        >
          Culinary Atlas
          <span className="mt-2 block text-gold-gradient italic">
            Unearth the Legends Behind
          </span>
          <span className="block">the World's Greatest Flavors</span>
        </h1>

        <p
          className="mt-6 max-w-2xl animate-fade-in-up text-base text-charcoal-200 sm:text-lg"
          style={{ animationDelay: '0.6s' }}
        >
          {heroSlides[index].subtitle}
        </p>

        <p
          className="mt-2 max-w-2xl text-sm font-medium text-gold-300/80"
          style={{ animationDelay: '0.8s' }}
        >
          No ticket required. Travel the world through flavor right from your screen.
        </p>

        <div
          className="mt-10 flex animate-fade-in-up flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: '0.8s' }}
        >
          <button
            onClick={onExplore}
            className="btn-gold group flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide"
          >
            Begin the Feast
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
          <div className="flex items-center gap-2 text-xs text-charcoal-300">
            <MapPin className="h-3.5 w-3.5 text-gold-400" />
            {heroSlides.length} legendary food capitals await — from Bangkok to Brooklyn, Lima to Lagos
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-28 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-8 bg-gold-400' : 'w-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-charcoal-400">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-charcoal-600 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
}
