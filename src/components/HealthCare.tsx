'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, CheckCircle2, ShieldCheck, UserPlus, FileCheck, Stethoscope, Home, Brain, Activity, ChevronRight, ArrowRight, Clock, Award, Users } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const weSupportSettings = [
  { 
    name: "Care Homes", 
    icon: <Home size={15} />, 
    desc: "Residential elderly and specialized care homes across Liverpool.", 
    image: "/img-care-home.jpg",
    tags: ["Elderly Care", "Dementia", "Personal Support"]
  },
  { 
    name: "Nursing Homes", 
    icon: <Stethoscope size={15} />, 
    desc: "Complex nursing and clinical care facilities.", 
    image: "/img-hospital-ward.jpg",
    tags: ["Clinical Nursing", "Medication", "Complex Care"]
  },
  { 
    name: "Supported Living", 
    icon: <HeartPulse size={15} />, 
    desc: "Assisted independent living and community residential schemes.", 
    image: "/img-supported-scheme.jpg",
    tags: ["Autism Care", "Learning Disability", "PBS Support"]
  },
  { 
    name: "Domiciliary-Care Providers", 
    icon: <Users size={15} />, 
    desc: "In-home care visits, companionship and personal assistance.", 
    image: "/img-elderly-care.jpg",
    tags: ["Home Visits", "Daily Living", "Companionship"]
  },
  { 
    name: "Mental-Health Services", 
    icon: <Brain size={15} />, 
    desc: "Specialist mental health residential and outreach units.", 
    image: "/img-mental-health-support.jpg",
    tags: ["Mental Wellbeing", "Crisis Support", "De-escalation"]
  },
  { 
    name: "Learning-Disability Services", 
    icon: <HeartPulse size={15} />, 
    desc: "Empowering adults and young people with specialized needs.", 
    image: "/img-support-worker.jpg",
    tags: ["Life Skills", "Communication", "Inclusion"]
  },
  { 
    name: "Rehabilitation Services", 
    icon: <Activity size={15} />, 
    desc: "Post-operative, physical and neuro-rehabilitation centres.", 
    image: "/img-nurse-portrait.jpg",
    tags: ["Rehab Support", "Mobility", "Therapy Support"]
  },
];

const rolesWeRecruit = [
  { 
    title: "Healthcare Assistants", 
    type: "Clinical & Residential", 
    image: "/img-elderly-care.jpg",
    desc: "Reliable, compassionate Healthcare Assistants providing vital monitoring, personal care assistance, and day-to-day patient support.",
    requirements: ["Right-to-Work verification", "Enhanced DBS check", "Professional references", "Mandatory care training", "Care Certificate / Qualifications"]
  },
  { 
    title: "Care Assistants", 
    type: "Residential & Home Care", 
    image: "/img-healthcare.jpg",
    desc: "Dedicated care workers supporting elderly and vulnerable residents with dignity, personal hygiene, meals, and social wellbeing.",
    requirements: ["Right-to-Work verification", "Enhanced DBS check", "5-year reference checks", "Manual handling & safeguarding", "NVQ / Care Certificate"]
  },
  { 
    title: "Support Workers", 
    type: "Community & Supported Living", 
    image: "/img-support-worker.jpg",
    desc: "Support workers empowering individuals to live fulfilling, independent lives in supported housing and community schemes.",
    requirements: ["Right-to-Work verification", "Enhanced DBS check", "Positive Behaviour Support", "References audited", "First aid & mandatory training"]
  },
  { 
    title: "Senior Care/Support Workers", 
    type: "Shift Leadership & Coordination", 
    image: "/img-care-team.jpg",
    desc: "Experienced senior personnel for shift leadership, rota management, care planning, MAR sheet audits, and team oversight.",
    requirements: ["Right-to-Work verification", "Enhanced DBS check", "NVQ Level 3 in Health & Social Care", "Medication administration certified", "Leadership references"]
  },
  { 
    title: "Mental Health Support Workers", 
    type: "Specialist Mental Health", 
    image: "/img-mental-health-support.jpg",
    desc: "Trained specialists supporting individuals with mental health needs, de-escalation, structured routines, and recovery plans.",
    requirements: ["Right-to-Work verification", "Enhanced DBS check", "Mental health awareness certified", "De-escalation training", "Experience verified"]
  },
  { 
    title: "Learning Disability Support Workers", 
    type: "Specialist Care", 
    image: "/img-supported-scheme.jpg",
    desc: "Empathetic workers promoting communication, personal independence, community engagement, and life skills for clients.",
    requirements: ["Right-to-Work verification", "Enhanced DBS check", "Learning disability certified", "Makaton / non-verbal skills", "Full reference audit"]
  },
  { 
    title: "Autism Support Workers", 
    type: "Specialist Care", 
    image: "/img-perk-support.jpg",
    desc: "Patient and dedicated specialists providing tailored sensory, behavioral, and daily living support for autistic individuals.",
    requirements: ["Right-to-Work verification", "Enhanced DBS check", "Autism spectrum certified", "PBS trained", "Verified background checks"]
  },
];

