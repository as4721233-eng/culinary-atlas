import { useEffect, useState } from 'react';
import { X, Heart, Share2, MessageCircle, MapPin, Play, ChevronUp, ChevronDown } from 'lucide-react';
import { shorts } from '../data/content';

type ShortsPlayerProps = {
  open: boolean;
  onClose: () => void;
};

export function ShortsPlayer({ open, onClose }: ShortsPlayerProps) {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') setIndex((i) => Math.min(i + 1, shorts.length - 1));
      if (e.key === 'ArrowUp') setIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;
  const current = shorts[index];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fade-in">
      {/* Phone frame */}
      <div className="relative h-[100svh] w-full max-w-[440px] overflow-hidden bg-charcoal-950 sm:h-[92svh] sm:rounded-3xl sm:border sm:border-white/10">
        {/* Shorts stack */}
        <div className="flex h-full flex-col">
          {/* Top bar */}
          <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-4 py-4">
            <span className="flex items-center gap-2 text-sm font-bold text-white">
              <span className="flex h-2 w-2 rounded-full bg-crimson-500 animate-pulse" />
              Live Street Feed
            </span>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal-950/60 text-white backdrop-blur transition-colors hover:bg-crimson-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Video surface */}
          <div className="relative flex-1 overflow-hidden">
            {/* Thumbnail / "video" */}
            <img
              src={current.thumbnail}
              alt={current.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/50 to-transparent" />

            {/* Tap-to-play hint */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-transform active:scale-90">
                <Play className="h-7 w-7 fill-white text-white" />
              </div>
            </div>

            {/* Right action rail */}
            <div className="absolute bottom-28 right-3 z-10 flex flex-col items-center gap-5">
              <ActionBtn
                onClick={() => setLiked((l) => ({ ...l, [current.id]: !l[current.id] }))}
                active={liked[current.id]}
                activeColor="text-crimson-400"
                label={current.likes}
              >
                <Heart className={`h-7 w-7 ${liked[current.id] ? 'fill-current' : ''}`} />
              </ActionBtn>
              <ActionBtn label="842">
                <MessageCircle className="h-7 w-7" />
              </ActionBtn>
              <ActionBtn label="Share">
                <Share2 className="h-7 w-7" />
              </ActionBtn>
            </div>

            {/* Bottom caption */}
            <div className="absolute bottom-24 left-4 right-20 z-10">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gold-300">
                <MapPin className="h-3 w-3" />
                {current.city}
              </div>
              <h3 className="mt-1 font-display text-lg font-bold leading-tight text-white">
                {current.title}
              </h3>
              <p className="mt-1 text-sm text-charcoal-200">{current.caption}</p>
              <p className="mt-2 text-xs text-charcoal-400">
                by <span className="font-semibold text-gold-300">{current.chef}</span>
              </p>
            </div>
          </div>

          {/* Nav arrows */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            <NavBtn
              disabled={index === 0}
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
            >
              <ChevronUp className="h-5 w-5" />
            </NavBtn>
            <span className="text-xs font-semibold text-charcoal-300">
              {index + 1} / {shorts.length}
            </span>
            <NavBtn
              disabled={index === shorts.length - 1}
              onClick={() => setIndex((i) => Math.min(shorts.length - 1, i + 1))}
            >
              <ChevronDown className="h-5 w-5" />
            </NavBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionBtn({
  children,
  label,
  active,
  activeColor,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  active?: boolean;
  activeColor?: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1">
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-charcoal-950/50 text-white backdrop-blur transition-all active:scale-90 ${
          active ? activeColor : ''
        }`}
      >
        {children}
      </span>
      <span className="text-[11px] font-semibold text-white drop-shadow">{label}</span>
    </button>
  );
}

function NavBtn({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-charcoal-950/60 text-white backdrop-blur transition-all active:scale-90 disabled:opacity-30"
    >
      {children}
    </button>
  );
}
