import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, Download, Eye, X } from 'lucide-react';
import { INTERNSHIPS } from '../data/portfolioData';

export default function ExperienceSection() {
  const [previewPdf, setPreviewPdf] = useState<{ title: string; url: string } | null>(null);

  useEffect(() => {
    if (!previewPdf) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewPdf(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [previewPdf]);

  return (
    <section id="experience" className="border-b border-white/10 bg-[#08080A] py-16 sm:py-20">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-8">
        <div className="border-b border-white/10 pb-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#EF1D32]">
            Applied Experience
          </p>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
            Internship Experience
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {INTERNSHIPS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between border border-white/10 bg-[#0D0D10] p-6 sm:p-8 transition-colors hover:border-[#D91629]/55"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <span className="font-mono text-xs text-[#EF1D32] tabular-nums">
                    {item.index} · {item.period}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    {item.credentialId}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl sm:text-[1.7rem] font-bold uppercase tracking-tight text-white">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.06em] text-[#EF1D32]">
                  {item.organization}
                </p>

                <ul className="mt-5 space-y-3">
                  {item.highlights.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#D91629]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.certificatePdf && (
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    onClick={() =>
                      setPreviewPdf({
                        title: `${item.organization} — Data Science Certification`,
                        url: item.certificatePdf!,
                      })
                    }
                    className="inline-flex items-center gap-2 bg-[#D91629] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#EF1D32]"
                  >
                    <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Preview Credential</span>
                  </button>
                  <a
                    href={item.certificatePdf}
                    download="Anu_M_Glowlogics_Data_Science_Certificate.pdf"
                    className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-200 transition-colors hover:border-[#D91629] hover:text-white"
                  >
                    <Download className="h-3.5 w-3.5 text-[#EF1D32]" aria-hidden="true" />
                    <span>Download PDF</span>
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>

      {/* Certificate Quick Preview Modal */}
      {previewPdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewPdf(null)}
        >
          <div
            className="flex h-[85vh] w-full max-w-4xl flex-col border border-white/15 bg-[#0D0D10]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <Award className="h-4 w-4 shrink-0 text-[#EF1D32]" aria-hidden="true" />
                <h3 className="truncate font-display text-lg font-semibold uppercase tracking-wide text-white">
                  {previewPdf.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={previewPdf.url}
                  download="Anu_M_Glowlogics_Data_Science_Certificate.pdf"
                  className="inline-flex items-center gap-1.5 bg-[#D91629] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#EF1D32]"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewPdf(null)}
                  aria-label="Close certificate preview"
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-zinc-300 hover:border-white hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <iframe
              src={previewPdf.url}
              title={previewPdf.title}
              className="h-full w-full flex-1 bg-zinc-900"
            />
          </div>
        </div>
      )}
    </section>
  );
}