const complianceChecks = [
  "Right-to-Work verification",
  "DBS checks (Adult Barred List)",
  "Employment References",
  "Mandatory Training",
  "Relevant Qualifications",
  "Professional registration (e.g. NMC/SMM)",
];

export default function HealthCare() {
  const { openEmployerModal, openCandidateModal } = useModal();
  const [selectedRole, setSelectedRole] = useState(0);

  return (
    <section className="min-h-screen bg-[#09090b] relative">

      {/* — PAGE HERO BANNER (People Who Care) — */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-grid opacity-30 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[400px] bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <Badge variant="default" className="mb-5">Health & Social Care</Badge>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                People Who Care.
              </h1>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                We provide temporary and permanent staff to health and social-care organisations throughout Liverpool, Merseyside, and the North West.
              </p>
              
              <div className="flex flex-wrap gap-3.5 mb-10">
                <Button onClick={openEmployerModal} size="lg" className="group shadow-lg shadow-cyan-950/50">
                  <span>Need Care Staff?</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={() => openCandidateModal('register')} variant="outline" size="lg">
                  <span>Join Our Care Team</span>
                </Button>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 border-t border-neutral-800/80 pt-6">
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <Clock size={15} className="text-cyan-400" />
                    <span>24/7 Cover</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Responsive Shifts</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck size={15} className="text-cyan-400" />
                    <span>100% DBS</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Vetted Candidates</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <Award size={15} className="text-cyan-400" />
                    <span>Temp & Perm</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Flexible Solutions</div>
                </div>
              </div>
            </div>

            {/* Right Photo Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
                <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden">
                  <img
                    src="/img-healthcare.jpg"
                    alt="Norbitlink Health & Social Care Staffing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
                      <HeartPulse size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">Appropriately Vetted</div>
                      <div className="text-[11px] text-neutral-400">Care & Support Staff</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 px-2 py-1 rounded bg-cyan-950 border border-cyan-800/50">
                    Quality Care
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* — WE SUPPORT (7 Settings from Brief) — */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Care Environments</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">We Support</h2>
          </div>
          <Separator className="flex-1 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
          {weSupportSettings.map((s, i) => (
            <div key={i} className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col shadow-xl">
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                <div className="absolute top-3.5 left-3.5 p-2 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-cyan-400">
                  {s.icon}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{s.name}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">{s.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/80">
                  {s.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* — ROLES WE RECRUIT (7 Roles from Brief) — */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Available Staff</span>
              <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <UserPlus size={22} className="text-cyan-400" /> Roles We Recruit
              </h2>
            </div>
            <Separator className="flex-1 hidden sm:block" />
            <span className="text-xs font-mono text-neutral-500">{rolesWeRecruit.length} roles</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Left list (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              {rolesWeRecruit.map((role, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedRole(idx)}
                  className={`w-full text-left px-5 py-4 rounded-2xl transition-all flex items-center justify-between group ${
                    selectedRole === idx
                      ? 'bg-cyan-950/50 border border-cyan-500/50 text-white shadow-lg'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:bg-neutral-800/80 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{role.title}</div>
                    <div className="text-[11px] text-cyan-400 font-mono mt-0.5">{role.type}</div>
                  </div>
                  <ChevronRight size={16} className={`shrink-0 transition-transform ${selectedRole === idx ? 'translate-x-1 text-cyan-400' : 'text-neutral-600'}`} />
                </button>
              ))}
            </div>

            {/* Right detail panel (7 cols) with integrated Role Photo */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRole}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col shadow-xl"
                >
                  {/* Photo Header */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                    <img
                      src={rolesWeRecruit[selectedRole].image}
                      alt={rolesWeRecruit[selectedRole].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="default">{rolesWeRecruit[selectedRole].type}</Badge>
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{rolesWeRecruit[selectedRole].title}</h3>
                      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">{rolesWeRecruit[selectedRole].desc}</p>

                      {/* Compliance Checks for this role */}
                      <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 mb-8">
                        <p className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-4">
                          <ShieldCheck size={16} /> Applicable Compliance Standards
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {rolesWeRecruit[selectedRole].requirements.map((req, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                              <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                              <span>{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-800">
                      <Button onClick={openEmployerModal} className="flex-1 group">
                        <span>Need Care Staff?</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button onClick={() => openCandidateModal('register')} variant="outline" className="flex-1">
                        Join Our Care Team
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* — COMPLIANCE MATTERS (From Brief) — */}
        <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Quality Assurance</span>
              <h3 className="text-2xl font-extrabold text-white">Compliance Matters</h3>
              <p className="text-neutral-400 text-xs mt-1">Our recruitment checks include applicable safeguarding and qualification audits.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold">
              <FileCheck size={14} /> Full Audit Documentation
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {complianceChecks.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-center flex flex-col items-center gap-2">
                <CheckCircle2 size={18} className="text-cyan-400" />
                <span className="text-xs font-semibold text-neutral-200 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
