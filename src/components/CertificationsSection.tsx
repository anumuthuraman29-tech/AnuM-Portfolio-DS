import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, Download, ExternalLink, Eye, X } from 'lucide-react';
import { CERTIFICATES, type CertificateItem } from '../data/portfolioData';

type IssuerFilter = 'All' | 'Infosys' | 'IBM' | 'Glowlogics & Coursera';

export default function CertificationsSection() {
  const [filter, setFilter] = useState<IssuerFilter>('All');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  useEffect(() => {
    if (!selectedCert) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedCert]);

  const filtered =
    filter === 'All'
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.group === filter);

  return (
    <section id="credentials" className="border-b border-white/10 bg-[#060606] py-16 sm:py-20">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between border-b border-white/10 pb-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#EF1D32]">
              Verified Credentials ({CERTIFICATES.length})
            </p>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              Certifications
            </h2>
          </div>

          <div
            className="flex flex-wrap items-center gap-1 border border-white/10 bg-[#0D0D10] p-1 self-start lg:self-auto"
            role="tablist"
            aria-label="Filter certifications by issuer"
          >
            {(['All', 'Infosys', 'IBM', 'Glowlogics & Coursera'] as const).map((group) => {
              const active = filter === group;
              return (
                <button
                  key={group}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(group)}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-[0.06em] transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#D91629] text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {group}
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((cert, idx) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="group flex flex-col justify-between border border-white/10 bg-[#0D0D10] p-5 transition-colors duration-200 hover:border-[#D91629]/65"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
                  <span className="text-[#EF1D32] uppercase tracking-[0.08em]">
                    {cert.issuer}
                  </span>
                  <span className="tabular-nums">{cert.issueDate}</span>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold uppercase leading-snug tracking-tight text-white group-hover:text-[#EF1D32] transition-colors">
                  {cert.title}
                </h3>

                <p className="mt-2 font-mono text-[11px] text-zinc-500">
                  {cert.credentialNote}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-2 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:text-[#EF1D32]"
                >
                  <Eye className="h-3.5 w-3.5 text-[#EF1D32]" aria-hidden="true" />
                  <span>Preview</span>
                </button>

                <a
                  href={cert.pdfUrl}
                  download={cert.downloadFilename}
                  aria-label={`Download ${cert.title} PDF`}
                  className="inline-flex items-center gap-1.5 border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-300 transition-colors hover:border-[#D91629] hover:text-white"
                >
                  <Download className="h-3 w-3 text-[#EF1D32]" aria-hidden="true" />
                  <span>PDF</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive Certificate PDF Preview Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="flex h-[88vh] w-full max-w-4xl flex-col border border-white/15 bg-[#0D0D10] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#EF1D32]">
                  {selectedCert.issuer} · {selectedCert.issueDate}
                </p>
                <h3
                  id="cert-modal-title"
                  className="truncate font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white"
                >
                  {selectedCert.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-white/20 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-200 transition-colors hover:border-white hover:text-white"
                  >
                    <span>Verify Online</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}

                <a
                  href={selectedCert.pdfUrl}
                  download={selectedCert.downloadFilename}
                  className="inline-flex items-center gap-1.5 bg-[#D91629] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#EF1D32]"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate preview"
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-zinc-300 transition-colors hover:border-white hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Credential Metadata Strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-[#08080A] px-5 py-2.5 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Award className="h-3.5 w-3.5 text-[#EF1D32]" aria-hidden="true" />
                <span>Awarded to <strong className="text-zinc-200">{selectedCert.recipient}</strong></span>
              </div>
              <span className="font-mono text-[11px]">{selectedCert.credentialNote}</span>
            </div>

            {/* Embedded PDF Preview */}
            <iframe
              src={selectedCert.pdfUrl}
              title={`${selectedCert.title} PDF Preview`}
              className="h-full w-full flex-1 bg-zinc-900"
            />
          </div>
        </div>
      )}
    </section>
  );
}
