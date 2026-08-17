'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, HeartPulse, HardHat, ShieldCheck, Clock, UserCheck, Sparkles } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const heroBadges = [
  'Quality & Compliance First',
  'Reliable Candidates Verified',
  'Liverpool HQ (131 Mount Pleasant)',
  'Responsive 24/7 Service',
];

const quickGalleries = [
  { title: "Health & Social Care", tag: "Vetted Care & Support", img: "/img-healthcare.jpg", href: "/services/healthcare" },
  { title: "Construction Division", tag: "Skilled Trades & Site", img: "/img-construction.jpg", href: "/services/construction" },
  { title: "Temporary Staffing", tag: "Flexible Workforce", img: "/img-care-team.jpg", href: "/employers" },
  { title: "Permanent Recruitment", tag: "Long-Term Roles", img: "/img-boardroom-meeting.jpg", href: "/employers" },
  { title: "Clinical & Nursing", tag: "DBS & NMC Checks", img: "/img-nurse.jpg", href: "/services/healthcare" },
  { title: "Plant & Groundworks", tag: "CPCS / CSCS Verified", img: "/img-heavy-plant.jpg", href: "/services/construction" },
];

export default function Hero() {
  const { openEmployerModal, openCandidateModal } = useModal();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center bg-[#09090b] overflow-hidden pt-10 pb-20 border-b border-neutral-800">
      
      {/* Background Gradients & Mesh Grid */}
      <div className="absolute inset-0 bg-mesh-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-950/20 via-purple-950/20 to-pink-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          
          {/* LEFT — Typography & Actions (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Top Corporate Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-md mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono font-medium text-neutral-300">
                Specialist Health & Social Care and Construction Recruitment
              </span>
            </div>

            {/* Main Headline as specified by client */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
              Connecting People.<br />
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Supporting Organisations.
              </span>
            </h1>

            {/* Subheading from client brief */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl mb-4">
              Norbitlink Ltd is a Liverpool-based recruitment agency providing reliable temporary and permanent staff across the{' '}
              <strong className="text-cyan-300 font-semibold">Health & Social Care</strong> and{' '}
              <strong className="text-purple-300 font-semibold">Construction</strong> sectors.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-xl mb-8">
              We focus on quality, compliance, reliability and responsive service.
            </p>

            {/* Primary Action Buttons: Need Staff? | Find Work */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                onClick={openEmployerModal}
                size="lg"
                className="w-full sm:w-auto text-sm font-bold shadow-xl shadow-cyan-950/40 group"
              >
                <span>Need Staff?</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => openCandidateModal('register')}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-sm font-bold border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white"
              >
                <span>Find Work</span>
              </Button>
            </div>

            {/* Trust Badges Row */}
            <div className="grid grid-cols-2 gap-3 w-full border-t border-neutral-800/80 pt-6">
              {heroBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                  <span className="truncate">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Dual Multi-Image Editorial Layout (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            
            {/* Image Card 1: Healthcare Division */}
            <Link
              href="/services/healthcare"
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col shadow-xl"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="/img-healthcare.jpg"
                  alt="Norbitlink Health & Social Care Staffing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold flex items-center gap-1.5">
                    <HeartPulse size={13} className="text-cyan-400" /> Health & Social Care
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    Health & Social Care
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Reliable, appropriately vetted care and support staff across residential care, nursing, and supported living.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400">
                  <span>Explore Division</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Image Card 2: Construction Division */}
            <Link
              href="/services/construction"
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col shadow-xl sm:translate-y-6"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="/img-construction.jpg"
                  alt="Norbitlink Construction Recruitment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-purple-500/40 text-purple-300 text-xs font-mono font-bold flex items-center gap-1.5">
                    <HardHat size={13} className="text-purple-400" /> Construction
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                    Construction Division
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Skilled and dependable workers for construction projects, commercial builds, and residential developments.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-purple-400">
                  <span>Explore Division</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

          </motion.div>

        </div>
      </div>

      {/* — HERO BOTTOM 6-PHOTO DISPATCH GALLERY — */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] uppercase font-mono font-bold text-neutral-400 tracking-wider">
            Connecting People. Supporting Organisations. Building Better Workforces.
          </span>
          <Separator className="flex-1" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {quickGalleries.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-200 flex flex-col shadow-md"
            >
              <div className="relative h-28 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              </div>
              <div className="p-3">
                <div className="text-[10px] font-mono text-cyan-400 mb-0.5 truncate">{item.tag}</div>
                <div className="text-xs font-bold text-white truncate">{item.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
