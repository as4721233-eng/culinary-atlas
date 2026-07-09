import { Radio } from 'lucide-react';

export function LiveFeedButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group fixed bottom-5 right-5 z-30 flex items-center gap-2.5 rounded-full bg-crimson-gradient px-5 py-3.5 text-sm font-bold text-white shadow-2xl shadow-crimson-900/50 transition-all duration-300 hover:scale-110 hover:shadow-crimson-900/70 active:scale-90 sm:bottom-6 sm:right-6"
      aria-label="Open Live Street Feed"
    >
      <span className="absolute inset-0 rounded-full bg-crimson-500/60 animate-pulse-ring" />
      <Radio className="relative h-5 w-5 animate-pulse transition-transform duration-300 group-hover:rotate-12" />
      <span className="relative hidden sm:inline transition-transform duration-300 group-hover:tracking-wider">Live Street Feed</span>
      <span className="relative sm:hidden">Live</span>
      <span className="relative ml-1 hidden rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:bg-white/30 sm:inline">
        Tap to play
      </span>
    </button>
  );
}
