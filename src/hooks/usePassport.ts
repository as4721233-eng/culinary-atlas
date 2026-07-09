import { useCallback, useEffect, useState } from 'react';
import { cities, totalCities } from '../data/cities';
import { supabase } from '../lib/supabase';

const PASSPORT_KEY = 'culinary_atlas_passport_v1';
const STREAK_KEY = 'culinary_atlas_streak_v1';
const LAST_QUIZ_KEY = 'culinary_atlas_last_quiz_date_v1';
const POINTS_KEY = 'culinary_atlas_dream_points_v1';
const DAILY_CHALLENGE_DATE_KEY = 'culinary_atlas_daily_challenge_date_v1';
const DAILY_CHALLENGE_SCORE_KEY = 'culinary_atlas_daily_challenge_score_v1';

export type PassportEntry = { cityId: string; wantToGo: boolean; tastedIt: boolean };
export type PassportState = Record<string, PassportEntry>;

type PassportJson = { cityId: string; wantToGo: boolean; tastedIt: boolean }[];

type LeaderboardEntry = {
  id: string;
  player_name: string;
  avatar: string;
  score: number;
  streak: number;
  is_seeded: boolean;
};

function readPassport(): PassportState {
  try {
    const raw = localStorage.getItem(PASSPORT_KEY);
    if (!raw) return {};
    const arr = JSON.parse(raw) as PassportJson;
    const state: PassportState = {};
    for (const e of arr) state[e.cityId] = e;
    return state;
  } catch {
    return {};
  }
}

function writePassport(state: PassportState) {
  const arr: PassportJson = Object.values(state);
  localStorage.setItem(PASSPORT_KEY, JSON.stringify(arr));
}

function readStreak(): number {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    return raw ? parseInt(raw, 10) || 0 : 0;
  } catch {
    return 0;
  }
}

function readPoints(): number {
  try {
    const raw = localStorage.getItem(POINTS_KEY);
    return raw ? parseInt(raw, 10) || 0 : 0;
  } catch {
    return 0;
  }
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string) {
  const da = new Date(a + 'T00:00:00Z').getTime();
  const db = new Date(b + 'T00:00:00Z').getTime();
  return Math.round((db - da) / 86400000);
}

export type DreamTitle = {
  title: string;
  minPoints: number;
  icon: string;
};

export const DREAM_TITLES: DreamTitle[] = [
  { title: 'Curious Snacker', minPoints: 0, icon: '🍿' },
  { title: 'Street Food Apprentice', minPoints: 100, icon: '🥡' },
  { title: 'Flavor Seeker', minPoints: 300, icon: '🗺️' },
  { title: 'Spice Trailblazer', minPoints: 600, icon: '🌶️' },
  { title: 'Gastro Conqueror', minPoints: 1000, icon: '⚔️' },
  { title: 'Culinary Cartographer', minPoints: 1600, icon: '🧭' },
  { title: 'Gastro Legend', minPoints: 2500, icon: '👑' },
];

export function getDreamTitle(points: number): DreamTitle {
  let result = DREAM_TITLES[0];
  for (const t of DREAM_TITLES) {
    if (points >= t.minPoints) result = t;
  }
  return result;
}

export function getNextTitle(points: number): DreamTitle | null {
  for (const t of DREAM_TITLES) {
    if (points < t.minPoints) return t;
  }
  return null;
}

export function useDreamPoints() {
  const [points, setPoints] = useState<number>(() => readPoints());

  const addPoints = useCallback((amount: number) => {
    setPoints((prev) => {
      const next = prev + amount;
      localStorage.setItem(POINTS_KEY, String(next));
      return next;
    });
  }, []);

  return { points, addPoints };
}

