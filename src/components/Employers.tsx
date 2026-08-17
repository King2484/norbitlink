'use client';

import { motion } from 'framer-motion';
import { ArrowRight, UserCheck, CheckCircle2, Clock, Sparkles, Briefcase, Building2, ChevronRight, ShieldCheck, PhoneCall, FileCheck, Award, Users } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const steps = [
  { num: "01", title: "Define Requirement", image: "/img-step-consult.jpg", desc: "Detail your required headcount, clinical or trade specialism, shift patterns, and site location." },
  { num: "02", title: "Candidate Matching", image: "/img-step-match.jpg", desc: "Our recruitment specialists match vetted personnel possessing verified skills and qualifications." },
  { num: "03", title: "Compliance Audit", image: "/img-step-audit.jpg", desc: "Every file verified: Right-to-Work, Enhanced DBS / CSCS cards, references, and mandatory training." },
  { num: "04", title: "Site Deployment", image: "/img-step-deploy.jpg", desc: "Operatives arrive on site induction-ready, supported by continuous account manager oversight." },
];

const solutions = [
  {
    title: "Temporary & Ad-Hoc Staffing",
    desc: "Fast, flexible workforce cover for staff sickness, seasonal peaks, holiday backfill, or unexpected surges.",
    badge: "Flexible & On-Demand",
    color: "text-cyan-400",
    image: "/img-care-team.jpg",
    borderColor: "hover:border-cyan-500/40",
    icon: <Clock size={20} className="text-cyan-400" />,
  },
  {
    title: "Civil & Site Cover",
    desc: "Rapid-response plant machinery operators and groundwork gangs dispatched for active build deadlines.",
    badge: "Plant & Civils",
    color: "text-amber-400",
    image: "/img-heavy-plant.jpg",
    borderColor: "hover:border-amber-500/40",
    icon: <Sparkles size={20} className="text-amber-400" />,
  },
  {
    title: "Permanent Placement",
    desc: "End-to-end retained search, talent screening, and candidate onboarding for long-term senior staff and management.",
    badge: "Permanent Search",
    color: "text-purple-400",
    image: "/img-client-handshake.jpg",
    borderColor: "hover:border-purple-500/40",
    icon: <UserCheck size={20} className="text-purple-400" />,
  },
  {
    title: "Project Scale Teams",
    desc: "Turnkey multi-person workforce deployments for major health expansions or new construction phases.",
    badge: "Volume Provisioning",
    color: "text-pink-400",
    image: "/img-diverse-workers.jpg",
    borderColor: "hover:border-pink-500/40",
    icon: <Briefcase size={20} className="text-pink-400" />,
  },
];

export default function Employers() {
  const { openEmployerModal } = useModal();

  return (
    <section className="min-h-screen bg-[#09090b]">

      {/* — HERO BANNER WITH REAL RECRUITMENT CONSULTATION PHOTOGRAPHY — */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-grid opacity-30 pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <Badge variant="default" className="mb-5">Employer Workforce Solutions</Badge>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Your Staffing Demands,<br />
                <span className="text-cyan-400">Solved Without Friction.</span>
              </h1>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                Whether you manage care homes in Liverpool requiring last-minute HCA cover or major construction sites
                demanding certified tradespeople — Norbitlink delivers fully audited, reliable workers when you need them.
              </p>
              
              <div className="flex flex-wrap gap-3.5 mb-10">
                <Button onClick={openEmployerModal} size="lg" className="group shadow-lg shadow-cyan-950/50">
                  <span>Request Staff for Your Team</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="tel:+441517008920" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 text-sm font-semibold transition-colors">
                  <PhoneCall size={15} className="text-cyan-400" />
                  <span>Telephone: 0151 700 8920</span>
                </a>
              </div>

              {/* Trust checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-neutral-800/80 pt-6">
                {[
                  'Complete Right-to-Work & DBS Audits',
                  'Dedicated 24/7 Account Consultant',
                  'Emergency Cover in under 2 Hours',
                  'Transparent, Competitive Charge Rates'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
                <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden">
                  <img
                    src="/img-boardroom-meeting.jpg"
                    alt="Corporate recruitment consultation and client agreement meeting in modern Liverpool office"
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
                      <div className="text-xs font-mono font-bold text-white">Dedicated Client Account</div>
                      <div className="text-[11px] text-neutral-400">Temporary · Contract · Permanent</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 px-2 py-1 rounded bg-cyan-950 border border-cyan-800/50">
                    SLA Guaranteed
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">

        {/* — RECRUITMENT INTERVIEW & VETTING SPOTLIGHT SECTION — */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24 rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-12 shadow-2xl">
          
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-neutral-800 shadow-xl h-72 sm:h-96">
            <img
              src="/img-candidate-screening.jpg"
              alt="Norbitlink Recruitment consultant conducting in-depth candidate compliance interview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-mono font-bold text-cyan-400 bg-neutral-950/90 px-3 py-1.5 rounded-lg border border-neutral-800">
                1-on-1 Candidate Vetting
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <Badge variant="default" className="mb-3 w-fit">Rigorous Pre-Screening</Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Every Candidate Personally Interviewed & Background Checked
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              We do not simply forward raw CVs. Every healthcare assistant, support worker, and tradesperson
              undergoes face-to-face screening, rigorous identity verification, and 5-year employment reference checks before deployment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { title: 'Enhanced DBS (Adults Barred)', desc: 'Pre-screened against barring lists' },
                { title: 'Right to Work Verification', desc: 'Home Office compliant checks' },
                { title: 'CSCS / CPCS Validated', desc: 'CITB card status live validation' },
                { title: 'Mandatory Care Certificates', desc: 'Practical moving & handling audited' },
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="text-xs font-bold text-white mb-0.5">{item.title}</div>
                  <div className="text-[11px] text-neutral-400">{item.desc}</div>
                </div>
              ))}
            </div>

            <Button onClick={openEmployerModal} size="lg" className="w-full sm:w-fit group">
              <span>Discuss Staffing Requirements</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>

        {/* — SOLUTIONS GRID WITH UNIQUE NON-REPEATING PHOTO CARDS — */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Flexible Models</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Staffing Solutions Tailored to You</h2>
            </div>
            <Separator className="flex-1 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {solutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 transition-all duration-300 flex flex-col justify-between shadow-xl ${sol.borderColor}`}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 p-2 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700">
                    {sol.icon}
                  </div>
                  <div className="absolute top-3.5 right-3.5">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 ${sol.color}`}>
                      {sol.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{sol.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-6">{sol.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <span className={`flex items-center gap-1.5 text-xs font-semibold ${sol.color}`}>
                      <CheckCircle2 size={13} /> SLA Ready
                    </span>
                    <button
                      onClick={openEmployerModal}
                      className={`text-xs font-bold flex items-center gap-1 ${sol.color} hover:opacity-80 transition-opacity`}
                    >
                      <span>Request Cover</span>
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* — PROCESS TIMELINE WITH REAL PHOTOS — */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Our Deployment Process</span>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">How We Fill Your Vacancies</h2>
            </div>
            <Separator className="flex-1 hidden sm:block" />
            <span className="text-xs font-mono text-neutral-500">4-stage workflow</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 flex flex-col justify-between shadow-xl"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-xl bg-cyan-950/90 backdrop-blur-md border border-cyan-800 text-cyan-400 font-mono font-extrabold text-sm flex items-center justify-center">
                    {step.num}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-neutral-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Stage {idx + 1} Managed
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
