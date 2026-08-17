'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, CheckCircle2, ShieldCheck, UserPlus, FileCheck, Stethoscope, Home, Brain, Activity, Sparkles, ChevronRight, ArrowRight, Clock, Award, Users } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const supportedSettings = [
  { 
    name: "Residential Care Homes", 
    icon: <Home size={15} />, 
    desc: "Elderly & specialized residential care", 
    image: "/img-care-home.jpg",
    tags: ["Elderly Care", "Dementia", "Personal Hygiene"]
  },
  { 
    name: "Nursing Homes & Clinics", 
    icon: <Stethoscope size={15} />, 
    desc: "Complex nursing & palliative care", 
    image: "/img-hospital-ward.jpg",
    tags: ["NMC Nurses", "Clinical Charts", "Medication"]
  },
  { 
    name: "Supported Living Schemes", 
    icon: <HeartPulse size={15} />, 
    desc: "Independent living & community support", 
    image: "/img-supported-scheme.jpg",
    tags: ["Autism Care", "Learning Disability", "PBS"]
  },
  { 
    name: "Care Team & Station Cover", 
    icon: <Users size={15} />, 
    desc: "Collaborative ward & shift handovers", 
    image: "/img-care-team.jpg",
    tags: ["Shift Handovers", "MAR Sheets", "Team Support"]
  },
];

const roles = [
  { 
    title: "Healthcare Assistants (HCAs)", 
    type: "Clinical & Personal Care", 
    image: "/img-elderly-care.jpg",
    desc: "Compassionate HCAs providing high-standard nursing assistance, vital monitoring, personal hygiene support, and patient care in residential, nursing, and clinical environments.",
    requirements: ["Enhanced DBS with Adult Barred List", "Mandatory Care Certificate Training", "Manual Handling & Safeguarding", "Up-to-date Immunisation Record"]
  },
  { 
    title: "Registered Nurses (RGN / RMN)", 
    type: "Clinical & Acute Care", 
    image: "/img-nurse-portrait.jpg",
    desc: "Qualified NMC registered nurses for clinical medication rounds, wound management, patient assessment, catheterisation, and care plan formulation.",
    requirements: ["Active NMC PIN Verification", "Valid Statement of Entry", "Clinical Competency Audited", "Minimum 1 Year Post-Reg UK Experience"]
  },
  { 
    title: "Care Assistants", 
    type: "Residential & Home Care", 
    image: "/img-healthcare.jpg",
    desc: "Dedicated care professionals delivering essential daily living assistance, emotional support, dignity, and companionship to elderly and vulnerable individuals.",
    requirements: ["Enhanced DBS Clearance", "Care Certificate or NVQ Level 2/3", "Medication Awareness Training", "Dignity in Care Certified"]
  },
  { 
    title: "Support Workers", 
    type: "Community & Supported Living", 
    image: "/img-support-worker.jpg",
    desc: "Empowering individuals to lead independent, fulfilled lives through tailored practical, emotional, and social day-to-day community support.",
    requirements: ["Enhanced DBS Check", "Positive Behaviour Support (PBS)", "First Aid Certification", "Full Right-to-Work Verification"]
  },
  { 
    title: "Senior Care Leaders", 
    type: "Team Leadership & Supervision", 
    image: "/img-care-team.jpg",
    desc: "Experienced senior staff responsible for shift leadership, rota management, care planning, MAR sheet audits, medication administration, and team oversight.",
    requirements: ["NVQ Level 3 in Health & Social Care", "Medication Administration Competency", "Shift Leadership Experience", "CQC Regulation Knowledge"]
  },
  { 
    title: "Mental Health Support Workers", 
    type: "Specialist Care", 
    image: "/img-mental-health-support.jpg",
    desc: "Trained specialists supporting individuals with complex mental health needs, de-escalation, crisis prevention, and structured recovery pathways.",
    requirements: ["Mental Health Awareness Certified", "De-escalation & Breakaway Trained", "Enhanced DBS Verification", "Minimum 1 Year MH Experience"]
  },
  { 
    title: "Learning Disability Support Workers", 
    type: "Specialist Care", 
    image: "/img-supported-scheme.jpg",
    desc: "Empathetic workers focusing on promoting communication, life skills, personal development, sensory therapy, and social inclusion.",
    requirements: ["Autism & LD Awareness Training", "Makaton or Non-Verbal Skills", "Enhanced DBS Clearance", "Positive Risk Taking Training"]
  },
];

const complianceItems = [
  "Right-to-Work Verification",
  "Enhanced DBS (Adult Barred List)",
  "5-Year Employment References",
  "Mandatory Practical Training",
  "Care Certificate / NVQ Checks",
  "Immunisation & Health Screening",
];

