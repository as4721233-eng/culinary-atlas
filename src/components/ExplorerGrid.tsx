import { Heart, Check, ArrowUpRight, MapPin } from 'lucide-react';
import { cities } from '../data/cities';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getCityStatus, type PassportState } from '../hooks/usePassport';

type ExplorerGridProps = {
  passport: PassportState;
  onToggleWantToGo: (id: string) => void;
  onToggleTastedIt: (id: string) => void;
  onSelectCity: (id: string) => void;
};

// Card sizes for asymmetrical masonry feel
const SIZE_CLASSES = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-1',
];

export function ExplorerGrid({
  passport,
  onToggleWantToGo,
  onToggleTastedIt,
  onSelectCity,
}: ExplorerGridProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="explorer" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`mb-12 scroll-fade ${visible ? 'visible' : ''}`}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
          The Sensory Explorer
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">
          Iconic Culinary Hubs
        </h2>
        <p className="mt-3 max-w-xl text-charcoal-300">
          Tap a destination to descend into its flavors, lore, and legends. Mark what you crave and
          what you've conquered — your passport fills as you go.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[220px]">
        {cities.map((city, i) => {
          const status = getCityStatus(passport, city.id);
          const size = SIZE_CLASSES[i % SIZE_CLASSES.length];
          return (
            <button
              key={city.id}
              onClick={() => onSelectCity(city.id)}
              className={`group relative overflow-hidden min-h-[250px] rounded-3xl border border-white/5 text-left transition-all duration-500 hover:border-gold-500/30 ${size}`}
            >
             
              {/* Image */}
               <img 
  src={city.cardImage} 
  alt={city.name} 
  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" 
                /> 
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent transition-opacity duration-500 group-hover:from-charcoal-950" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-charcoal-950/60" />

              {/* Sensory tags */}
              <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
                {city.sensoryTags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-charcoal-950/70 px-2.5 py-1 text-[10px] font-medium text-gold-200 backdrop-blur transition-colors group-hover:bg-gold-500/20 group-hover:text-gold-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Toggle buttons */}
              <div className="absolute right-4 top-4 flex gap-2">
                <ToggleBtn
                  active={status.wantToGo}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWantToGo(city.id);
                  }}
                  activeClass="bg-crimson-500 text-white shadow-lg shadow-crimson-900/50"
                  label="Want to Go"
                >
                  <Heart className={`h-4 w-4 ${status.wantToGo ? 'fill-current' : ''}`} />
                </ToggleBtn>
                <ToggleBtn
                  active={status.tastedIt}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleTastedIt(city.id);
                  }}
                  activeClass="bg-emerald-500 text-white shadow-lg shadow-emerald-900/50"
                  label="Tasted It"
                >
                  <Check className={`h-4 w-4 ${status.tastedIt ? 'stroke-[3]' : ''}`} />
                </ToggleBtn>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1.5 text-xs text-gold-300">
                  <MapPin className="h-3 w-3" />
                  {city.country} · {city.region}
                </div>
                <h3 className="mt-1.5 font-display text-2xl font-bold text-white sm:text-3xl">
                  {city.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-charcoal-200">{city.tagline}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-gold-400 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  Explore deep-dive
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ToggleBtn({
  active,
  onClick,
  activeClass,
  label,
  children,
}: {
  active: boolean;
  onClick: (e: React.MouseEvent) => void;
  activeClass: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur transition-all duration-300 active:scale-90 ${
        active
          ? activeClass
          : 'border-white/15 bg-charcoal-950/60 text-white hover:border-white/40'
      }`}
    >
      {children}
    </button>
  );
}
