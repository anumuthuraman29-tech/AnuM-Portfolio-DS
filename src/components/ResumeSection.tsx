import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { RESUME_DOCUMENTS } from '../data/portfolioData';

export default function ResumeSection() {
  const [activeId, setActiveId] = useState(RESUME_DOCUMENTS[0].id);
  const activeDoc =
    RESUME_DOCUMENTS.find((doc) => doc.id === activeId) ?? RESUME_DOCUMENTS[0];

  return (
    <section id="resume" className="border-b border-white/10 bg-[#08080A] py-16 sm:py-20">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#EF1D32]">
              Documents &amp; Curriculum Vitae
            </p>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              Resume Viewer &amp; Downloads
            </h2>
          </div>

          <a
            href={activeDoc.pdfUrl}
            download={activeDoc.downloadFilename}
            className="inline-flex items-center gap-2.5 bg-[#D91629] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#EF1D32] self-start sm:self-auto whitespace-nowrap shrink-0"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>Download Selected PDF</span>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Document Selector & Summary */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col justify-between gap-6"
          >
            <div className="space-y-2.5" role="tablist" aria-label="Select resume document">
              {RESUME_DOCUMENTS.map((doc, idx) => {
                const isSelected = doc.id === activeDoc.id;
                return (
                  <button
                    key={doc.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveId(doc.id)}
                    className={`w-full text-left border p-4 transition-colors duration-200 ${
                      isSelected
                        ? 'border-[#D91629] bg-[#140A0C]'
                        : 'border-white/10 bg-[#0D0D10] hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#EF1D32] tabular-nums">
                        0{idx + 1} · {doc.subtitle}
                      </span>
                      <FileText
                        className={`h-4 w-4 shrink-0 ${
                          isSelected ? 'text-[#EF1D32]' : 'text-zinc-500'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-1.5 font-display text-lg font-bold uppercase tracking-tight text-white">
                      {doc.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                      {doc.focus}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Document Highlights + Actions */}
            <div className="border border-white/10 bg-[#0D0D10] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
                Document Highlights
              </p>
              <ul className="mt-3 space-y-2.5">
                {activeDoc.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#D91629]" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                <a
                  href={activeDoc.pdfUrl}
                  download={activeDoc.downloadFilename}
                  className="inline-flex items-center gap-2 bg-[#D91629] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#EF1D32]"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Download</span>
                </a>
                <a
                  href={activeDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-200 transition-colors hover:border-white hover:text-white"
                >
                  <span>Open Full PDF</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Live Embedded PDF Preview */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-8 flex flex-col border border-white/15 bg-[#0D0D10] overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#0B0B0E] px-5 py-3">
              <span className="truncate font-mono text-xs text-zinc-300">
                {activeDoc.downloadFilename}
              </span>
              <a
                href={activeDoc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-[#EF1D32] hover:underline whitespace-nowrap shrink-0"
              >
                <span>Expand</span>
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
            {activeDoc.previewImageUrl ? (
              <div className="h-[540px] sm:h-[660px] w-full overflow-y-auto bg-[#141418] p-4 sm:p-6 flex justify-center">
                <img
                  key={activeDoc.id}
                  src={activeDoc.previewImageUrl}
                  alt={activeDoc.title}
                  className="w-full max-w-[740px] h-auto self-start bg-white shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <iframe
                key={activeDoc.id}
                src={activeDoc.pdfUrl}
                title={activeDoc.title}
                className="h-[540px] sm:h-[660px] w-full bg-zinc-900"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
