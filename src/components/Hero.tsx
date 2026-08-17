'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, ShieldCheck, HeartPulse, HardHat, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  const { openEmployerModal, openCandidateModal } = useModal();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#09090b] overflow-hidden pt-28 pb-20">

      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 bg-mesh-grid opacity-30 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-[-100px] bottom-0 w-[500px] h-[500px] bg-purple-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* 12-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* LEFT — Content (6 cols) */}
          <div className="lg:col-span-6">
            
            {/* Location & Company Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                <MapPin size={13} className="text-cyan-400" />
                <span>Liverpool, UK</span>
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-400">Company No: 15012328</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
            >
              Specialist{' '}
              <span className="text-cyan-400">Recruitment</span>
              <br />
              Connecting Talent,{' '}
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                Powering Teams.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Norbitlink Ltd provides fully vetted, compliant temporary and permanent staffing solutions across{' '}
              <strong className="text-cyan-300 font-semibold">Health & Social Care</strong> and{' '}
              <strong className="text-purple-300 font-semibold">Construction</strong> throughout Liverpool, Merseyside, and the North West.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3.5 mb-10"
            >
              <Button onClick={openEmployerModal} size="lg" className="group shadow-lg shadow-cyan-950/40">
                <span>Request Staff</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => openCandidateModal('register')} variant="outline" size="lg" className="border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white">
                Find Work
              </Button>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                About Norbitlink <ArrowUpRight size={14} />
              </Link>
            </motion.div>

            {/* Trust highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-neutral-800/80 pt-6 max-w-lg"
            >
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>100% DBS & Right-to-Work Audited</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                <span>CSCS & CPCS Card Verified Trades</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>Temporary, Contract & Permanent</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                <span>Liverpool HQ — Merseyside Wide</span>
              </div>
            </motion.div>
          </div>

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
                  alt="Norbitlink Healthcare Assistant with patient in Liverpool residential care facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Floating Sector Tag */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold flex items-center gap-1.5">
                    <HeartPulse size={13} className="text-cyan-400" /> Health & Care
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    Health & Social Care
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    HCAs, Care Assistants, Support Workers & Nursing Staff across residential and supported living.
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
                  alt="Norbitlink Construction site supervisors and trades reviewing blueprints on site"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Floating Sector Tag */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-purple-500/40 text-purple-300 text-xs font-mono font-bold flex items-center gap-1.5">
                    <HardHat size={13} className="text-purple-400" /> Construction
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                    Construction & Trades
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    CSCS Labourers, Carpenters, Electricians, Plant Operators & SMSTS Site Managers.
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
    </section>
  );
}
