import { useEffect, useState } from 'react';
import { Flame, Globe2, Trophy, Menu, X, Compass, Crown, Sparkles } from 'lucide-react';
import { getDreamTitle } from '../hooks/usePassport';

type HeaderProps = {
  progress: number;
  tastedCount: number;
  totalCities: number;
  streak: number;
  points: number;
  onHome: () => void;
  onOpenLeaderboard: () => void;
};

export function Header({
  progress,
  tastedCount,
  totalCities,
  streak,
  points,
  onHome,
  onOpenLeaderboard,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const title = getDreamTitle(points);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-2xl shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <button
            onClick={onHome}
            className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02] active:scale-95"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gold-gradient shadow-lg shadow-gold-900/40 transition-transform duration-700 group-hover:rotate-180">
              <Compass className="h-5 w-5 text-charcoal-900" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Culinary Atlas
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-400/80">
                Explore · Taste · Conquer
              </span>
            </div>
          </button>

          {/* Passport progress + Dream Points — desktop */}
          <div className="hidden flex-1 items-center justify-center gap-3 lg:flex">
            <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-charcoal-800/60 px-4 py-2 transition-all duration-300 hover:scale-105">
              <Globe2 className="h-4 w-4 text-gold-400" />
              <div className="flex items-center gap-2.5">
                <div className="h-1.5 w-28 overflow-hidden rounded-full bg-charcoal-600">
                  <div
                    className="h-full rounded-full bg-gold-gradient transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="whitespace-nowrap text-xs font-semibold text-charcoal-100">
                  {tastedCount}/{totalCities} capitals
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-crimson-500/30 bg-crimson-900/20 px-3 py-2 transition-all duration-300 hover:scale-105">
              <Flame className="h-4 w-4 text-crimson-400 animate-pulse" />
              <span className="text-xs font-bold text-crimson-200">{streak}d streak</span>
            </div>

            {/* Dream Points / Title badge */}
            <div className="flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-900/20 px-3 py-2 transition-all duration-300 hover:scale-105" title={`${points} Dream Points`}>
              <span className="text-base">{title.icon}</span>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-400/80">
                  {points} pts
                </span>
                <span className="text-xs font-bold text-gold-200">{title.title}</span>
              </div>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Dream Points badge */}
            <div className="flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-900/20 px-2.5 py-1.5 lg:hidden">
              <span className="text-sm">{title.icon}</span>
              <span className="text-xs font-bold text-gold-200">{points}</span>
            </div>

            <button
              onClick={onOpenLeaderboard}
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-charcoal-800/60 px-4 py-2 text-xs font-semibold text-charcoal-100 transition-all duration-300 hover:border-gold-500/40 hover:text-gold-300 hover:scale-105 active:scale-95 sm:flex"
            >
              <Trophy className="h-4 w-4 text-gold-400" />
              Leaderboard
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-charcoal-800/60 text-charcoal-100 transition-all duration-300 hover:text-gold-300 hover:scale-105 active:scale-95 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="animate-slide-down space-y-3 pb-4 lg:hidden">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-charcoal-800/60 px-4 py-3 transition-all duration-300">
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-gold-400" />
                <span className="text-xs font-semibold text-charcoal-100">Passport</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-charcoal-600">
                  <div
                    className="h-full rounded-full bg-gold-gradient"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-charcoal-100">
                  {tastedCount}/{totalCities}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-gold-500/30 bg-gold-900/20 px-4 py-3">
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-gold-400" />
                <span className="text-xs font-semibold text-gold-200">{title.title}</span>
              </div>
              <span className="flex items-center gap-1 text-xs font-bold text-gold-300">
                <Sparkles className="h-3 w-3" />
                {points} Dream Points
              </span>
            </div>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenLeaderboard();
              }}
              className="flex w-full items-center gap-2 rounded-xl border border-white/10 bg-charcoal-800/60 px-4 py-3 text-sm font-semibold text-charcoal-100 transition-all duration-300 hover:border-gold-500/40 hover:text-gold-300 active:scale-95"
            >
              <Trophy className="h-4 w-4 text-gold-400" />
              Global Foodie Leaderboard
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
