'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Hammer, CheckCircle2, ArrowRight, Wrench, Shield, Clock, Award, FileCheck, Truck, Ruler, Building2, Zap, Paintbrush, Flame } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const rolesWeRecruit = [
  { name: "Labourers", category: "general", image: "/img-site-scaffold.jpg", desc: "Reliable site labourers for material logistics, site preparation, and trades assistance.", cert: "CSCS Green Card" },
  { name: "Groundworkers", category: "trades", image: "/img-civils-groundwork.jpg", desc: "Experienced operatives for deep drainage, concrete foundations, footings, and kerbing.", cert: "CSCS Skilled Worker" },
  { name: "Bricklayers", category: "trades", image: "/img-bricklayer.jpg", desc: "Skilled bricklayers and masonry gangs for residential housing and commercial blockwork.", cert: "NVQ L2/L3 + CSCS Blue" },
  { name: "Carpenters & Joiners", category: "trades", image: "/img-carpenter.jpg", desc: "1st & 2nd fix joiners for timber frames, truss roofing, architectural cladding, and door sets.", cert: "CSCS Blue / NVQ L2/L3" },
  { name: "Electricians", category: "trades", image: "/img-electrician.jpg", desc: "18th Edition BS7671 certified commercial and industrial electricians for containment and testing.", cert: "JIB Gold Card / ECS" },
  { name: "Plumbers", category: "trades", image: "/img-joiner-workshop.jpg", desc: "Commercial and domestic plumbers for pipework, sanitary ware, heating, and drainage.", cert: "CSCS / NVQ / Gas Safe" },
  { name: "Painters & Decorators", category: "trades", image: "/img-step-deploy.jpg", desc: "Precision interior and exterior decorators for high-spec commercial and residential finishes.", cert: "CSCS Skilled Worker" },
  { name: "Plant Operators", category: "safety", image: "/img-heavy-plant.jpg", desc: "CPCS/NPORS certified 360 excavator, forward tipping dumper, and roller drivers.", cert: "CPCS Blue / NPORS" },
  { name: "Site Supervisors", category: "management", image: "/img-site-manager.jpg", desc: "SSSTS qualified supervisors managing daily contractor coordination and safety talks.", cert: "CITB SSSTS" },
  { name: "Site Managers", category: "management", image: "/img-construction.jpg", desc: "SMSTS qualified site managers overseeing logistics, RAMS compliance, and site progress.", cert: "CITB SMSTS / Black Card" },
  { name: "Health & Safety Personnel", category: "safety", image: "/img-pillar-compliance.jpg", desc: "NEBOSH and IOSH qualified safety officers conducting site audits and risk assessments.", cert: "NEBOSH / IOSH Certified" },
];

const categories = [
  { id: 'all', label: 'All Roles' },
  { id: 'trades', label: 'Trades & Crafts' },
  { id: 'management', label: 'Site Management' },
  { id: 'safety', label: 'Plant & Safety' },
  { id: 'general', label: 'General Labour' },
];

const categoryColors: Record<string, string> = {
  trades: 'text-purple-400 bg-purple-950/40 border-purple-800/50',
  management: 'text-cyan-400 bg-cyan-950/40 border-cyan-800/50',
  safety: 'text-amber-400 bg-amber-950/40 border-amber-800/50',
  general: 'text-neutral-300 bg-neutral-800/40 border-neutral-700/50',
};

const certBadges = [
  'CSCS Cards (Green, Blue, Gold, Black)',
  'CPCS / NPORS Plant Tickets',
  'CITB SSSTS & SMSTS Management',
  'IPAF & PASMA Access Scaffolding',
  '18th Edition & Gas Safe Certified',
  'NEBOSH / IOSH Health & Safety',
];

