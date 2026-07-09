import { useMemo, useRef, useState } from 'react';
import { Flame, Check, X, Clock, Sparkles, Lock, Share2 } from 'lucide-react';
import { quizQuestions } from '../data/content';
import { fireConfetti } from '../lib/confetti';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  useDailyChallenge,
  formatCountdown,
  getDreamTitle,
} from '../hooks/usePassport';

type DailyChallengeProps = {
  streak: number;
  points: number;
  onComplete: (score: number) => void;
  onAddPoints: (amount: number) => void;
};

type Phase = 'locked' | 'playing' | 'finished';

export function DailyGastroChallenge({ streak, points, onComplete, onAddPoints }: DailyChallengeProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const { completedToday, lastScore, completeDaily, nextUnlockMs } = useDailyChallenge();
  const [phase, setPhase] = useState<Phase>(completedToday ? 'locked' : 'playing');
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);
  const [quickLore, setQuickLore] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const title = getDreamTitle(points);

  const questions = useMemo(() => {
    if (completedToday) return [];
    const arr = [...quizQuestions];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, 3);
  }, [completedToday]);

  const current = questions[qIndex];

  function choose(i: number) {
    if (showResult) return;
    setSelected(i);
    const isCorrect = i === current.correctIndex;
    setShowResult(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) {
      setCorrectCount((c) => c + 1);
      const btn = btnRefs.current[i];
      if (btn) {
        const rect = btn.getBoundingClientRect();
        fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 80);
      }
    } else {
      setQuickLore(current.originStory.split('.')[0] + '.');
    }
  }

  function next() {
    if (qIndex + 1 >= questions.length) {
      const finalScore = correctCount;
      completeDaily(finalScore);
      onAddPoints(finalScore * 50);
      onComplete(finalScore);
      setPhase('finished');
    } else {
      setQIndex((q) => q + 1);
      setSelected(null);
      setShowResult(null);
      setQuickLore(null);
    }
  }

  function shareScore() {
    const text = `\u{1F451} I scored ${lastScore}/3 on today's Culinary Atlas Trivia! Streak: \u{1F525} ${streak} Days. Rank: ${title.title}. Can you beat me? https://culinary-atlas.app`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <section id="daily-challenge" className="relative overflow-hidden py-20 sm:py-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson-500/8 blur-3xl" />

      <div
        ref={ref}
        className={`mx-auto max-w-2xl px-4 sm:px-6 ${visible ? 'visible' : ''} scroll-fade`}
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson-400">
            Daily Habit Loop
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Daily Gastro-Challenge
          </h2>
          <p className="mt-2 text-sm text-charcoal-300">
            3 quick questions. Come back every day to keep your streak alive.
          </p>

          {/* Streak + Countdown row */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-crimson-500/30 bg-crimson-900/20 px-4 py-2 transition-all duration-300 hover:scale-105">
              <Flame className="h-5 w-5 text-crimson-400 animate-pulse" />
              <span className="text-sm font-bold text-crimson-200">
                {streak}-Day Spice Streak
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-charcoal-800/60 px-4 py-2 transition-all duration-300 hover:scale-105">
              <Clock className="h-4 w-4 text-gold-400" />
              <span className="font-mono text-sm font-semibold text-gold-200 tabular-nums">
                {formatCountdown(nextUnlockMs)}
              </span>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="glass-strong overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-all duration-500">
          {phase === 'locked' && (
            <div className="px-6 py-12 text-center sm:px-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-charcoal-800 shadow-lg">
                <Lock className="h-8 w-8 text-gold-400" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-white">
                Today's Challenge Complete!
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm text-charcoal-300">
                You scored <span className="font-bold text-gold-300">{lastScore}/3</span> today.
                Your streak is safe. Come back when the timer hits zero.
              </p>

              {/* Share */}
              <button
                onClick={shareScore}
                className={`mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 active:scale-95 ${
                  copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gold-gradient text-charcoal-900 hover:scale-105'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied to clipboard!
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4" />
                    Share Score
                  </>
                )}
              </button>

              {/* Countdown display */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-charcoal-800/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                  Next challenge unlocks in
                </p>
                <p className="mt-2 font-mono text-3xl font-bold text-gold-300 tabular-nums">
                  {formatCountdown(nextUnlockMs)}
                </p>
              </div>
            </div>
          )}

          {phase === 'playing' && current && (
            <div className="px-5 py-6 sm:px-8 sm:py-8">
              {/* Progress */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                  Quick Question {qIndex + 1} / 3
                </span>
                <div className="flex gap-1.5">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
                        i < qIndex ? 'bg-gold-400' : i === qIndex ? 'bg-gold-500' : 'bg-charcoal-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
                {current.prompt}
              </h3>

              {current.image && (
                <div className="mt-3 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={current.image}
                    alt="Quiz visual"
                    className="h-40 w-full object-cover sm:h-52"
                  />
                </div>
              )}

              {/* Options */}
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {current.options.map((opt, i) => {
                  const isCorrect = i === current.correctIndex;
                  const isSelected = i === selected;
                  let cls =
                    'border-white/10 bg-charcoal-800/60 text-charcoal-100 hover:border-gold-500/40 hover:bg-charcoal-800 hover:scale-[1.02]';
                  if (showResult) {
                    if (isCorrect)
                      cls = 'border-emerald-500/60 bg-emerald-900/40 text-emerald-100';
                    else if (isSelected)
                      cls = 'border-crimson-500/60 bg-crimson-900/40 text-crimson-100';
                    else cls = 'border-white/5 bg-charcoal-900/40 text-charcoal-400';
                  }
                  return (
                    <button
                      key={i}
                      ref={(el) => (btnRefs.current[i] = el)}
                      onClick={() => choose(i)}
                      disabled={!!showResult}
                      className={`group flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${cls} ${
                        !showResult ? 'active:scale-[0.98]' : ''
                      }`}
                    >
                      <span>{opt}</span>
                      {showResult && isCorrect && (
                        <Check className="h-5 w-5 shrink-0 text-emerald-400" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <X className="h-5 w-5 shrink-0 text-crimson-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {showResult && (
                <div
                  className={`mt-4 animate-slide-down rounded-2xl border p-4 transition-all duration-300 ${
                    showResult === 'correct'
                      ? 'border-emerald-500/40 bg-emerald-900/20'
                      : 'border-crimson-500/40 bg-crimson-900/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {showResult === 'correct' ? (
                      <>
                        <Check className="h-5 w-5 text-emerald-400" />
                        <span className="font-display text-lg font-bold text-emerald-200">
                          Correct! +50 Dream Points
                        </span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5 text-crimson-400" />
                        <span className="font-display text-lg font-bold text-crimson-200">
                          Quick Lore
                        </span>
                      </>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-100">
                    {showResult === 'correct'
                      ? current.fact
                      : quickLore ?? current.originStory}
                  </p>

                  <button
                    onClick={next}
                    className="btn-gold mt-4 flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    {qIndex + 1 >= questions.length ? 'See Results' : 'Next Question'}
                    <span aria-hidden>&rarr;</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {phase === 'finished' && (
            <div className="px-6 py-12 text-center sm:px-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient shadow-lg shadow-gold-900/40">
                <Flame className="h-8 w-8 text-charcoal-900" />
              </div>
              <h3 className="mt-6 font-display text-3xl font-bold text-white">
                {correctCount}/3 Correct!
              </h3>
              <p className="mt-2 text-sm text-charcoal-300">
                {correctCount === 3
                  ? 'Flawless! Your palate is legendary.'
                  : correctCount >= 2
                    ? 'A worthy foodie. The flavors bow to you.'
                    : 'Every legend starts somewhere. Come back tomorrow!'}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-crimson-500/30 bg-crimson-900/20 px-4 py-2">
                  <Flame className="h-4 w-4 text-crimson-400" />
                  <span className="text-sm font-bold text-crimson-200">
                    {streak}-Day Spice Streak
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-900/20 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-gold-400" />
                  <span className="text-sm font-bold text-gold-200">
                    +{correctCount * 50} Dream Points
                  </span>
                </div>
              </div>

              {/* Share Score */}
              <button
                onClick={shareScore}
                className={`mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 active:scale-95 ${
                  copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gold-gradient text-charcoal-900 hover:scale-105'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied! Paste it anywhere.
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4" />
                    Share Score
                  </>
                )}
              </button>
              <p className="mt-2 text-xs text-charcoal-400">
                Copies a stylized snippet for WhatsApp & socials.
              </p>

              {/* Lock notice */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-charcoal-800/40 p-4">
                <div className="flex items-center justify-center gap-2 text-charcoal-300">
                  <Lock className="h-4 w-4 text-gold-400" />
                  <span className="text-sm font-semibold">
                    Next challenge in {formatCountdown(nextUnlockMs)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
