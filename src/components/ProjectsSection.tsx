import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, X } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';

type FilterType = 'All' | 'Machine Learning' | 'Data Analytics';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProject]);

  const visibleProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="border-b border-white/10 bg-[#060606] py-16 sm:py-20">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-8">
        {/* Section Header + Filter Tabs */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#EF1D32]">
              Portfolio Showcase
            </p>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              Selected Projects
            </h2>
          </div>

          <div
            className="inline-flex items-center gap-1 border border-white/10 bg-[#0D0D10] p-1 self-start sm:self-auto"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {(['All', 'Machine Learning', 'Data Analytics'] as const).map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab)}
                  className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.06em] transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#D91629] text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col sm:flex-row overflow-hidden border border-white/10 bg-[#0D0D10] transition-colors duration-200 hover:border-[#D91629]/60"
            >
              {/* Left Text & Action Column */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-[#EF1D32] font-medium tabular-nums">
                      {project.index}
                    </span>
                    <span className="text-zinc-600" aria-hidden="true">/</span>
                    <span className="text-zinc-400 uppercase tracking-[0.08em]">
                      {project.badgeLabel}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#EF1D32] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {project.summary}
                  </p>

                  <p className="mt-4 font-mono text-[11px] tracking-wide text-zinc-500">
                    {project.stack.join(' · ')}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:text-[#EF1D32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D91629]"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#D91629]/60 bg-[#D91629]/15 text-[#EF1D32] transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>View Project</span>
                  </button>
                </div>
              </div>

              {/* Right Thumbnail Media Column */}
              <div className="relative h-48 sm:h-auto sm:w-48 lg:w-56 shrink-0 overflow-hidden bg-[#141418]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#0D0D10] via-transparent to-transparent sm:w-12"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive Project Case Study Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-white/15 bg-[#0D0D10] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-56 w-full overflow-hidden bg-[#141418]">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D10] via-[#0D0D10]/40 to-transparent" />
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center border border-white/20 bg-black/80 text-white transition-colors hover:border-[#D91629] hover:bg-[#D91629]"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#EF1D32]">
                  {activeProject.index} · {activeProject.badgeLabel}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-1 font-display text-3xl font-bold uppercase tracking-tight text-white"
                >
                  {activeProject.title}
                </h3>
              </div>
            </div>

            {/* Case Study Details */}
            <div className="space-y-6 p-6 sm:p-8">
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
                  Overview
                </h4>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-zinc-200">
                  {activeProject.overview}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
                  Pipeline &amp; Methodology
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {activeProject.methodology.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="mt-0.5 font-mono text-xs text-[#EF1D32] tabular-nums">
                        0{i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-5">
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
                    Tools &amp; Libraries
                  </h4>
                  <p className="mt-1.5 text-sm text-zinc-200">
                    {activeProject.stack.join(' · ')}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
                    Evaluation Metrics
                  </h4>
                  <p className="mt-1.5 text-sm text-zinc-200">
                    {activeProject.metrics.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D91629] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#EF1D32]"
                >
                  <span>Explore GitHub Profile</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="border border-white/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-300 transition-colors hover:border-white hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
