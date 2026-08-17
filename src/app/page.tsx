import Hero from '@/components/Hero';
import About from '@/components/About';
import Link from 'next/link';
import { ArrowRight, HeartPulse, HardHat, Users, ShieldCheck, Clock, Building2, CheckCircle2, Ruler, Zap, Stethoscope, Truck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Norbitlink Ltd | Specialist Recruitment Liverpool',
  description:
    'Norbitlink Ltd — Liverpool-based specialist recruitment for Health & Social Care and Construction. Rapid, compliant staffing.',
};

const divisions = [
  {
    badge: 'Health & Social Care',
    badgeVariant: 'default' as const,
    href: '/services/healthcare',
    title: 'Healthcare & Care Staffing',
    image: '/img-healthcare.jpg',
    imageAlt: 'Healthcare Assistant caring for a patient in Liverpool care home',
    desc: 'HCAs, Care Assistants, Support Workers, and Senior Care Leaders — all DBS-checked and fully vetted for immediate placement in care homes, nursing facilities, and supported living.',
    accentColor: 'text-cyan-400',
    borderClass: 'hover:border-cyan-500/50',
    icon: <HeartPulse size={24} className="text-cyan-400" />,
    cta: 'Explore Health & Care Division',
    tags: ['Care Homes', 'Supported Living', 'Domiciliary', 'Mental Health'],
    stats: [
      { label: 'DBS Audited', value: '100%' },
      { label: 'Shift Support', value: '24/7' },
      { label: 'Placement Speed', value: '< 2 Hrs' },
    ],
  },
  {
    badge: 'Construction Division',
    badgeVariant: 'purple' as const,
    href: '/services/construction',
    title: 'Construction & Trades Recruitment',
    image: '/img-construction.jpg',
    imageAlt: 'Construction site supervisors reviewing plans on site in Liverpool',
    desc: 'From general site labourers to SMSTS site managers — CSCS/CPCS certified tradespeople ready for commercial builds, residential developments, and infrastructure projects.',
    accentColor: 'text-purple-400',
    borderClass: 'hover:border-purple-500/50',
    icon: <HardHat size={24} className="text-purple-400" />,
    cta: 'Explore Construction Division',
    tags: ['CSCS Carded', 'CPCS Plant', 'SSSTS / SMSTS', 'Trades & Labour'],
    stats: [
      { label: 'Trade Roles', value: '11+' },
      { label: 'Compliance', value: 'CSCS/CPCS' },
      { label: 'Contracts', value: 'Temp & Perm' },
    ],
  },
];

const inActionPhotos = [
  {
    title: "Clinical Care & Nursing",
    sector: "Health & Social Care",
    image: "/img-nurse.jpg",
    desc: "NMC Registered Nurses & HCAs for hospitals, clinics and care homes.",
    href: "/services/healthcare",
    accent: "text-cyan-400",
    badgeVariant: "default" as const,
    icon: <Stethoscope size={16} className="text-cyan-400" />
  },
  {
    title: "Supported Living Schemes",
    sector: "Health & Social Care",
    image: "/img-support-worker.jpg",
    desc: "Positive Behaviour Support (PBS) & autism support specialists.",
    href: "/services/healthcare",
    accent: "text-cyan-400",
    badgeVariant: "default" as const,
    icon: <HeartPulse size={16} className="text-cyan-400" />
  },
  {
    title: "Precision Joinery & Fit-Out",
    sector: "Construction Division",
    image: "/img-carpenter.jpg",
    desc: "1st & 2nd fix carpentry for residential builds and commercial fit-outs.",
    href: "/services/construction",
    accent: "text-purple-400",
    badgeVariant: "purple" as const,
    icon: <Ruler size={16} className="text-purple-400" />
  },
  {
    title: "Commercial Electrical Works",
    sector: "Construction Division",
    image: "/img-electrician.jpg",
    desc: "18th Edition BS7671 qualified sparks for industrial distribution boards.",
    href: "/services/construction",
    accent: "text-purple-400",
    badgeVariant: "purple" as const,
    icon: <Zap size={16} className="text-purple-400" />
  },
];

const whyNorbitlink = [
  { icon: <ShieldCheck size={22} className="text-cyan-400" />, title: 'Fully Vetted Candidates', desc: 'Comprehensive Right-to-Work, Enhanced DBS, references, and qualification audits.' },
  { icon: <Clock size={22} className="text-purple-400" />, title: 'Rapid Shift Turnaround', desc: 'Emergency shift fill rate backed by an active recruitment operations team.' },
  { icon: <Building2 size={22} className="text-amber-400" />, title: 'Liverpool Headquarters', desc: '131 Mount Pleasant, serving Merseyside and the entire North West region.' },
  { icon: <Users size={22} className="text-pink-400" />, title: 'Flexible Engagement', desc: 'Ad-hoc temporary shifts, fixed contracts, and permanent placements.' },
];