const galleryMoments = [
  { img: "/img-care-home.jpg", title: "Residential Care Environment", sub: "Warm Elderly Support" },
  { img: "/img-nurse.jpg", title: "Clinical Ward Excellence", sub: "NMC Registered Nursing" },
  { img: "/img-supported-scheme.jpg", title: "Supported Living Schemes", sub: "Independence & Dignity" },
  { img: "/img-care-team.jpg", title: "Collaborative Care Teams", sub: "Shift Handover & Operations" },
];

export default function HealthCare() {
  const { openEmployerModal, openCandidateModal } = useModal();
  const [selectedRole, setSelectedRole] = useState(0);

  return (
    <section className="min-h-screen bg-[#09090b] relative">

      {/* — PAGE HERO BANNER WITH UNIQUE REAL HEALTHCARE PHOTOGRAPHY — */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-grid opacity-30 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[400px] bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <Badge variant="default" className="mb-5">Health & Social Care Division</Badge>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Compassionate Care,<br />
                <span className="text-cyan-400">Compliant Staffing.</span>
              </h1>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                We supply reliable, pre-screened HCAs, Care Assistants, and Support Workers to care homes,
                nursing providers, and supported living services across Liverpool, Merseyside, and the wider North West.
              </p>
              
              <div className="flex flex-wrap gap-3.5 mb-10">
                <Button onClick={openEmployerModal} size="lg" className="group shadow-lg shadow-cyan-950/50">
                  <span>Request Care Staff</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={() => openCandidateModal('register')} variant="outline" size="lg">
                  Apply for Care Roles
                </Button>
              </div>

              {/* Quick highlights */}
              <div className="grid grid-cols-3 gap-4 border-t border-neutral-800/80 pt-6">
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <Clock size={15} className="text-cyan-400" />
                    <span>24/7 Cover</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Emergency Shifts</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck size={15} className="text-cyan-400" />
                    <span>100% DBS</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Enhanced Audited</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <Award size={15} className="text-cyan-400" />
                    <span>CQC Ready</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Audit Documents</div>
                </div>
              </div>
            </div>

            {/* Right Photo Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
                <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden">
                  <img
                    src="/img-healthcare.jpg"
                    alt="Norbitlink Healthcare Assistant with patient in Liverpool residential care home"
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
                      <div className="text-xs font-mono font-bold text-white">Vetted Care Staffing</div>
                      <div className="text-[11px] text-neutral-400">Residential · Nursing · Domiciliary</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 px-2 py-1 rounded bg-cyan-950 border border-cyan-800/50">
                    Temp & Perm
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* — 4-CARD PHOTO GALLERY: SERVICE ENVIRONMENTS WITH UNIQUE PHOTOS — */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Care Environments</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Sectors & Settings We Staff</h2>
          </div>
          <Separator className="flex-1 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {supportedSettings.map((s, i) => (
            <div key={i} className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
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

        {/* — INTERACTIVE ROLE DIRECTORY WITH UNIQUE PHOTO PREVIEW — */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Available Personnel</span>
              <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <UserPlus size={22} className="text-cyan-400" /> Healthcare Roles Directory
              </h2>
            </div>
            <Separator className="flex-1 hidden sm:block" />
            <span className="text-xs font-mono text-neutral-500">{roles.length} roles</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Left list (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              {roles.map((role, idx) => (
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
                      src={roles[selectedRole].image}
                      alt={roles[selectedRole].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="default">{roles[selectedRole].type}</Badge>
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{roles[selectedRole].title}</h3>
                      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">{roles[selectedRole].desc}</p>

                      {/* Vetting Checklist for this role */}
                      <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 mb-8">
                        <p className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-4">
                          <ShieldCheck size={16} /> Mandatory Verification Standards
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {roles[selectedRole].requirements.map((req, i) => (
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
                        <span>Request Staff</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button onClick={() => openCandidateModal('register')} variant="outline" className="flex-1">
                        Apply for This Role
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* — HEALTHCARE IN ACTION: 4-PHOTO GALLERY WITH UNIQUE PHOTOS — */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Photo Gallery</span>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">Care Staffing in Action</h2>
            </div>
            <Separator className="flex-1 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryMoments.map((item, i) => (
              <div key={i} className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 group shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                  <p className="text-xs text-neutral-400">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* — COMPLIANCE STRIP — */}
        <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Safeguarding Assurance</span>
              <h3 className="text-2xl font-extrabold text-white">NHS & CQC Compliance Standards</h3>
              <p className="text-neutral-400 text-xs mt-1">Every candidate is pre-screened before ever setting foot in your care facility.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold">
              <FileCheck size={14} /> Full Audit Documentation
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {complianceItems.map((item, idx) => (
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
