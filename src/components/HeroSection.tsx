import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Download, Plus } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const textReveal = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.72, delay, ease: EASE_EDITORIAL },
        };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-[#060606] pt-6 sm:pt-10 lg:pt-8"
    >
      {/* Subtle crimson ambient glow behind portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 crimson-glow-backdrop"
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-8">
        {/* Background Oversized PORTFOLIO Typography — slides smoothly upward from below */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none overflow-hidden pt-2 sm:pt-4 lg:pt-2"
        >
          <motion.div
            initial={prefersReducedMotion ? false : { y: '105%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.95, ease: EASE_EDITORIAL }}
            className="text-center font-display font-bold uppercase leading-[0.82] tracking-[-0.025em] portfolio-gradient-text text-[20vw] sm:text-[18.5vw] lg:text-[16.8rem] xl:text-[18.2rem]"
          >
            PORTFOLIO
          </motion.div>
        </div>

        {/* Main 3-Layer Editorial Composition Overlapping Lower Half of PORTFOLIO */}
        <div className="relative z-10 -mt-[10vw] sm:-mt-[11vw] lg:-mt-[13.5rem] grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-4">
          {/* Left Column: Introduction, Role, Tagline, CTAs & Core Skills */}
          <div className="lg:col-span-5 pb-4 lg:pb-12 order-2 lg:order-1">
            <motion.p
              {...textReveal(0.32)}
              className="font-serif italic text-2xl sm:text-3xl text-zinc-200 tracking-wide mb-1"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              {...textReveal(0.42)}
              className="font-display text-5xl sm:text-6xl xl:text-[4.5rem] font-bold uppercase leading-[0.94] tracking-tight text-white"
            >
              {PROFILE.name}
            </motion.h1>

            <motion.p
              {...textReveal(0.52)}
              className="mt-3 font-display text-base sm:text-lg font-semibold uppercase tracking-[0.04em] text-[#EF1D32] max-w-md"
            >
              {PROFILE.role}
            </motion.p>

            <motion.p
              {...textReveal(0.62)}
              className="mt-3 text-sm sm:text-[15px] italic leading-relaxed text-zinc-300 max-w-md"
            >
              &ldquo;{PROFILE.tagline}&rdquo;
            </motion.p>

            {/* Primary & Secondary Action Buttons */}
            <motion.div
              {...textReveal(0.72)}
              className="mt-6 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 bg-[#D91629] px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:bg-[#EF1D32] hover:translate-y-[-1px] shadow-[0_10px_30px_rgba(217,22,41,0.3)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.primaryResumeUrl}
                download={PROFILE.primaryResumeFilename}
                className="inline-flex items-center gap-2.5 border border-white/25 bg-black/75 px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-zinc-100 backdrop-blur-sm transition-all duration-200 hover:border-[#D91629] hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D91629]"
              >
                <span>Download Resume</span>
                <Download className="h-4 w-4 text-[#EF1D32]" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Unboxed Minimal Divider & Core Discipline Line */}
            <motion.div
              {...textReveal(0.82)}
              className="mt-7 border-t border-white/10 pt-3.5"
            >
              <p className="font-mono text-[11px] tracking-[0.14em] text-zinc-400">
                {PROFILE.heroSkillsLine}
              </p>
            </motion.div>
          </div>

          {/* Center Column: Original Cutout Portrait with Bottom-to-Top Progressive Reveal */}
          <div className="lg:col-span-4 flex justify-center items-end order-1 lg:order-2 relative">
            {/* Subtle crimson halo right behind shoulders */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-10 h-64 w-64 rounded-full bg-[#D91629]/20 blur-3xl"
            />
            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : { clipPath: 'inset(100% 0% 0% 0%)', y: 36, opacity: 0.4 }
              }
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', y: 0, opacity: 1 }}
              transition={{ duration: 1.05, delay: 0.18, ease: EASE_EDITORIAL }}
              className="relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[430px]"
            >
              <img
                src={PROFILE.portraitUrl}
                alt="Anu M. — BCA Student and Aspiring AI & Machine Learning Professional"
                className="relative z-10 mx-auto block h-auto w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
                referrerPolicy="no-referrer"
              />
              {/* Measured bottom scrim so blazer blends naturally into dark canvas */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-[#060606] via-[#060606]/70 to-transparent"
              />
            </motion.div>
          </div>

          {/* Right Column: Editorial Crosshair Marker & Quantitative Stats */}
          <div className="lg:col-span-3 pb-8 lg:pb-12 order-3 flex flex-col items-start lg:items-end text-left lg:text-right">
            <motion.div
              {...textReveal(0.45)}
              className="mb-8 hidden lg:flex items-center gap-3.5 text-zinc-300"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-zinc-200">
                <Plus className="h-4 w-4 text-[#EF1D32]" aria-hidden="true" />
              </span>
              <span className="text-xs font-medium leading-snug tracking-wide text-zinc-300 text-left">
                Building<br />intelligent<br />solutions
              </span>
            </motion.div>

            <div className="grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-5 w-full">
              {PROFILE.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  {...textReveal(0.55 + idx * 0.1)}
                  className="flex flex-col lg:flex-row lg:items-center lg:justify-end gap-1 lg:gap-3.5 border-t border-white/10 lg:border-t-0 pt-3 lg:pt-0"
                >
                  <span className="font-display text-3xl sm:text-4xl font-bold tabular-nums text-[#EF1D32]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.12em] leading-tight text-zinc-300 lg:max-w-[96px] lg:text-left">
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
