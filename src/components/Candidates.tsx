'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, UserCheck, Upload, CheckCircle2, Clock, MapPin, ArrowRight, ShieldCheck, HeartHandshake, FileText, Search, Sparkles, Building2 } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const candidatePerks = [
  {
    title: 'Temporary Opportunities',
    desc: 'Access immediate shift bookings across leading care homes and construction sites in Liverpool.',
    image: '/img-perk-shifts.jpg',
    badge: 'Immediate Work'
  },
  {
    title: 'Flexible Shifts',
    desc: 'Choose day, night, weekend, or part-time schedules that fit seamlessly around your lifestyle.',
    image: '/img-perk-pay.jpg',
    badge: 'Work-Life Balance'
  },
  {
    title: 'Permanent Roles',
    desc: 'Fast-track your career with direct permanent placements at reputable health and construction employers.',
    image: '/img-perk-career.jpg',
    badge: 'Career Growth'
  },
  {
    title: 'Support Throughout Your Placement',
    desc: 'Dedicated recruitment consultants offering onboarding assistance, weekly payroll, and 24/7 check-ins.',
    image: '/img-perk-support.jpg',
    badge: 'Full Backing'
  }
];

const liveOpenings = [
  { title: "Senior Support Worker", sector: "Health & Social Care", rate: "£14.50 - £17.00/hr", location: "Liverpool", type: "Flexible Shifts", image: "/img-elderly-care.jpg" },
  { title: "Site Supervisor (SSSTS)", sector: "Construction", rate: "£22.00 - £26.00/hr", location: "Liverpool City Centre", type: "Project", image: "/img-site-manager.jpg" },
  { title: "Healthcare Assistant", sector: "Health & Social Care", rate: "£12.50 - £15.00/hr", location: "Merseyside Care Homes", type: "Temp & Perm", image: "/img-nurse-portrait.jpg" },
  { title: "18th Edition Electrician", sector: "Construction", rate: "£23.00 - £26.00/hr", location: "Liverpool Region", type: "Contract", image: "/img-electrician.jpg" },
  { title: "Mental Health Support Worker", sector: "Health & Social Care", rate: "£13.50 - £16.00/hr", location: "Supported Living", type: "Full-Time", image: "/img-mental-health-support.jpg" },
  { title: "Joiner / Carpenter", sector: "Construction", rate: "£20.00 - £24.00/hr", location: "North West Sites", type: "Immediate Start", image: "/img-carpenter.jpg" },
];

export default function Candidates() {
  const { openCandidateModal, openJobBoardModal } = useModal();

  return (
    <section className="min-h-screen bg-[#09090b]">

      {/* — PAGE HERO (Looking for Work?) — */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-grid opacity-30 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <Badge variant="purple" className="mb-5">Join Our Talent Network</Badge>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Looking for Work?
              </h1>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                Join Norbitlink and discover opportunities across <strong className="text-cyan-300 font-semibold">Health & Social Care</strong> and <strong className="text-purple-300 font-semibold">Construction</strong> throughout Liverpool and Merseyside.
              </p>
              
              {/* CTAs: Register | Upload Your CV | View Jobs */}
              <div className="flex flex-wrap gap-3.5 mb-10">
                <Button onClick={() => openCandidateModal('register')} size="lg" className="bg-purple-600 hover:bg-purple-500 text-white group shadow-lg shadow-purple-950/50">
                  <span>Register</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={() => openCandidateModal('upload')} variant="outline" size="lg" className="flex items-center gap-2 text-white border-neutral-700">
                  <Upload size={16} className="text-purple-400" />
                  <span>Upload Your CV</span>
                </Button>
                <Button onClick={openJobBoardModal} variant="ghost" size="lg" className="text-cyan-400 hover:text-cyan-300 hover:bg-neutral-900 flex items-center gap-2">
                  <Search size={16} />
                  <span>View Jobs</span>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-neutral-800/80 pt-6">
                <div>
                  <div className="text-sm font-bold text-white">Temporary</div>
                  <div className="text-xs text-neutral-500 font-mono">Immediate Roles</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Flexible</div>
                  <div className="text-xs text-neutral-500 font-mono">Shift Choices</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Permanent</div>
                  <div className="text-xs text-neutral-500 font-mono">Career Paths</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Full Support</div>
                  <div className="text-xs text-neutral-500 font-mono">Placement Care</div>
                </div>
              </div>
            </div>

            {/* Right Photo Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
                <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden">
                  <img
                    src="/img-candidates.jpg"
                    alt="Norbitlink Candidate Network"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-950 border border-purple-800 text-purple-400">
                      <UserCheck size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">Candidate Network</div>
                      <div className="text-[11px] text-neutral-400">Healthcare & Trades Opportunities</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 px-2 py-1 rounded bg-purple-950 border border-purple-800/50">
                    Weekly Pay
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* — WE OFFER (4 Core Candidate Benefits from Brief) — */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-purple-400 block mb-1">Candidate Benefits</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">We Offer</h2>
          </div>
          <Separator className="flex-1 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {candidatePerks.map((perk, idx) => (
            <div key={idx} className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={perk.image}
                  alt={perk.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-700 text-xs font-mono font-bold text-purple-400">
                  {perk.badge}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{perk.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">{perk.desc}</p>
                </div>
                <div className="pt-3 border-t border-neutral-800 text-[11px] font-mono text-purple-400 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Norbitlink Advantage
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* — FEATURED OPENINGS CAROUSEL / GRID — */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-purple-400 block mb-1">Live Opportunities</span>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">Active Placements in Liverpool & North West</h2>
            </div>
            <Button onClick={openJobBoardModal} variant="outline" size="sm" className="text-xs">
              View All Openings
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveOpenings.map((job, idx) => (
              <div key={idx} className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-[10px] font-mono font-bold text-neutral-300 uppercase">
                    {job.sector}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-cyan-950/90 border border-cyan-800 text-xs font-mono font-bold text-cyan-400">
                    {job.rate}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-neutral-400 mb-4 font-mono">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openCandidateModal('register')}
                    className="w-full py-2.5 rounded-xl bg-neutral-950 hover:bg-purple-950/60 border border-neutral-800 hover:border-purple-800/60 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-all"
                  >
                    <span>Apply via Norbitlink</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* — READY TO JOIN? BANNER — */}
        <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <Badge variant="purple" className="mb-3">Ready to Join?</Badge>
            <h3 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Start your next placement with Norbitlink today.
            </h3>
            <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed">
              Register online, upload your CV for fast-track review, or browse current vacancies across Merseyside.
            </p>
          </div>
          <div className="flex flex-wrap gap-3.5 shrink-0 w-full lg:w-auto">
            <Button onClick={() => openCandidateModal('register')} size="lg" className="bg-purple-600 hover:bg-purple-500 text-white">
              <span>Register</span>
            </Button>
            <Button onClick={() => openCandidateModal('upload')} variant="outline" size="lg">
              <span>Upload Your CV</span>
            </Button>
            <Button onClick={openJobBoardModal} variant="ghost" size="lg" className="text-cyan-400 hover:text-cyan-300">
              <span>View Jobs</span>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