export default function Construction() {
  const { openEmployerModal, openCandidateModal } = useModal();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredRoles = activeCategory === 'all' ? rolesWeRecruit : rolesWeRecruit.filter(r => r.category === activeCategory);

  return (
    <section className="min-h-screen bg-[#09090b] relative">

      {/* — HERO BANNER (Building Better Workforces) — */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-grid opacity-30 pointer-events-none" />
        <div className="absolute left-0 top-0 w-[500px] h-[400px] bg-purple-950/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <Badge variant="purple" className="mb-5">Construction Division</Badge>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Building Better<br />
                <span className="text-purple-400">Workforces.</span>
              </h1>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                We provide temporary and permanent workers to construction companies, contractors and developers throughout Liverpool and the North West.
              </p>
              
              <div className="flex flex-wrap gap-3.5 mb-10">
                <Button onClick={openEmployerModal} size="lg" className="bg-purple-600 hover:bg-purple-500 text-white group shadow-lg shadow-purple-950/50">
                  <span>Need Construction Staff?</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={() => openCandidateModal('register')} variant="outline" size="lg" className="text-purple-300 border-purple-800/60 hover:bg-purple-950/30">
                  Find Construction Work
                </Button>
              </div>

              {/* Quick stats row */}
              <div className="grid grid-cols-3 gap-4 border-t border-neutral-800/80 pt-6">
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <Shield size={15} className="text-purple-400" />
                    <span>CSCS & CPCS</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">100% Card Verified</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <Clock size={15} className="text-purple-400" />
                    <span>Rapid Fill</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Commercial & Housing</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <Award size={15} className="text-purple-400" />
                    <span>SMSTS / SSSTS</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">Site Supervision</div>
                </div>
              </div>
            </div>

            {/* Right Photo Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
                <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden">
                  <img
                    src="/img-construction.jpg"
                    alt="Norbitlink Construction Recruitment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-950 border border-purple-800 text-purple-400">
                      <HardHat size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">Commercial & Housing</div>
                      <div className="text-[11px] text-neutral-400">Trades · Labour · Management</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 px-2 py-1 rounded bg-purple-950 border border-purple-800/50">
                    CSCS Carded
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* — ROLES WE RECRUIT (11 Roles from Brief) — */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-purple-400 block mb-1">Trades & Personnel</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <Wrench size={22} className="text-purple-400" /> Roles We Recruit
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-500">{filteredRoles.length} roles</span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-950/60'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Roles Grid with Unique Photos */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredRoles.map((role) => (
                <motion.div
                  key={role.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-purple-500/40 transition-all duration-200 flex flex-col justify-between shadow-lg"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={role.image}
                      alt={role.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                    <div className="absolute top-3.5 right-3.5">
                      <span className={`text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full border ${categoryColors[role.category] || ''}`}>
                        {role.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {role.name}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                        {role.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-800 space-y-2">
                      <div className="text-[11px] font-mono text-purple-300 flex items-center gap-1.5">
                        <FileCheck size={13} className="shrink-0" />
                        <span className="truncate">{role.cert}</span>
                      </div>
                      <button
                        onClick={openEmployerModal}
                        className="w-full py-2 rounded-xl bg-neutral-950 hover:bg-purple-950/60 border border-neutral-800 hover:border-purple-800/60 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-all"
                      >
                        <span>Need Construction Staff?</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* — ACCREDITATIONS STRIP — */}
        <div className="flex items-center gap-4 mb-8">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-purple-400 block mb-1">Site Safety Standards</span>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Accreditations & Card Schemes Verified</h2>
          </div>
          <Separator className="flex-1 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {certBadges.map((cert, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-medium">
              <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-800/50 text-purple-400 shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <span>{cert}</span>
            </div>
          ))}
        </div>

        {/* — BOTTOM CTA BANNER — */}
        <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <Badge variant="purple" className="mb-3">Building Better Workforces</Badge>
            <h3 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Need reliable construction workers on site?
            </h3>
            <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed">
              We provide temporary and permanent workers to construction companies, contractors and developers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full lg:w-auto">
            <Button onClick={openEmployerModal} size="lg" className="bg-purple-600 hover:bg-purple-500 text-white w-full sm:w-auto">
              <span>Need Construction Staff?</span>
              <ArrowRight size={15} />
            </Button>
            <Button onClick={() => openCandidateModal('register')} variant="outline" size="lg" className="w-full sm:w-auto">
              Find Construction Work
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
