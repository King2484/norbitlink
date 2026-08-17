'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, UserCheck, Zap, Target, HeartHandshake, MapPin, Award, Building2, CheckCircle2, HeartPulse, HardHat, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const whyUs = [
  {
    icon: <ShieldCheck className="text-cyan-400" size={20} />,
    title: "Rigorous Compliance",
    image: "/img-pillar-compliance.jpg",
    desc: "Comprehensive Right-to-Work, Enhanced DBS, references, and qualification audits before deployment."
  },
  {
    icon: <UserCheck className="text-purple-400" size={20} />,
    title: "Dependable Talent Pool",
    image: "/img-pillar-talent.jpg",
    desc: "Pre-screened professionals ready for immediate temporary shifts, block bookings, or permanent hires."
  },
  {
    icon: <Zap className="text-amber-400" size={20} />,
    title: "Rapid Shift Dispatch",
    image: "/img-pillar-dispatch.jpg",
    desc: "Swift turnaround times for emergency shift cover across Merseyside care homes and building sites."
  },
  {
    icon: <Target className="text-pink-400" size={20} />,
    title: "Specialist Focus",
    image: "/img-pillar-specialist.jpg",
    desc: "Exclusively focused on Health & Social Care and Construction — no diluted generalist recruitment."
  }
];

const stats = [
  { value: '24/7', label: 'Support Operations' },
  { value: '100%', label: 'DBS & RTW Audited' },
  { value: '2', label: 'Specialist Divisions' },
  { value: '15012328', label: 'UK Company Reg.' },
];

export default function About() {
  return (
    <section className="py-28 bg-neutral-950 relative overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900/60 to-transparent" />
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-cyan-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* — TOP: Split Header with Liverpool HQ Photo — */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">

          {/* Left info column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Badge variant="default" className="mb-4">About Norbitlink Limited</Badge>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Liverpool&apos;s Dedicated<br />
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Specialist Staffing Partner
              </span>
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-6">
              Norbitlink Ltd is a UK-registered specialist recruitment agency based in the heart of Liverpool.
              Our mission is simple: bridge the critical staffing gap by connecting vetted, high-calibre professionals
              with care providers and construction contractors when they need them most.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Whether you need rapid temporary shift cover for a residential care home, qualified nurses,
              or certified CPCS/CSCS trades on a commercial construction site — Norbitlink handles end-to-end vetting,
              safeguarding, and compliance.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
                  <div className="text-2xl font-extrabold text-white mb-0.5">{s.value}</div>
                  <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right photo column (5 cols) — Liverpool Waterfront HQ photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
              <div className="relative h-[340px] sm:h-[380px] w-full overflow-hidden">
                <img
                  src="/img-liverpool.jpg"
                  alt="Liverpool waterfront and skyline at dusk — Norbitlink Headquarters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">Liverpool Headquarters</div>
                    <div className="text-xs text-neutral-400">131 Mount Pleasant, Liverpool, L3 5TF</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold text-cyan-400 px-2 py-1 rounded bg-cyan-950/80 border border-cyan-800/50">
                  Reg. 15012328
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* — PHOTO GRID: OUR DUAL SECTOR COMMITMENT — */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Our Core Operations</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Dedicated Sector Divisions</h3>
            </div>
            <Separator className="flex-1 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Sector 1 Photo Card */}
            <div className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl flex flex-col group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="/img-care-team.jpg"
                  alt="Norbitlink Care Assistants collaborating at Liverpool care home nurses station"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="default">Health & Social Care</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Compassionate Healthcare Delivery</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    Providing residential care homes, supported living developments, and hospitals with fully audited, compassionate carers and nurses who prioritize resident dignity.
                  </p>
                </div>
                <Link href="/services/healthcare" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                  <span>Explore Healthcare Staffing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Sector 2 Photo Card */}
            <div className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl flex flex-col group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="/img-electrician.jpg"
                  alt="Commercial electrician testing sub-distribution board on UK commercial building development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="purple">Construction & Trades</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Qualified Technical Trades</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    Supplying CSCS and CPCS carded carpenters, 18th Edition electricians, plant operators, and site managers for commercial developments and infrastructure works.
                  </p>
                </div>
                <Link href="/services/construction" className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-purple-300">
                  <span>Explore Construction Trades</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* — MISSION BANNER — */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 mb-20 shadow-xl"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />
          <div className="p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="p-3.5 rounded-2xl bg-neutral-800 border border-neutral-700 text-cyan-400 shrink-0">
                <Award size={32} />
              </div>
              <div>
                <span className="text-xs uppercase font-mono font-bold text-cyan-400 tracking-widest block mb-2">Our Operating Mission</span>
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-white leading-snug">
                  Connecting reliable, compassionate professionals<br className="hidden md:block" /> with organisations that need them.
                </h3>
                <p className="text-xs text-neutral-400 mt-3 font-mono">
                  Full Compliance with UK Employment Regulations • Equal Opportunity Employer • Safe Recruitment Standards
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 shrink-0">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <CheckCircle2 size={14} className="text-cyan-400" /> NHS & CQC Standards Aligned
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
                <CheckCircle2 size={14} className="text-purple-400" /> CITB & CSCS Verification
              </div>
            </div>
          </div>
        </motion.div>

        {/* — WHY CHOOSE NORBITLINK PILLARS WITH INDIVIDUAL PHOTOS — */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Our Core Pillars</span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">Why Organisations Partner With Norbitlink</h3>
            </div>
            <Separator className="flex-1 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 p-2 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700">
                    {item.icon}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-neutral-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Verified Standard
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </section>
  );
}
