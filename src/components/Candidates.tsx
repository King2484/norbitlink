'use client';

import { motion } from 'framer-motion';
import { UserCheck, Upload, Briefcase, Calendar, HeartHandshake, CheckCircle2, Clock, ArrowRight, ShieldCheck, Sparkles, HeartPulse, HardHat, Zap, Ruler, Truck, Stethoscope } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const benefits = [
  {
    title: "Flexible Shift Patterns",
    desc: "Day, night, weekend, and block shifts tailored completely around your life, studies, or family commitments.",
    image: "/img-perk-shifts.jpg",
    icon: <Clock className="text-cyan-400" size={18} />,
    color: "border-cyan-500/30 hover:border-cyan-500/50",
  },
  {
    title: "Competitive Pay Rates",
    desc: "Top-tier hourly rates and prompt weekly or monthly payroll with statutory holiday entitlement.",
    image: "/img-perk-pay.jpg",
    icon: <Sparkles className="text-purple-400" size={18} />,
    color: "border-purple-500/30 hover:border-purple-500/50",
  },
  {
    title: "Permanent Career Roles",
    desc: "Direct permanent hires with NHS trusts, private care providers, and premier North West main contractors.",
    image: "/img-perk-career.jpg",
    icon: <UserCheck className="text-pink-400" size={18} />,
    color: "border-pink-500/30 hover:border-pink-500/50",
  },
  {
    title: "Dedicated Consultant Support",
    desc: "Continuous backing from a friendly recruitment consultant for onboarding, training, and shifts.",
    image: "/img-perk-support.jpg",
    icon: <HeartHandshake className="text-amber-400" size={18} />,
    color: "border-amber-500/30 hover:border-amber-500/50",
  },
];

const featuredRoles = [
  {
    title: "Healthcare Assistants & Carers",
    sector: "Care Homes & Domiciliary",
    image: "/img-care-home.jpg",
    pay: "£12.50 – £16.50 / hr",
    badgeColor: "text-cyan-400 border-cyan-800/60 bg-cyan-950/40",
    icon: <HeartPulse size={16} className="text-cyan-400" />
  },
  {
    title: "Registered Nurses (RGN/RMN)",
    sector: "Hospitals & Clinics",
    image: "/img-nurse-portrait.jpg",
    pay: "£24.00 – £36.00 / hr",
    badgeColor: "text-cyan-400 border-cyan-800/60 bg-cyan-950/40",
    icon: <Stethoscope size={16} className="text-cyan-400" />
  },
  {
    title: "Supported Living Workers",
    sector: "Autism & Learning Disability",
    image: "/img-supported-scheme.jpg",
    pay: "£13.00 – £17.00 / hr",
    badgeColor: "text-cyan-400 border-cyan-800/60 bg-cyan-950/40",
    icon: <HeartHandshake size={16} className="text-cyan-400" />
  },
  {
    title: "1st & 2nd Fix Carpenters",
    sector: "Residential & Commercial",
    image: "/img-carpenter.jpg",
    pay: "£20.00 – £26.00 / hr",
    badgeColor: "text-purple-400 border-purple-800/60 bg-purple-950/40",
    icon: <Ruler size={16} className="text-purple-400" />
  },
  {
    title: "Commercial Electricians",
    sector: "Commercial 3-Phase",
    image: "/img-electrician.jpg",
    pay: "£22.00 – £28.00 / hr",
    badgeColor: "text-purple-400 border-purple-800/60 bg-purple-950/40",
    icon: <Zap size={16} className="text-purple-400" />
  },
  {
    title: "Plant & 360 Excavator Drivers",
    sector: "Civils & Groundworks",
    image: "/img-heavy-plant.jpg",
    pay: "£19.00 – £24.00 / hr",
    badgeColor: "text-purple-400 border-purple-800/60 bg-purple-950/40",
    icon: <Truck size={16} className="text-purple-400" />
  },
];

