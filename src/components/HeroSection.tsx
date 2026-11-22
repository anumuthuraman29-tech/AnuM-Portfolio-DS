import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Download, Plus } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  // Pure vertical upward reveal — no horizontal movement, no zoom-heavy effects
  const revealUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.72, delay, ease: EASE_CINEMATIC },
        };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 editorial-hero-texture"
    >
      {/* Subtle radial crimson spotlight behind center portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 44%, rgba(217, 22, 41, 0.24) 0%, rgba(110, 8, 16, 0.08) 42%, rgba(5, 5, 5, 0) 72%)',
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-8 lg:min-h-[620px] xl:min-h-[670px] flex flex-col justify-end">
        {/* LAYER 1 (Background): Enormous Towering Crimson PORTFOLIO Wordmark — 100% visible P to O */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none overflow-hidden pt-4 sm:pt-6 lg:pt-0 lg:absolute lg:inset-x-8 lg:top-4 lg:bottom-8 lg:flex lg:items-start lg:justify-center lg:z-0"
        >
          <motion.div
            initial={prefersReducedMotion ? false : { y: '105%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.05, ease: EASE_CINEMATIC }}
            className="w-full"
          >
            <svg
              viewBox="0 0 1320 470"
              className="block h-auto w-full overflow-visible"
              role="presentation"
            >
              <defs>
                <linearGradient id="heroPortfolioCrimson" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EF1D32" />
                  <stop offset="38%" stopColor="#C81122" />
                  <stop offset="76%" stopColor="#58050D" />
                  <stop offset="100%" stopColor="#140103" />
                </linearGradient>
              </defs>
              <g transform="translate(660, 426) scale(1, 1.48)">
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  fill="url(#heroPortfolioCrimson)"
                  style={{
                    fontFamily: '"Oswald", sans-serif',
                    fontWeight: 700,
                    fontSize: '302px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  PORTFOLIO
                </text>
              </g>
            </svg>
          </motion.div>
        </div>

        {/* Subtle left/right readability scrim over lower crimson letters */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:block absolute inset-0 z-[5]"
          style={{
            background:
              'linear-gradient(90deg, rgba(5,5,5,0.68) 0%, rgba(5,5,5,0.22) 34%, rgba(5,5,5,0) 52%, rgba(5,5,5,0.28) 78%, rgba(5,5,5,0.62) 100%)',
          }}
        />

        {/* LAYER 2 (Center Foreground): Original Transparent Cutout Portrait — animates upward from below */}
        <div className="relative z-10 -mt-[18vw] sm:-mt-[17vw] lg:mt-0 lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-0 flex justify-center">
          <motion.div
            initial={prefersReducedMotion ? false : { y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.95, delay: 0.28, ease: EASE_CINEMATIC }}
            className="relative w-[270px] sm:w-[350px] lg:w-[465px] xl:w-[515px] shrink-0"
          >
            <img
              src={PROFILE.portraitUrl}
              alt="Anu M. — BCA Student and Aspiring Data Science Professional"
              className="mx-auto block h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.95)]"
              referrerPolicy="no-referrer"
            />
            {/* Soft bottom fade so portrait blends naturally into the dark hero edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent"
            />
          </motion.div>
        </div>

        {/* LAYER 3 (Foreground Content): Left Introduction & Buttons + Right Statement & 3 Statistics */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-4 pt-4 pb-8 sm:pb-10 lg:pt-44 lg:pb-11">
          {/* Left Column: Hello, I'm ANU M., Role, Tagline, Action Buttons & Skills Line */}
          <div className="lg:col-span-5 lg:max-w-[460px]">
            <motion.p
              {...revealUp(0.54)}
              className="font-serif italic text-2xl sm:text-[1.95rem] text-zinc-100 tracking-wide"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              {...revealUp(0.62)}
              className="mt-0.5 font-display text-5xl sm:text-6xl xl:text-[4.65rem] font-bold uppercase leading-[0.92] tracking-tight text-white"
            >
              {PROFILE.name}
            </motion.h1>

            <motion.p
              {...revealUp(0.7)}
              className="mt-2.5 font-display text-base sm:text-lg font-semibold uppercase tracking-[0.04em] text-[#EF1D32] max-w-md"
            >
              {PROFILE.role}
            </motion.p>

            <motion.p
              {...revealUp(0.78)}
              className="mt-2.5 text-sm sm:text-[15px] italic leading-relaxed text-zinc-200 max-w-sm"
            >
              &ldquo;{PROFILE.tagline}&rdquo;
            </motion.p>

            {/* Primary & Secondary Action Buttons */}
            <motion.div
              {...revealUp(0.86)}
              className="mt-6 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 bg-[#D91629] px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-[#EF1D32] shadow-[0_10px_28px_rgba(217,22,41,0.35)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.primaryResumeUrl}
                download={PROFILE.primaryResumeFilename}
                className="inline-flex items-center gap-2.5 border border-white/30 bg-black/75 px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-zinc-100 backdrop-blur-sm transition-colors duration-200 hover:border-[#D91629] hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D91629]"
              >
                <span>Download Resume</span>
                <Download className="h-4 w-4 text-[#EF1D32]" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Minimal Bottom Hairline & Discipline Strip */}
            <motion.div
              {...revealUp(0.94)}
              className="mt-6 border-t border-white/15 pt-3"
            >
              <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.11em] text-zinc-400">
                {PROFILE.heroSkillsLine}
              </p>
            </motion.div>
          </div>

          {/* Center Spacer Column on Desktop */}
          <div className="hidden lg:block lg:col-span-4" aria-hidden="true" />

          {/* Right Column: Small Statement & Three Professional Statistics */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end">
            <motion.div
              {...revealUp(0.64)}
              className="mb-7 flex items-center gap-3.5 text-zinc-200"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/55">
                <Plus className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
              <span className="text-xs font-medium leading-snug tracking-wide text-zinc-200">
                Building<br />intelligent<br />solutions
              </span>
            </motion.div>

            <div className="grid grid-cols-3 lg:grid-cols-1 gap-5 lg:gap-4 w-full">
              {PROFILE.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  {...revealUp(0.74 + idx * 0.08)}
                  className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-1 lg:gap-3.5 border-t border-white/10 lg:border-t-0 pt-3 lg:pt-0"
                >
                  <span className="font-display text-3xl sm:text-4xl font-bold tabular-nums text-[#EF1D32]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.1em] leading-tight text-zinc-300 lg:w-[96px]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
