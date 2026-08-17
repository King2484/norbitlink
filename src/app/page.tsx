import Hero from '@/components/Hero';
import About from '@/components/About';
import Link from 'next/link';
import { ArrowRight, HeartPulse, HardHat, Users, ShieldCheck, Clock, Building2, CheckCircle2, Ruler, Zap, Stethoscope, Truck, Award, Sparkles, Briefcase, UserCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Norbitlink Ltd | Specialist Health & Social Care and Construction Recruitment',
  description:
    'Norbitlink Ltd — Liverpool-based recruitment agency providing reliable temporary and permanent staff across the Health & Social Care and Construction sectors.',
};

const ourServices = [
  {
    title: 'Health & Social Care',
    desc: 'Reliable, appropriately vetted care and support staff.',
    badge: 'Core Division',
    image: '/img-healthcare.jpg',
    href: '/services/healthcare',
    accentColor: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/50',
    icon: <HeartPulse size={22} className="text-cyan-400" />,
    cta: 'Explore Health & Care'
  },
  {
    title: 'Construction',
    desc: 'Skilled and dependable workers for construction projects.',
    badge: 'Specialist Division',
    image: '/img-construction.jpg',
    href: '/services/construction',
    accentColor: 'text-purple-400',
    borderColor: 'hover:border-purple-500/50',
    icon: <HardHat size={22} className="text-purple-400" />,
    cta: 'Explore Construction'
  },
  {
    title: 'Temporary Staffing',
    desc: 'Flexible workforce support when you need it.',
    badge: 'Flexible Shifts',
    image: '/img-care-team.jpg',
    href: '/employers',
    accentColor: 'text-amber-400',
    borderColor: 'hover:border-amber-500/50',
    icon: <Clock size={22} className="text-amber-400" />,
    cta: 'Request Temporary Cover'
  },
  {
    title: 'Permanent Recruitment',
    desc: 'Helping employers find the right people for long-term roles.',
    badge: 'Direct Placement',
    image: '/img-boardroom-meeting.jpg',
    href: '/employers',
    accentColor: 'text-pink-400',
    borderColor: 'hover:border-pink-500/50',
    icon: <Briefcase size={22} className="text-pink-400" />,
    cta: 'Find Permanent Talent'
  }
];

const coreFocusValues = [
  { image: '/img-why-vetted.jpg', icon: <ShieldCheck size={20} className="text-cyan-400" />, title: 'Quality', desc: 'Pre-screened professionals with proven expertise and qualifications.' },
  { image: '/img-pillar-compliance.jpg', icon: <Award size={20} className="text-purple-400" />, title: 'Compliance', desc: 'Comprehensive Right-to-Work, Enhanced DBS, and credential audits.' },
  { image: '/img-why-speed.jpg', icon: <UserCheck size={20} className="text-amber-400" />, title: 'Reliability', desc: 'Dependable staffing solutions for shifts, projects, and permanent teams.' },
  { image: '/img-contact-phone.jpg', icon: <Clock size={20} className="text-pink-400" />, title: 'Responsive Service', desc: 'Swift turnaround times and 24/7 dedicated recruitment support.' },
];

export default function HomePage() {
  return (
    <div className="bg-[#09090b] text-neutral-200">

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* — OUR SERVICES SHOWCASE — */}
      <section className="py-28 bg-[#09090b] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
            <div>
              <Badge variant="default" className="mb-4">Norbitlink Services</Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Our Services
              </h2>
            </div>
            <p className="text-neutral-400 text-base max-w-md leading-relaxed lg:text-right">
              Providing reliable temporary and permanent staff across Health & Social Care and Construction.
            </p>
          </div>

          {/* 4 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {ourServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative rounded-3xl bg-neutral-900 border border-neutral-800 ${service.borderColor} transition-all duration-300 overflow-hidden flex flex-col shadow-xl`}
              >
                {/* Photo Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                  
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-neutral-300">
                      {service.badge}
                    </span>
                    <div className="p-2 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <span className={`text-xs font-bold ${service.accentColor}`}>{service.cta}</span>
                    <ArrowRight size={14} className={`${service.accentColor} group-hover:translate-x-1 transition-transform`} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* — EMPLOYERS & CANDIDATES SPLIT BANNER — */}
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
                  <Badge variant="default">For Employers</Badge>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">Need Staff?</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    We help employers find reliable people quickly and efficiently. Whether you need temporary cover, additional project staff or a permanent employee, our team can help.
                  </p>
                  <div className="space-y-2.5 mb-8">
                    {['Temporary Staffing & Emergency Cover', 'Permanent Recruitment & Search', 'Compliance Checks & Fast Placement'].map((feat, i) => (
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
                      <span>Request Staff</span>
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
                  <Badge variant="purple">For Candidates</Badge>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">Looking for Work?</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    Join Norbitlink and discover opportunities across Health & Social Care and Construction throughout Liverpool and Merseyside.
                  </p>
                  <div className="space-y-2.5 mb-8">
                    {['Temporary opportunities & flexible shifts', 'Permanent career roles', 'Support throughout your placement'].map((feat, i) => (
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
                      <span>Register for Work</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/candidates">
                    <Button variant="outline" className="text-purple-300 border-purple-800/50">
                      View Jobs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* — OUR CORE VALUES STRIP (QUALITY, COMPLIANCE, RELIABILITY, RESPONSIVE SERVICE) — */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-800">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Our Focus</span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">Quality, Compliance, Reliability & Responsive Service</h3>
            </div>
            <Separator className="flex-1 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {coreFocusValues.map((item, i) => (
              <div key={i} className="group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between shadow-xl">
                <div className="relative h-40 w-full overflow-hidden">
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
                    <CheckCircle2 size={12} /> Norbitlink Standard
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
