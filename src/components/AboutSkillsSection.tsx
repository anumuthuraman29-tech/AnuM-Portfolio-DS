import { motion } from 'motion/react';
import { PROFILE, SKILL_GROUPS } from '../data/portfolioData';

export default function AboutSkillsSection() {
  return (
    <section id="about" className="border-b border-white/10 bg-[#060606] py-16 sm:py-20">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left: About Me Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#EF1D32]">
              Profile &amp; Background
            </p>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              About Me
            </h2>
            <div className="mt-3 h-[2px] w-12 bg-[#D91629]" />

            <div className="mt-6 space-y-4 text-sm sm:text-[15px] leading-[1.75] text-zinc-300">
              {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Clean Metadata Row — Unboxed */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-5 text-xs">
              <div>
                <p className="font-mono uppercase tracking-[0.12em] text-zinc-500">
                  Location
                </p>
                <p className="mt-1 font-medium text-zinc-200">{PROFILE.location}</p>
              </div>
              <div>
                <p className="font-mono uppercase tracking-[0.12em] text-zinc-500">
                  Languages Spoken
                </p>
                <p className="mt-1 font-medium text-zinc-200">
                  {PROFILE.languages.join(' · ')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Structured Technical Skills Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#EF1D32]">
              Capabilities
            </p>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              Technical Skills
            </h2>
            <div className="mt-3 h-[2px] w-12 bg-[#D91629]" />

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SKILL_GROUPS.map((group, idx) => (
                <div
                  key={group.title}
                  className={`border border-white/10 bg-[#0D0D10] p-5 transition-colors hover:border-[#D91629]/50 ${
                    idx === SKILL_GROUPS.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <h3 className="font-display text-base font-semibold uppercase tracking-[0.06em] text-white">
                      {group.title}
                    </h3>
                    <span className="font-mono text-[11px] text-[#EF1D32] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {group.items.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
