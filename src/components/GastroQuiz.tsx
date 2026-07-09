import { useMemo, useRef, useState } from 'react';
import { Flame, Check, X, Sparkles, RotateCcw, Trophy, BookOpen, Share2 } from 'lucide-react';
import { quizQuestions } from '../data/content';
import { fireConfetti } from '../lib/confetti';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getDreamTitle } from '../hooks/usePassport';

type Phase = 'idle' | 'playing' | 'feedback' | 'finished';

type GastroQuizProps = {
  streak: number;
  points: number;
  onComplete: () => number;
  onSubmitScore: (name: string, score: number, streak: number) => Promise<boolean>;
  onOpenLeaderboard: () => void;
};

export function GastroQuiz({ streak, points, onComplete, onSubmitScore, onOpenLeaderboard }: GastroQuizProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [phase, setPhase] = useState<Phase>('idle');
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);
  const [newStreak, setNewStreak] = useState(streak);
  const [submitName, setSubmitName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Shuffle once per session
  const questions = useMemo(() => {
    const arr = [...quizQuestions];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, 5);
  }, [phase === 'idle']);

  const current = questions[qIndex];

  function start() {
    setPhase('playing');
    setQIndex(0);
    setCorrectCount(0);
    setSelected(null);
    setShowResult(null);
    setSubmitted(false);
  }

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
        fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 70);
      }
    }
  }

  function next() {
    if (qIndex + 1 >= questions.length) {
      const s = onComplete();
      setNewStreak(s);
      setPhase('finished');
    } else {
      setQIndex((q) => q + 1);
      setSelected(null);
      setShowResult(null);
    }
  }

  async function handleSubmit() {
    if (!submitName.trim()) return;
    setSubmitting(true);
    const ok = await onSubmitScore(submitName.trim(), correctCount * 200, newStreak);
    setSubmitting(false);
    if (ok) setSubmitted(true);
  }

  function shareScore() {
    const title = getDreamTitle(points);
    const text = `\u{1F451} I scored ${correctCount}/${questions.length} on today's Culinary Atlas Trivia! Streak: \u{1F525} ${newStreak} Days. Rank: ${title.title}. Can you beat me? https://culinary-atlas.app`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <section
      id="quiz"
      className="relative overflow-hidden py-24"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-3xl" />

      <div ref={ref} className={`mx-auto max-w-3xl px-4 sm:px-6 ${visible ? 'visible' : ''} scroll-fade`}>
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
            Daily Retention Engine
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">
            The Gastro-Quiz Arena
          </h2>
          <p className="mt-3 text-charcoal-300">
            Five questions. One streak. Earn your place among the legends.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-crimson-500/30 bg-crimson-900/20 px-4 py-2">
            <Flame className="h-5 w-5 text-crimson-400 animate-pulse" />
            <span className="text-sm font-bold text-crimson-200">
              {newStreak > 0 ? `${newStreak} Day Spice Streak` : 'Start your streak today'}
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="glass-strong overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          {phase === 'idle' && (
            <div className="px-6 py-12 text-center sm:px-12 sm:py-16">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient shadow-lg shadow-gold-900/40">
                <Sparkles className="h-8 w-8 text-charcoal-900" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-white">
                Ready to test your palate?
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-charcoal-300">
                Multiple-choice trivia and visual challenges. Correct answers flash emerald with a
                shower of confetti. Wrong answers reveal the origin story behind the dish.
              </p>
              <button onClick={start} className="btn-gold mt-8 rounded-full px-8 py-3.5 text-sm font-semibold">
                Enter the Arena
              </button>
            </div>
          )}

          {phase === 'playing' && current && (
            <div className="px-5 py-6 sm:px-8 sm:py-8">
              {/* Progress */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                  Question {qIndex + 1} / {questions.length}
                </span>
                <div className="flex gap-1.5">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-6 rounded-full transition-colors ${
                        i < qIndex ? 'bg-gold-400' : i === qIndex ? 'bg-gold-500' : 'bg-charcoal-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                {current.prompt}
              </h3>

              {current.image && (
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={current.image}
                    alt="Quiz visual"
                    className="h-48 w-full object-cover sm:h-64"
                  />
                </div>
              )}

              {/* Options */}
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {current.options.map((opt, i) => {
                  const isCorrect = i === current.correctIndex;
                  const isSelected = i === selected;
                  let cls =
                    'border-white/10 bg-charcoal-800/60 text-charcoal-100 hover:border-gold-500/40 hover:bg-charcoal-800';
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
                      className={`group flex items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 ${cls} ${
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
                  className={`mt-5 animate-slide-down rounded-2xl border p-4 ${
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
                          Correct!
                        </span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="h-5 w-5 text-crimson-400" />
                        <span className="font-display text-lg font-bold text-crimson-200">
                          The Origin Story
                        </span>
                      </>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-100">
                    {current.originStory}
                  </p>
                  <p className="mt-2 text-xs italic text-gold-300/80">
                    Did you know? {current.fact}
                  </p>

                  <button
                    onClick={next}
                    className="btn-gold mt-4 flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold"
                  >
                    {qIndex + 1 >= questions.length ? 'See Results' : 'Next Question'}
                    <span aria-hidden>→</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {phase === 'finished' && (
            <div className="px-6 py-12 text-center sm:px-12 sm:py-16">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient shadow-lg shadow-gold-900/40">
                <Trophy className="h-8 w-8 text-charcoal-900" />
              </div>
              <h3 className="mt-6 font-display text-3xl font-bold text-white">
                You scored {correctCount}/{questions.length}
              </h3>
              <p className="mt-2 text-charcoal-300">
                {correctCount === questions.length
                  ? 'Flawless. Your palate is legendary.'
                  : correctCount >= 3
                    ? 'A worthy foodie. The flavors bow to you.'
                    : 'Every legend starts somewhere. Run it back.'}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-crimson-500/30 bg-crimson-900/20 px-4 py-2">
                <Flame className="h-4 w-4 text-crimson-400" />
                <span className="text-sm font-bold text-crimson-200">
                  {newStreak} Day Spice Streak
                </span>
              </div>

              {/* Score submission */}
              {!submitted ? (
                <div className="mx-auto mt-8 max-w-sm">
                  <p className="text-sm font-semibold text-charcoal-200">
                    Post your score to the Global Leaderboard
                  </p>
                  <div className="mt-3 flex gap-2">
                    <input
                      value={submitName}
                      onChange={(e) => setSubmitName(e.target.value)}
                      placeholder="Your foodie name"
                      maxLength={24}
                      className="flex-1 rounded-xl border border-white/10 bg-charcoal-800/60 px-4 py-2.5 text-sm text-white placeholder-charcoal-500 outline-none focus:border-gold-500/50"
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={submitting || !submitName.trim()}
                      className="btn-gold rounded-xl px-5 py-2.5 text-sm font-semibold disabled:opacity-40"
                    >
                      {submitting ? 'Posting…' : 'Post'}
                    </button>
                  </div>
                </div>
              ) : (
                <p className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-900/20 px-4 py-3 text-sm font-semibold text-emerald-200">
                  Score posted. You're on the board.
                </p>
              )}

              {/* Share Score button */}
              <button
                onClick={shareScore}
                className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 active:scale-95 ${
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

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={start}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-charcoal-800/60 px-6 py-3 text-sm font-semibold text-charcoal-100 transition-all duration-300 hover:text-gold-300 hover:scale-105 active:scale-95"
                >
                  <RotateCcw className="h-4 w-4" />
                  Play Again
                </button>
                <button
                  onClick={onOpenLeaderboard}
                  className="btn-gold flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Trophy className="h-4 w-4" />
                  View Leaderboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