export function usePassport() {
  const [passport, setPassport] = useState<PassportState>(() => readPassport());
  const [points, setPoints] = useState<number>(() => readPoints());

  const addPoints = useCallback((amount: number) => {
    setPoints((prev) => {
      const next = prev + amount;
      localStorage.setItem(POINTS_KEY, String(next));
      return next;
    });
  }, []);

  const toggleWantToGo = useCallback((cityId: string) => {
    setPassport((prev) => {
      const entry = prev[cityId] ?? { cityId, wantToGo: false, tastedIt: false };
      const wasActive = entry.wantToGo;
      const next = { ...prev, [cityId]: { ...entry, wantToGo: !wasActive } };
      writePassport(next);
      if (!wasActive) addPoints(50);
      return next;
    });
  }, [addPoints]);

  const toggleTastedIt = useCallback((cityId: string) => {
    setPassport((prev) => {
      const entry = prev[cityId] ?? { cityId, wantToGo: false, tastedIt: false };
      const wasActive = entry.tastedIt;
      const next = { ...prev, [cityId]: { ...entry, tastedIt: !wasActive } };
      writePassport(next);
      if (!wasActive) addPoints(50);
      return next;
    });
  }, [addPoints]);

  const tastedCount = Object.values(passport).filter((e) => e.tastedIt).length;
  const wantToGoCount = Object.values(passport).filter((e) => e.wantToGo).length;
  const progress = Math.round((tastedCount / totalCities) * 100);

  return {
    passport,
    toggleWantToGo,
    toggleTastedIt,
    tastedCount,
    wantToGoCount,
    progress,
    totalCities,
    points,
    addPoints,
  };
}

export function useDailyStreak() {
  const [streak, setStreak] = useState<number>(() => readStreak());

  // If a day was skipped, reset streak to 0 on load
  useEffect(() => {
    const last = localStorage.getItem(LAST_QUIZ_KEY);
    if (last) {
      const gap = daysBetween(last, todayStr());
      if (gap > 1) {
        localStorage.setItem(STREAK_KEY, '0');
        setStreak(0);
      }
    }
  }, []);

  const completeQuiz = useCallback(() => {
    const last = localStorage.getItem(LAST_QUIZ_KEY);
    const today = todayStr();
    let nextStreak = 1;
    if (last) {
      const gap = daysBetween(last, today);
      if (gap === 1) nextStreak = readStreak() + 1;
      else if (gap === 0) nextStreak = readStreak();
      else nextStreak = 1;
    }
    localStorage.setItem(STREAK_KEY, String(nextStreak));
    localStorage.setItem(LAST_QUIZ_KEY, today);
    setStreak(nextStreak);
    return nextStreak;
  }, []);

  return { streak, completeQuiz };
}

export function useDailyChallenge() {
  const [completedToday, setCompletedToday] = useState<boolean>(() => {
    return localStorage.getItem(DAILY_CHALLENGE_DATE_KEY) === todayStr();
  });
  const [lastScore, setLastScore] = useState<number>(() => {
    const raw = localStorage.getItem(DAILY_CHALLENGE_SCORE_KEY);
    return raw ? parseInt(raw, 10) || 0 : 0;
  });

  const completeDaily = useCallback((score: number) => {
    localStorage.setItem(DAILY_CHALLENGE_DATE_KEY, todayStr());
    localStorage.setItem(DAILY_CHALLENGE_SCORE_KEY, String(score));
    setCompletedToday(true);
    setLastScore(score);
  }, []);

  // Calculate next unlock time (midnight local)
  const [nextUnlockMs, setNextUnlockMs] = useState<number>(() => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow.getTime() - now.getTime();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(now.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      setNextUnlockMs(tomorrow.getTime() - now.getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { completedToday, lastScore, completeDaily, nextUnlockMs };
}

export function formatCountdown(ms: number): string {
  if (ms <= 0) return '00:00:00';
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function useLeaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('leaderboard_entries')
      .select('id, player_name, avatar, score, streak, is_seeded')
      .order('score', { ascending: false })
      .limit(15);
    if (!error && data) {
      setEntries(data as LeaderboardEntry[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const submitScore = useCallback(
    async (playerName: string, score: number, streak: number) => {
      const avatar = playerName
        .split(' ')
        .map((s) => s[0] || '')
        .join('')
        .slice(0, 2)
        .toUpperCase() || 'FF';
      const { error } = await supabase.from('leaderboard_entries').insert({
        player_name: playerName,
        avatar,
        score,
        streak,
        is_seeded: false,
      });
      if (!error) await refresh();
      return !error;
    },
    [refresh],
  );

  return { entries, loading, submitScore, refresh };
}

export function getCityStatus(
  passport: PassportState,
  cityId: string,
): { wantToGo: boolean; tastedIt: boolean } {
  const entry = passport[cityId];
  return {
    wantToGo: entry?.wantToGo ?? false,
    tastedIt: entry?.tastedIt ?? false,
  };
}

export { cities };
