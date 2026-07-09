import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Heart,
  Check,
  MapPin,
  Flame,
  Utensils,
  ScrollText,
  Crown,
  Sparkles,
} from 'lucide-react';
import type { City } from '../data/cities';
import { useScrollReveal } from '../hooks/useScrollReveal';

type CityDetailProps = {
  city: City;
  wantToGo: boolean;
  tastedIt: boolean;
  onToggleWantToGo: () => void;
  onToggleTastedIt: () => void;
  onBack: () => void;
};

type Tab = 'specialties' | 'lore' | 'legends';

const FLAVOR_LABELS: { key: keyof City['flavorProfile']; label: string; color: string }[] = [
  { key: 'spice', label: 'Spice Level', color: 'from-crimson-500 to-crimson-700' },
  { key: 'umami', label: 'Umami', color: 'from-amber-400 to-amber-600' },
  { key: 'richness', label: 'Richness', color: 'from-gold-300 to-gold-600' },
  { key: 'tanginess', label: 'Tanginess', color: 'from-emerald-400 to-emerald-600' },
];

export function CityDetail({
  city,
  wantToGo,
  tastedIt,
  onToggleWantToGo,
  onToggleTastedIt,
  onBack,
}: CityDetailProps) {
  const [tab, setTab] = useState<Tab>('specialties');
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ once: true });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTab('specialties');
  }, [city.id]);

  return (
    <div className="min-h-screen bg-charcoal-950 pt-16">
      {/* Video tour */}
      <section className="relative w-full overflow-hidden">
        <div className="relative aspect-video w-full max-h-[70vh]">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${city.youtubeId}?rel=0&modestbranding=1`}
            title={`${city.name} culinary tour`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <button
              onClick={onBack}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-charcoal-950/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition-colors hover:border-gold-500/40 hover:text-gold-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Atlas
            </button>
            <div className="flex items-center gap-1.5 text-sm text-gold-300">
              <MapPin className="h-4 w-4" />
              {city.country} · {city.region}
            </div>
            <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-6xl">
              {city.name}
            </h1>
            <p className="mt-2 max-w-2xl font-display text-lg italic text-gold-200">
              {city.tagline}
            </p>

            {/* Toggle buttons */}
            <div className="mt-5 flex gap-3">
              <PassportToggle
                active={wantToGo}
                onClick={onToggleWantToGo}
                activeClass="bg-crimson-500 text-white border-crimson-400 shadow-lg shadow-crimson-900/40"
                icon={<Heart className={`h-4 w-4 ${wantToGo ? 'fill-current' : ''}`} />}
                label={wantToGo ? 'On your list' : 'Want to Go'}
              />
              <PassportToggle
                active={tastedIt}
                onClick={onToggleTastedIt}
                activeClass="bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-900/40"
                icon={<Check className={`h-4 w-4 ${tastedIt ? 'stroke-[3]' : ''}`} />}
                label={tastedIt ? 'Tasted & conquered' : 'Tasted It'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Flavor radar */}
      <section ref={ref} className="mx-auto max-w-5xl px-4 py-12 sm:px-8">
        <div className={`scroll-fade ${visible ? 'visible' : ''}`}>
          <p className="text-base leading-relaxed text-charcoal-200 sm:text-lg">{city.longDescription}</p>
        </div>

        {/* Flavor radar */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-charcoal-900/60 p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-gold-400" />
            <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
              Flavor Profile Tracker
            </h2>
          </div>
          <p className="mt-1 text-sm text-charcoal-400">
            The signature sensory signature of {city.name} cuisine.
          </p>
          <div className="mt-6 space-y-5">
            {FLAVOR_LABELS.map((f, i) => {
              const value = city.flavorProfile[f.key];
              return (
                <div key={f.key}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-charcoal-100">{f.label}</span>
                    <span className="font-display text-sm font-bold text-gold-300">{value}/100</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-charcoal-800">
                    <div
                      className={`h-full origin-left rounded-full bg-gradient-to-r ${f.color}`}
                      style={{
                        width: `${value}%`,
                        animation: `growBar 1.2s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s both`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sensory tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {city.sensoryTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gold-500/20 bg-gold-500/10 px-3 py-1.5 text-xs font-medium text-gold-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-8">
        <div className="sticky top-16 z-20 -mx-4 mb-8 border-b border-white/10 bg-charcoal-950/80 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:px-2">
          <div className="flex gap-1 sm:gap-2">
            <TabBtn active={tab === 'specialties'} onClick={() => setTab('specialties')} icon={<Utensils className="h-4 w-4" />}>
              <span className="hidden sm:inline">Hyper-Local </span>Specialties
            </TabBtn>
            <TabBtn active={tab === 'lore'} onClick={() => setTab('lore')} icon={<ScrollText className="h-4 w-4" />}>
              <span className="hidden sm:inline">Historical Legacy &amp; </span>Lore
            </TabBtn>
            <TabBtn active={tab === 'legends'} onClick={() => setTab('legends')} icon={<Crown className="h-4 w-4" />}>
              The Legends
            </TabBtn>
          </div>
        </div>

        <div key={tab} className="animate-fade-in-up">
          {tab === 'specialties' && <SpecialtiesTab city={city} />}
          {tab === 'lore' && <LoreTab city={city} />}
          {tab === 'legends' && <LegendsTab city={city} />}
        </div>

        {/* Fun facts */}
        <div className="mt-12 rounded-3xl border border-gold-500/20 bg-gold-500/5 p-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold-400" />
            <h3 className="font-display text-lg font-bold text-white">Taste Bites</h3>
          </div>
          <ul className="mt-3 space-y-2">
            {city.funFacts.map((fact, i) => (
              <li key={i} className="flex gap-2 text-sm text-charcoal-200">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function SpecialtiesTab({ city }: { city: City }) {
  return (
    <div className="space-y-6">
      {city.specialties.map((s, i) => (
        <article
          key={s.name}
          className="overflow-hidden rounded-3xl border border-white/10 bg-charcoal-900/60"
          style={{ animation: `fadeInUp 0.6s ${i * 0.1}s both` }}
        >
          <div className="grid sm:grid-cols-2">
            <div className="relative h-56 sm:h-full">
              <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                {s.sensoryTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-charcoal-950/70 px-2.5 py-1 text-[10px] font-medium text-gold-200 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-white">{s.name}</h3>
              <p className="mt-2 text-sm text-charcoal-200">{s.description}</p>
              <div className="mt-4 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  Origin Story
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal-100">{s.originStory}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function LoreTab({ city }: { city: City }) {
  return (
    <div className="relative space-y-6 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-gold-500/60 before:via-gold-500/20 before:to-transparent">
      {city.historicalLore.map((l, i) => (
        <div
          key={i}
          className="relative pl-12"
          style={{ animation: `fadeInUp 0.6s ${i * 0.12}s both` }}
        >
          <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 bg-charcoal-900 text-xs font-bold text-gold-300">
            {l.era.split(' ')[0]}
          </div>
          <div className="rounded-2xl border border-white/10 bg-charcoal-900/60 p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-500">
              {l.era}
            </span>
            <h3 className="mt-1 font-display text-xl font-bold text-white">{l.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-200">{l.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function LegendsTab({ city }: { city: City }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {city.legends.map((p, i) => (
        <article
          key={p.name}
          className="overflow-hidden rounded-3xl border border-white/10 bg-charcoal-900/60"
          style={{ animation: `fadeInUp 0.6s ${i * 0.12}s both` }}
        >
          <div className="relative h-48">
            <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-xs font-semibold text-gold-300">{p.era}</span>
              <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
              <p className="text-sm italic text-charcoal-300">{p.title}</p>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm leading-relaxed text-charcoal-200">{p.bio}</p>
            <div className="mt-3 border-t border-white/5 pt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-400">Legacy</span>
              <p className="mt-1 text-sm text-charcoal-100">{p.legacy}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function TabBtn({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all sm:text-sm ${
        active
          ? 'bg-gold-gradient text-charcoal-900 shadow-lg shadow-gold-900/30'
          : 'text-charcoal-300 hover:bg-white/5 hover:text-white'
      }`}
    >
      {icon}
      {children}
    </button>
  );
}

function PassportToggle({
  active,
  onClick,
  activeClass,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  activeClass: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all active:scale-95 ${
        active
          ? activeClass
          : 'border-white/15 bg-charcoal-950/60 text-white backdrop-blur hover:border-white/40'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