export default function HomePage() {
  return (
    <div className="bg-[#09090b] text-neutral-200">

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* — DIVISIONS SHOWCASE WITH RICH PHOTOGRAPHY — */}
      <section className="py-28 bg-[#09090b] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
            <div>
              <Badge variant="default" className="mb-4">Specialist Divisions</Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Two Core Sectors.<br />
                <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Zero Compromise on Quality.
                </span>
              </h2>
            </div>
            <p className="text-neutral-400 text-base max-w-md leading-relaxed lg:text-right">
              Norbitlink operates focused, dedicated recruitment divisions in the two industries where dependable staffing and strict compliance matter most.
            </p>
          </div>

          {/* Division cards — with integrated real photography */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {divisions.map((div) => (
              <Link
                key={div.href}
                href={div.href}
                className={`group relative rounded-3xl bg-neutral-900 border border-neutral-800 ${div.borderClass} transition-all duration-300 overflow-hidden flex flex-col shadow-xl`}
              >
                {/* Photo Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={div.image}
                    alt={div.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                  
                  {/* Floating badge over photo */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <Badge variant={div.badgeVariant} className="backdrop-blur-md shadow-lg">
                      {div.badge}
                    </Badge>
                    <div className="p-2.5 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-white">
                      {div.icon}
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-8 flex flex-col flex-1">
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {div.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
                    {div.desc}
                  </p>

                  {/* Environment / Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {div.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 mb-6">
                    {div.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className={`text-lg sm:text-xl font-extrabold ${div.accentColor}`}>{stat.value}</div>
                        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Separator className="mb-5" />

                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-bold ${div.accentColor}`}>{div.cta}</span>
                    <div className={`p-2 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 transition-colors`}>
                      <ArrowRight
                        size={16}
                        className={`${div.accentColor} group-hover:translate-x-1 transition-transform`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* — 4-CARD PHOTO GALLERY: SPECIALISMS IN ACTION — */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div>
                <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Field Capabilities</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Recruitment Disciplines in Action</h3>
              </div>
              <Separator className="flex-1 hidden sm:block" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {inActionPhotos.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                    <div className="absolute top-3.5 left-3.5 p-2 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700">
                      {item.icon}
                    </div>
                    <div className="absolute top-3.5 right-3.5">
                      <Badge variant={item.badgeVariant} className="text-[10px]">
                        {item.sector.split(' ')[0]}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">{item.title}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-4">{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300 group-hover:text-white pt-3 border-t border-neutral-800">
                      <span>View Sector</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* — EMPLOYERS & CANDIDATES SPLIT BANNER WITH PHOTOGRAPHY — */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Employers Card */}
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl flex flex-col justify-between group">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="/img-employers.jpg"
                  alt="Client consultation in executive office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="default">For Employers & Providers</Badge>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">Need Immediate Shift Cover or Long-Term Talent?</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    Access vetted healthcare assistants, support workers, and CSCS trades ready for rapid site or ward deployment.
                  </p>
                  <div className="space-y-2.5 mb-8">
                    {['Enhanced DBS & Right-to-Work verified', 'Dedicated account consultant', 'Emergency cover in under 2 hours'].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-800">
                  <Link href="/employers">
                    <Button className="group">
                      <span>Employer Services</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">
                      Contact Desk
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Candidates Card */}
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl flex flex-col justify-between group">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="/img-interview.jpg"
                  alt="Candidate registration interview in modern office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="purple">For Candidates & Trades</Badge>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">Looking for High-Pay Shifts & Flexible Work?</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    Register in under 2 minutes and access regular temporary shifts, top hourly pay rates, and direct permanent placements.
                  </p>
                  <div className="space-y-2.5 mb-8">
                    {['Flexible shifts tailored around your life', 'Prompt weekly payroll & holiday pay', 'Fast-track document onboarding'].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-800">
                  <Link href="/candidates">
                    <Button className="bg-purple-600 hover:bg-purple-500 text-white group">
                      <span>Candidate Hub</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/services/healthcare">
                    <Button variant="outline" className="text-purple-300 border-purple-800/50">
                      Browse Roles
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* — WHY NORBITLINK STRIP — */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-800">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {whyNorbitlink.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1.5">{item.title}</div>
                  <div className="text-xs text-neutral-400 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