const steps = [
  { num: "01", label: "Quick Online Registration", image: "/img-step-consult.jpg", desc: "Submit your basic details, contact info, and role preferences in under 2 minutes." },
  { num: "02", label: "Fast-Track Document Vetting", image: "/img-step-audit.jpg", desc: "We review your DBS, right-to-work, CSCS cards, and references quickly." },
  { num: "03", label: "Priority Job Matching", image: "/img-step-match.jpg", desc: "Our recruitment desk matches you with open shifts and high-pay vacancies." },
  { num: "04", label: "Induction & Start", image: "/img-step-deploy.jpg", desc: "Start working immediately with dedicated payroll and consultant support." },
];

export default function Candidates() {
  const { openCandidateModal, openJobBoardModal } = useModal();

  return (
    <section className="min-h-screen bg-[#09090b]">

      {/* — HERO BANNER WITH REAL CANDIDATES PHOTOGRAPHY — */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-grid opacity-30 pointer-events-none" />
        <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-purple-950/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <Badge variant="purple" className="mb-5">Candidate Career Hub</Badge>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Your Next Rewarding Role,<br />
                <span className="text-purple-400">Placed in Days.</span>
              </h1>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                Join Norbitlink and access high-paying shifts and permanent career roles across{' '}
                <strong className="text-cyan-300 font-semibold">Health & Social Care</strong> and{' '}
                <strong className="text-purple-300 font-semibold">Construction</strong> throughout Liverpool, Merseyside, and the North West.
              </p>
              
              <div className="flex flex-wrap gap-3.5 mb-10">
                <Button
                  onClick={() => openCandidateModal('register')}
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-500 text-white group shadow-lg shadow-purple-950/50"
                >
                  <span>Register as a Candidate</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={() => openCandidateModal('upload')} variant="outline" size="lg" className="border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white">
                  <Upload size={15} />
                  <span>Upload Your CV</span>
                </Button>
                <Button onClick={openJobBoardModal} variant="ghost" size="lg" className="text-purple-300 hover:text-white">
                  <Briefcase size={15} />
                  <span>Browse Vacancies</span>
                </Button>
              </div>

              {/* Trust perks row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-neutral-800/80 pt-6">
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <Clock size={15} className="text-purple-400" />
                    <span>Weekly Payroll</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Prompt & Reliable</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck size={15} className="text-purple-400" />
                    <span>Compliance Support</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">DBS & Training Checks</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <Sparkles size={15} className="text-purple-400" />
                    <span>Total Flexibility</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Choose Your Availability</div>
                </div>
              </div>
            </div>

            {/* Right Photo Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
                <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden">
                  <img
                    src="/img-candidates.jpg"
                    alt="Diverse group of UK healthcare, construction, and office professionals ready for job placement"
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
                      <div className="text-[11px] text-neutral-400">Care · Support · Trades</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 px-2 py-1 rounded bg-purple-950 border border-purple-800/50">
                    Active Roles
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* — 6-CARD PHOTO GALLERY: ROLES ACTIVELY RECRUITING (100% UNIQUE PHOTOS) — */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-purple-400 block mb-1">Current Openings</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Roles Actively Recruiting</h2>
          </div>
          <Separator className="flex-1 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {featuredRoles.map((role, i) => (
            <div key={i} className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={role.image}
                  alt={role.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                <div className="absolute top-3.5 left-3.5 p-2 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700">
                  {role.icon}
                </div>
                <div className="absolute top-3.5 right-3.5">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${role.badgeColor}`}>
                    {role.pay}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-xs font-mono text-neutral-400 mb-1">{role.sector}</div>
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{role.title}</h3>
                </div>

                <Button onClick={() => openCandidateModal('register')} size="sm" className="w-full">
                  Apply for Role
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* — DUAL CAREER SECTORS SHOWCASE WITH UNIQUE PHOTOS — */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          
          {/* Healthcare career card */}
          <div className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl flex flex-col group">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="/img-elderly-care.jpg"
                alt="Healthcare assistant delivering compassionate care in Liverpool care facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold flex items-center gap-1.5">
                  <HeartPulse size={13} className="text-cyan-400" /> Health & Social Care Roles
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Care & Support Vacancies</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  Immediate temporary shifts and direct-hire permanent placements across residential care homes, supported living developments, and clinical nursing settings.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300 mb-6">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                    <span>HCAs & Care Assistants</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                    <span>Support Workers (LD/Autism)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                    <span>Senior Care Leaders</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                    <span>Day & Waking Night Shifts</span>
                  </div>
                </div>
              </div>
              <Button onClick={() => openCandidateModal('register')} size="sm" className="w-full sm:w-fit">
                Apply for Care Positions
              </Button>
            </div>
          </div>

          {/* Construction career card */}
          <div className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl flex flex-col group">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="/img-civils-groundwork.jpg"
                alt="Construction trades operatives working on active North West building development"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-purple-500/40 text-purple-300 text-xs font-mono font-bold flex items-center gap-1.5">
                  <HardHat size={13} className="text-purple-400" /> Construction & Trades Roles
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Trades & Site Operatives</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  High-pay temporary day rates and permanent contracts across major commercial developments, housebuilding projects, and civil engineering sites.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300 mb-6">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-purple-400 shrink-0" />
                    <span>CSCS Labourers & Trades</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-purple-400 shrink-0" />
                    <span>1st & 2nd Fix Joiners</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-purple-400 shrink-0" />
                    <span>CPCS Plant Operators</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-purple-400 shrink-0" />
                    <span>SMSTS / SSSTS Supervisors</span>
                  </div>
                </div>
              </div>
              <Button onClick={() => openCandidateModal('register')} variant="outline" size="sm" className="w-full sm:w-fit text-purple-300 border-purple-800/60">
                Apply for Site Work
              </Button>
            </div>
          </div>

        </div>

        {/* — 4-STEP ONBOARDING PROCESS WITH PHOTOS — */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-purple-400 block mb-1">Simple Onboarding</span>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">How To Join Norbitlink</h2>
            </div>
            <Separator className="flex-1 hidden sm:block" />
            <span className="text-xs font-mono text-neutral-500">2-minute process</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 flex flex-col justify-between shadow-xl">
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-xl bg-purple-950/90 backdrop-blur-md border border-purple-800 text-purple-400 font-mono font-extrabold text-sm flex items-center justify-center">
                    {step.num}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">{step.label}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-neutral-800 text-[11px] font-mono text-purple-400 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Step {idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* — WHY WORK WITH US WITH REAL PHOTOS — */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-purple-400 block mb-1">Candidate Perks</span>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">Why Choose Norbitlink For Work?</h2>
            </div>
            <Separator className="flex-1 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`group rounded-3xl overflow-hidden bg-neutral-900 border transition-all duration-300 flex flex-col justify-between shadow-xl ${b.color}`}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 p-2 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700">
                    {b.icon}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">{b.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-neutral-800 text-[11px] font-mono font-bold text-purple-400 flex items-center gap-1">
                    <CheckCircle2 size={13} /> Verified Opportunity
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* — BOTTOM CTA BANNER — */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-purple-950/40 border border-purple-800/50 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="p-3 rounded-2xl bg-purple-950 border border-purple-800 text-purple-400 w-fit mb-6">
                <UserCheck size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Register for Work?</h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-8 max-w-lg">
                Complete our fast-track online registration form. We will verify your credentials and start matching you with high-pay shifts across Liverpool and Merseyside immediately.
              </p>
            </div>
            <Button
              onClick={() => openCandidateModal('register')}
              size="lg"
              className="bg-purple-600 hover:bg-purple-500 text-white w-full sm:w-fit group"
            >
              <span>Start Registration</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="p-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-cyan-400 w-fit mb-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Browse Live Job Openings</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-lg">
                Explore our live job board featuring temporary shifts, weekend packages, block bookings, and permanent positions in Healthcare and Construction.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={openJobBoardModal} size="lg" className="flex-1 sm:flex-none">
                <span>View Job Board</span>
              </Button>
              <Button onClick={() => openCandidateModal('upload')} variant="outline" size="lg" className="flex-1 sm:flex-none">
                <Upload size={15} />
                <span>Upload CV</span>
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
