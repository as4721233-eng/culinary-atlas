import { useEffect } from 'react';
import { Trophy, X, Crown, Flame } from 'lucide-react';

type Entry = {
  id: string;
  player_name: string;
  avatar: string;
  score: number;
  streak: number;
  is_seeded: boolean;
};

type LeaderboardModalProps = {
  open: boolean;
  onClose: () => void;
  entries: Entry[];
  loading: boolean;
};

const TITLES = [
  'Grand Master Chef',
  'Spice Sage',
  'Mole Maestro',
  'Umami Hunter',
  'Flavor Nomad',
  'Dough Whisperer',
  'Spice Caravan',
  'Heat Seeker',
];

const RANK_COLORS = [
  'from-gold-300 to-gold-600 text-charcoal-900',
  'from-charcoal-200 to-charcoal-400 text-charcoal-900',
  'from-amber-600 to-amber-800 text-white',
];

export function LeaderboardModal({ open, onClose, entries, loading }: LeaderboardModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="glass-strong relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-charcoal-800 to-charcoal-900 px-6 py-5">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-gradient opacity-20 blur-3xl" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-gradient shadow-lg shadow-gold-900/40">
                <Trophy className="h-6 w-6 text-charcoal-900" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white">
                  Global Foodie Leaderboard
                </h2>
                <p className="text-xs text-charcoal-300">
                  Compete for the title of Grand Master Chef
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-charcoal-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="max-h-[60vh] overflow-y-auto px-3 py-3">
          {loading ? (
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 animate-pulse rounded-2xl bg-charcoal-800/60"
                  style={{ animationDelay: `${i * 80}ms` }}
                />
              ))}
            </div>
          ) : (
            <ul className="space-y-1.5">
              {entries.map((e, i) => {
                const rank = i + 1;
                const title = TITLES[i % TITLES.length];
                const isPodium = rank <= 3;
                return (
                  <li
                    key={e.id}
                    className={`group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all ${
                      isPodium
                        ? 'bg-charcoal-800/70 ring-1 ring-gold-500/20'
                        : 'hover:bg-charcoal-800/40'
                    }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {/* Rank */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                        isPodium
                          ? `bg-gradient-to-br ${RANK_COLORS[rank - 1]}`
                          : 'bg-charcoal-700 text-charcoal-300'
                      }`}
                    >
                      {rank === 1 ? <Crown className="h-5 w-5" /> : rank}
                    </div>

                    {/* Avatar */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-charcoal-700 to-charcoal-800 text-sm font-bold text-gold-300 ring-1 ring-white/5">
                      {e.avatar}
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-sm font-semibold text-white">
                          {e.player_name}
                        </span>
                        {e.is_seeded && (
                          <span className="rounded-full bg-gold-500/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold-400">
                            Legend
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-charcoal-400">{title}</span>
                    </div>

                    {/* Score + streak */}
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="font-display text-sm font-bold text-gold-300">
                        {e.score.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-crimson-300">
                        <Flame className="h-3 w-3" /> {e.streak}d
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-white/5 px-6 py-3 text-center text-[11px] text-charcoal-400">
          Finish the Daily Gastro-Quiz to post your score and climb the ranks.
        </div>
      </div>
    </div>
  );
}
