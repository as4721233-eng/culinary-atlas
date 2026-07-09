import { useCallback, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExplorerGrid } from './components/ExplorerGrid';
import { DailyGastroChallenge } from './components/DailyGastroChallenge';
import { GastroQuiz } from './components/GastroQuiz';
import { ShortsPlayer } from './components/ShortsPlayer';
import { LiveFeedButton } from './components/LiveFeedButton';
import { LeaderboardModal } from './components/LeaderboardModal';
import { CityDetail } from './components/CityDetail';
import { Footer } from './components/Footer';
import { getCityById } from './data/cities';
import { usePassport, useDailyStreak, useLeaderboard } from './hooks/usePassport';

export default function App() {
  const [view, setView] = useState<{ name: 'home' } | { name: 'city'; id: string }>({
    name: 'home',
  });
  const [shortsOpen, setShortsOpen] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  const {
    passport,
    toggleWantToGo,
    toggleTastedIt,
    tastedCount,
    progress,
    totalCities,
    points,
    addPoints,
  } = usePassport();
  const { streak, completeQuiz } = useDailyStreak();
  const { entries, loading: lbLoading, submitScore } = useLeaderboard();

  const goHome = useCallback(() => {
    setView({ name: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const selectCity = useCallback((id: string) => {
    setView({ name: 'city', id });
  }, []);

  const scrollToExplorer = useCallback(() => {
    document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const currentCity = view.name === 'city' ? getCityById(view.id) : undefined;

  return (
    <div className="min-h-screen bg-charcoal-950 text-charcoal-100">
      <Header
        progress={progress}
        tastedCount={tastedCount}
        totalCities={totalCities}
        streak={streak}
        points={points}
        onHome={goHome}
        onOpenLeaderboard={() => setLeaderboardOpen(true)}
      />

      {view.name === 'home' && (
        <main>
          <Hero onExplore={scrollToExplorer} />
          <DailyGastroChallenge
            streak={streak}
            points={points}
            onComplete={(score) => {
              completeQuiz();
              void score;
            }}
            onAddPoints={addPoints}
          />
          <ExplorerGrid
            passport={passport}
            onToggleWantToGo={toggleWantToGo}
            onToggleTastedIt={toggleTastedIt}
            onSelectCity={selectCity}
          />
          <GastroQuiz
            streak={streak}
            points={points}
            onComplete={completeQuiz}
            onSubmitScore={submitScore}
            onOpenLeaderboard={() => setLeaderboardOpen(true)}
          />
          <Footer />
        </main>
      )}

      {view.name === 'city' && currentCity && (
        <main>
          <CityDetail
            city={currentCity}
            wantToGo={passport[currentCity.id]?.wantToGo ?? false}
            tastedIt={passport[currentCity.id]?.tastedIt ?? false}
            onToggleWantToGo={() => toggleWantToGo(currentCity.id)}
            onToggleTastedIt={() => toggleTastedIt(currentCity.id)}
            onBack={goHome}
          />
          <Footer />
        </main>
      )}

      {view.name === 'city' && !currentCity && (
        <main className="flex min-h-screen items-center justify-center pt-16">
          <div className="text-center">
            <p className="text-charcoal-300">City not found.</p>
            <button onClick={goHome} className="btn-gold mt-4 rounded-full px-6 py-3 text-sm font-semibold">
              Back to Atlas
            </button>
          </div>
        </main>
      )}

      {/* Floating live feed */}
      <LiveFeedButton onClick={() => setShortsOpen(true)} />

      {/* Overlays */}
      <ShortsPlayer open={shortsOpen} onClose={() => setShortsOpen(false)} />
      <LeaderboardModal
        open={leaderboardOpen}
        onClose={() => setLeaderboardOpen(false)}
        entries={entries}
        loading={lbLoading}
      />
    </div>
  );
}
