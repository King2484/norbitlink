'use client';

import Link from 'next/link';
import { ArrowUp, MapPin, Phone, Mail, HeartHandshake, HardHat, ArrowRight, ShieldCheck } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const footerGallery = [
  { img: "/img-liverpool.jpg", title: "Liverpool Headquarters", sub: "131 Mount Pleasant" },
  { img: "/img-footer-care.jpg", title: "Health & Social Care", sub: "Vetted Care & Support" },
  { img: "/img-footer-site.jpg", title: "Construction Division", sub: "Commercial & Housing" },
  { img: "/img-candidate-screening.jpg", title: "Compliance Audits", sub: "Quality Assured" },
];

export default function Footer() {
  const { openEmployerModal, openCandidateModal } = useModal();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400">

      {/* — TOP CTA BAND — */}
      <div className="border-b border-neutral-800">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            {/* Brand */}
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Norbitlink Logo" className="h-12 w-auto object-contain shrink-0" />
              <div>
                <div className="text-lg font-extrabold text-white tracking-tight">NORBITLINK LTD</div>
                <div className="text-xs text-neutral-400 font-medium">
                  Connecting People. Supporting Organisations. Building Better Workforces.
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xs text-neutral-400 leading-relaxed hidden lg:block text-center font-mono">
              Health & Social Care | Construction | Temporary Staffing | Permanent Recruitment
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 lg:justify-end">
              <Button onClick={openEmployerModal} size="sm">
                Need Staff? <ArrowRight size={14} />
              </Button>
              <Button onClick={() => openCandidateModal('register')} variant="outline" size="sm">
                Find Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* — 4-PHOTO VISUAL STRIP IN FOOTER — */}
      <div className="border-b border-neutral-800/80 bg-[#09090b]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {footerGallery.map((item, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center gap-3 p-2.5 shadow-md">
                <div className="relative h-14 w-14 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-white truncate">{item.title}</div>
                  <div className="text-[11px] text-neutral-400 truncate">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* — FOOTER GRID — */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Company info */}
          <div>
            <h4 className="text-sm font-extrabold text-white mb-4">Norbitlink Ltd</h4>
            <p className="text-xs leading-relaxed mb-5">
              Liverpool-based recruitment agency providing reliable temporary and permanent staff across the Health & Social Care and Construction sectors.
            </p>
            <div className="text-xs font-mono">
              <strong className="text-white block mb-1">Company Number:</strong>
              <span>15012328 (England & Wales)</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <HeartHandshake size={12} className="text-cyan-400 shrink-0" />
                <Link href="/services/healthcare">Health & Social Care</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                <HardHat size={12} className="text-purple-400 shrink-0" />
                <Link href="/services/construction">Construction</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <span className="w-3 h-px bg-cyan-400 shrink-0" />
                <Link href="/employers">Temporary Staffing</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                <span className="w-3 h-px bg-purple-400 shrink-0" />
                <Link href="/employers">Permanent Recruitment</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Health & Care', href: '/services/healthcare' },
                { label: 'Construction', href: '/services/construction' },
                { label: 'For Employers', href: '/employers' },
                { label: 'For Candidates', href: '/candidates' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">Headquarters</h4>
            <address className="not-italic space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>131 Mount Pleasant, Liverpool, L3 5TF</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-purple-400 shrink-0" />
                <a href="tel:+441517008920" className="hover:text-white transition-colors">+44 (0) 151 700 8920</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-pink-400 shrink-0" />
                <a href="mailto:info@norbitlink.co.uk" className="hover:text-white transition-colors">info@norbitlink.co.uk</a>
              </div>
            </address>
          </div>

        </div>
      </div>

      {/* — BOTTOM BAR — */}
      <div className="border-t border-neutral-900 bg-black">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Norbitlink Limited. All rights reserved. Registered in England & Wales (No. 15012328).</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

    </footer>
  );
}
