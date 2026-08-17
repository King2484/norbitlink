'use client';

import { motion } from 'framer-motion';
import { Building2, CheckCircle2, Clock, Users, ArrowRight, ShieldCheck, FileCheck, Phone, Zap, Briefcase } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const howItWorksSteps = [
  {
    step: '01',
    title: 'Tell Us Your Requirement',
    desc: 'Share your specific staffing requirements, shift dates, headcount, required certifications, and site location with our recruitment desk.',
    image: '/img-step-consult.jpg',
    tag: 'Consultation'
  },
  {
    step: '02',
    title: 'We Find Suitable Candidates',
    desc: 'Our specialist consultants match your role against our pre-screened talent pool across Health & Social Care and Construction.',
    image: '/img-step-match.jpg',
    tag: 'Matching'
  },
  {
    step: '03',
    title: 'Compliance Checks',
    desc: 'Full verification of Right-to-Work, Enhanced DBS, training credentials, references, and CSCS/NMC registrations before dispatch.',
    image: '/img-step-audit.jpg',
    tag: 'Audit'
  },
  {
    step: '04',
    title: 'Placement',
    desc: 'Candidate arrives on site or shift fully briefed, certified, and ready to deliver immediate impact with ongoing check-ins.',
    image: '/img-step-deploy.jpg',
    tag: 'Deployment'
  },
];

const ourSolutions = [
  {
    title: 'Temporary Staffing',
    desc: 'Flexible workforce support when you need it for scheduled shift gaps, planned leave, and surge coverage.',
    image: '/img-care-team.jpg',
    badge: 'Flexible Rota',
    icon: <Clock size={20} className="text-cyan-400" />
  },
  {
    title: 'Emergency Cover',
    desc: 'Rapid-response short-notice shift fill for last-minute sickness and unexpected staffing deficits.',
    image: '/img-contact-phone.jpg',
    badge: 'Rapid Response',
    icon: <Zap size={20} className="text-pink-400" />
  },
  {
    title: 'Permanent Recruitment',
    desc: 'Helping employers find the right people for long-term roles, from senior care officers to project managers.',
    image: '/img-client-handshake.jpg',
    badge: 'Direct Hire',
    icon: <Briefcase size={20} className="text-purple-400" />
  },
  {
    title: 'Project Staffing',
    desc: 'End-to-end workforce provisioning for large commercial construction contracts and new care scheme openings.',
    image: '/img-heavy-plant.jpg',
    badge: 'Volume Provision',
    icon: <Users size={20} className="text-amber-400" />
  }
];

export default function Employers() {
  const { openEmployerModal } = useModal();

  return (
    <section className="min-h-screen bg-[#09090b]">

      {/* — PAGE HERO (Need Staff?) — */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-grid opacity-30 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 sm:pt-36 lg:pt-40 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <Badge variant="default" className="mb-5">Workforce Solutions</Badge>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Need Staff?
              </h1>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                We help employers find reliable people quickly and efficiently. Whether you need temporary cover, additional project staff or a permanent employee, our team can help.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Button onClick={openEmployerModal} size="lg" className="group shadow-lg shadow-cyan-950/50">
                  <span>Request Staff</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="tel:+441517008920">
                  <Button variant="outline" size="lg" className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>Call 0151 700 8920</span>
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-neutral-800/80 pt-6">
                <div>
                  <div className="text-base font-bold text-white">Temporary</div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Flexible Cover</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white">Emergency</div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Rapid Dispatch</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white">Permanent</div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Long-Term Roles</div>
                </div>
              </div>
            </div>

            {/* Right Photo Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
                <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden">
                  <img
                    src="/img-boardroom-meeting.jpg"
                    alt="Norbitlink Corporate Consultation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">Client Partnership</div>
                      <div className="text-[11px] text-neutral-400">Tailored Workforce Provision</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 px-2 py-1 rounded bg-cyan-950 border border-cyan-800/50">
                    Liverpool HQ
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* — HOW IT WORKS (Tell Us Your Requirement → We Find Suitable Candidates → Compliance Checks → Placement) — */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Simple 4-Step Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">How It Works</h2>
          </div>
          <Separator className="flex-1 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {howItWorksSteps.map((s, idx) => (
            <div key={idx} className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-700 text-xs font-mono font-bold text-cyan-400">
                  Step {s.step}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">{s.desc}</p>
                </div>
                <div className="pt-3 border-t border-neutral-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={12} /> {s.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* — OUR SOLUTIONS (Temporary, Emergency, Permanent, Project) — */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Tailored Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Our Solutions</h2>
            </div>
            <Separator className="flex-1 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourSolutions.map((sol, idx) => (
              <div key={idx} className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 p-2 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700">
                    {sol.icon}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                      {sol.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{sol.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">{sol.desc}</p>
                  </div>
                  <Button onClick={openEmployerModal} size="sm" className="w-full">
                    Request Staff
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* — BOTTOM CTA BANNER — */}
        <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <Badge variant="default" className="mb-3">Start Hiring</Badge>
            <h3 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Ready to find reliable people for your organisation?
            </h3>
            <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed">
              Speak directly with our recruitment desk or submit your staffing requirements online.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full lg:w-auto">
            <Button onClick={openEmployerModal} size="lg" className="w-full sm:w-auto">
              <span>Request Staff</span>
              <ArrowRight size={15} />
            </Button>
            <a href="tel:+441517008920" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                0151 700 8920
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
