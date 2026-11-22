import { motion } from 'motion/react';
import { BarChart3, CheckCircle2, Code2, Rocket, Search } from 'lucide-react';
import { PROFILE, WORK_PROCESS } from '../data/portfolioData';

const PROCESS_ICONS = [Search, BarChart3, Code2, CheckCircle2, Rocket];

export default function EducationProcessBand() {
  return (
    <section
      id="education"
      className="border-b border-white/10 bg-[#08080A]"
    >
      <div className="mx-auto max-w-[1380px] grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 p-6 sm:p-10 flex flex-col justify-between"
        >
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
              Education
            </h2>
            <div className="mt-2 h-[2px] w-10 bg-[#D91629]" />

            <div className="mt-6">
              <p className="font-display text-2xl font-bold uppercase tracking-wide text-[#EF1D32]">
                {PROFILE.education.degree}
              </p>
              <p className="mt-1 text-base font-medium text-white">
                {PROFILE.education.fullDegree}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {PROFILE.education.college}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-zinc-300 tabular-nums">
            <span>CGPA: <strong className="text-white">{PROFILE.education.cgpa}</strong></span>
            <span className="text-zinc-600" aria-hidden="true">|</span>
            <span>{PROFILE.education.semester}</span>
            <span className="text-zinc-600" aria-hidden="true">|</span>
            <span>{PROFILE.education.graduation}</span>
          </div>
        </motion.div>

        {/* Center Column: Work Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 p-6 sm:p-10"
        >
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
            Work Process
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-[#D91629]" />

          <ol className="mt-6 space-y-4">
            {WORK_PROCESS.map((item, idx) => {
              const Icon = PROCESS_ICONS[idx] ?? Search;
              return (
                <li key={item.step} className="flex items-center gap-4">
                  <span className="font-display text-lg font-bold tabular-nums text-[#EF1D32] w-6 shrink-0">
                    {item.step}
                  </span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D91629]/50 bg-[#D91629]/10 text-[#EF1D32]">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div className="text-sm text-zinc-300">
                    <span className="font-semibold text-white">{item.title}</span>
                    <span className="mx-2 text-zinc-600">—</span>
                    <span>{item.description}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </motion.div>

        {/* Right Column: Crimson Editorial Quote Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="lg:col-span-3 relative overflow-hidden bg-gradient-to-br from-[#C41022] via-[#9E0B1A] to-[#59040D] p-6 sm:p-10 flex flex-col justify-between"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none select-none font-serif text-7xl leading-none text-white/25"
          >
            &ldquo;
          </div>
          <blockquote className="relative z-10 text-base sm:text-lg font-medium leading-relaxed text-white">
            Turning data into insights requires both analytical precision and the curiosity to ask better questions.
          </blockquote>
          <p className="relative z-10 mt-6 font-serif italic text-xl text-white/95">
            Anu M.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
