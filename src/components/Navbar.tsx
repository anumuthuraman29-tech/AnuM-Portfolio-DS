import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Resume', href: '#resume' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060606]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-8 px-4 py-3.5 sm:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-[0.06em] text-white whitespace-nowrap shrink-0 transition-colors hover:text-[#D91629] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D91629]"
        >
          ANU M.
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary Navigation">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[13px] font-medium tracking-[0.06em] uppercase text-zinc-300 transition-colors duration-200 hover:text-white whitespace-nowrap shrink-0 after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[#D91629] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D91629]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={PROFILE.primaryResumeUrl}
            download={PROFILE.primaryResumeFilename}
            className="hidden sm:inline-flex items-center gap-2 bg-[#D91629] px-4 py-2 text-xs font-semibold tracking-[0.08em] uppercase text-white transition-all duration-200 hover:bg-[#EF1D32] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Download Resume</span>
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex md:hidden items-center justify-center p-2.5 text-zinc-200 border border-white/15 hover:border-[#D91629] hover:text-white transition-colors"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0A0C] px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-3 text-sm font-medium tracking-[0.06em] uppercase text-zinc-200 hover:bg-white/5 hover:text-white border-b border-white/5 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={PROFILE.primaryResumeUrl}
              download={PROFILE.primaryResumeFilename}
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-[#D91629] px-4 py-3 text-xs font-semibold tracking-[0.08em] uppercase text-white"
            >
              <span>Download Resume</span>
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
