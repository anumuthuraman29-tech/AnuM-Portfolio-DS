import { motion, useReducedMotion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function ThankYouFinale() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#050505] py-20 sm:py-24">
      {/* Subtle radial crimson warmth at center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(217, 22, 41, 0.14) 0%, rgba(6, 6, 6, 0) 65%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1000px] px-4 sm:px-8 text-center">
        {/* Top Crimson Hairline Rule */}
        <motion.div
          initial={prefersReducedMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 h-[2px] w-20 bg-[#D91629] origin-center"
        />

        {/* Headline */}
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-bold uppercase leading-[0.95] tracking-tight text-white"
          style={{ textWrap: 'balance' }}
        >
          THANK YOU FOR <span className="text-[#EF1D32]">VISITING!</span>
        </motion.h2>

        {/* Closing Message */}
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300"
        >
          Every project is a new opportunity to learn, create and innovate. Thank you for taking the time to explore my journey.
        </motion.p>

        {/* Animated Signature Lockup for ANU M. */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center"
        >
          <span className="font-serif italic text-3xl sm:text-4xl tracking-wide text-white">
            Anu M.
          </span>

          {/* Elegant Calligraphic Signature Flourish SVG */}
          <svg
            viewBox="0 0 240 28"
            className="mt-2 h-6 w-48 overflow-visible"
            aria-hidden="true"
          >
            <motion.path
              d="M 8 18 Q 58 6, 118 14 T 232 10"
              fill="none"
              stroke="#EF1D32"
              strokeWidth="2"
              strokeLinecap="round"
              initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 1.15, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              d="M 42 23 Q 112 17, 198 20"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1"
              strokeLinecap="round"
              initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          <span className="mt-2 font-display text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">
            ANU M.
          </span>
        </motion.div>

        {/* Small LinkedIn, GitHub, and Email Links */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-xs font-medium tracking-[0.06em] text-zinc-400"
        >
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D91629]"
          >
            <Linkedin className="h-3.5 w-3.5 text-[#EF1D32]" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>

          <span className="text-zinc-700" aria-hidden="true">/</span>

          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D91629]"
          >
            <Github className="h-3.5 w-3.5 text-[#EF1D32]" aria-hidden="true" />
            <span>GitHub</span>
          </a>

          <span className="text-zinc-700" aria-hidden="true">/</span>

          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D91629]"
          >
            <Mail className="h-3.5 w-3.5 text-[#EF1D32]" aria-hidden="true" />
            <span>{PROFILE.email}</span>
          </a>
        </motion.div>

        <p className="mt-6 font-mono text-[11px] text-zinc-600">
          &copy; {new Date().getFullYear()} Anu M. · Bengaluru, India
        </p>
      </div>
    </footer>
  );
}
