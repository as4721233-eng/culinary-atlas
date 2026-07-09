import { useState } from 'react';
import { Mail, Check, Compass, Github, Twitter, Instagram } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Footer() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: email.trim() });
    if (error) {
      // duplicate email still counts as success for UX
      if (error.code === '23505') {
        setStatus('done');
      } else {
        setStatus('error');
      }
    } else {
      setStatus('done');
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-charcoal-950">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-gold-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-crimson-500/5 blur-3xl" />

      {/* Newsletter */}
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 py-20 text-center scroll-fade ${visible ? 'visible' : ''}`}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient shadow-lg shadow-gold-900/40">
          <Mail className="h-7 w-7 text-charcoal-900" />
        </div>
        <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
          The Weekly Culinary Drop
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-charcoal-300">
          Join 5,000+ food adventurers receiving one legendary, hidden culinary origin story every
          week.
        </p>

        {status === 'done' ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-900/20 px-5 py-4 text-sm font-semibold text-emerald-200">
            <Check className="h-5 w-5" />
            You're on the list. Your first drop lands soon.
          </div>
        ) : (
          <form onSubmit={subscribe} className="mx-auto mt-8 flex max-w-md flex-col gap-2.5 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-white/10 bg-charcoal-800/60 px-5 py-3 text-sm text-white placeholder-charcoal-500 outline-none transition-colors focus:border-gold-500/50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-gold rounded-full px-7 py-3 text-sm font-semibold disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-crimson-400">Something went wrong. Please try again.</p>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-gradient">
              <Compass className="h-4 w-4 text-charcoal-900" />
            </div>
            <div className="leading-none">
              <div className="font-display text-base font-bold text-white">Culinary Atlas</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-charcoal-500">
                Unearth the world's flavors
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SocialLink icon={<Instagram className="h-4 w-4" />} label="Instagram" />
            <SocialLink icon={<Twitter className="h-4 w-4" />} label="Twitter" />
            <SocialLink icon={<Github className="h-4 w-4" />} label="GitHub" />
          </div>

          <p className="text-xs text-charcoal-500">
            © {new Date().getFullYear()} Culinary Atlas. Crafted for flavor chasers.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-charcoal-800/60 text-charcoal-300 transition-all hover:border-gold-500/40 hover:text-gold-300"
    >
      {icon}
    </a>
  );
}
