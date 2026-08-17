'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock, Globe, Building2, ShieldCheck, HeartPulse, HardHat, ArrowRight } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default function Contact() {
  const { openEmployerModal, openCandidateModal } = useModal();
  const [inquiryType, setInquiryType] = useState<'employer' | 'candidate'>('employer');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: 'Health & Social Care',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', sector: 'Health & Social Care', message: '' });
    }, 5000);
  };

  return (
    <section className="min-h-screen bg-[#09090b]">

      {/* — PAGE HEADER — */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-grid opacity-30 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <Badge variant="default" className="mb-4">Get In Touch</Badge>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Discuss Your{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Staffing Needs.
            </span>
          </h1>
          <p className="text-neutral-300 text-base md:text-lg max-w-2xl">
            Whether you need emergency cover for your healthcare facility, certified trades on your construction site,
            or are looking for your next rewarding role — our Liverpool team is ready.
          </p>
        </div>
      </div>

      {/* — MAIN CONTENT — */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-16">

        {/* 3-column contact info strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {[
            { icon: <MapPin size={20} className="text-cyan-400" />, label: 'Liverpool Office', value: '131 Mount Pleasant, Liverpool, L3 5TF' },
            { icon: <Phone size={20} className="text-purple-400" />, label: 'Direct Telephone', value: '+44 (0) 151 700 8920' },
            { icon: <Mail size={20} className="text-pink-400" />, label: 'Email Inquiries', value: 'info@norbitlink.co.uk' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-md">
              <div className="p-3 rounded-2xl bg-neutral-800 border border-neutral-700 shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-sm sm:text-base font-bold text-white">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* — MAIN GRID: Form left, office visual right — */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">

          {/* LEFT — contact form — 7 cols */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">

              {/* Form type toggle */}
              <div className="p-2 bg-neutral-950 border-b border-neutral-800 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setInquiryType('employer')}
                  className={cn(
                    'py-3 px-4 rounded-2xl font-bold text-xs transition-all',
                    inquiryType === 'employer' ? 'bg-cyan-500 text-neutral-950 shadow-md' : 'text-neutral-400 hover:text-white'
                  )}
                >
                  I&apos;m an Employer — Need Staff
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('candidate')}
                  className={cn(
                    'py-3 px-4 rounded-2xl font-bold text-xs transition-all',
                    inquiryType === 'candidate' ? 'bg-purple-600 text-white shadow-md' : 'text-neutral-400 hover:text-white'
                  )}
                >
                  I&apos;m a Candidate — Looking for Work
                </button>
              </div>

              <div className="p-8 sm:p-10">
                {submitted ? (
                  <div className="py-16 text-center">
                    <CheckCircle2 size={56} className="text-cyan-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-extrabold text-white mb-2">Message Dispatched</h4>
                    <p className="text-neutral-300 text-sm max-w-sm mx-auto">
                      Thank you! A Norbitlink recruitment consultant will review your details and respond within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-semibold text-neutral-300">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          placeholder="e.g. David Williams"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-semibold text-neutral-300">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="e.g. david@carehome.co.uk"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-semibold text-neutral-300">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="e.g. 07123 456789"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sector" className="text-xs font-semibold text-neutral-300">Sector *</Label>
                        <select
                          id="sector"
                          value={formData.sector}
                          onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                          className="flex h-10 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-colors"
                        >
                          <option value="Health & Social Care">Health & Social Care</option>
                          <option value="Construction">Construction</option>
                          <option value="Both Sectors">Both Sectors</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-semibold text-neutral-300">
                        {inquiryType === 'employer' ? 'Staffing Requirements / Shift Details *' : 'Experience & Role Desired *'}
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        placeholder={inquiryType === 'employer' ? 'Please specify headcount, role type (e.g. HCA, Support Worker, Carpenter), location, and required start date...' : 'Describe your qualifications (e.g. Care Certificate, NVQ, CSCS card), experience, and availability...'}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      className={cn(
                        'w-full py-6 text-sm font-bold',
                        inquiryType === 'candidate' && 'bg-purple-600 hover:bg-purple-500 text-white'
                      )}
                      size="lg"
                    >
                      <Send size={16} />
                      <span>Send Inquiry to Norbitlink Desk</span>
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT — office details & photography card — 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Liverpool HQ Photo Card */}
            <div className="rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl group relative">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src="/img-liverpool.jpg"
                  alt="Liverpool waterfront and Royal Liver building at dusk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-xs font-mono font-bold text-cyan-400">
                  L3 5TF
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/logo.png" alt="Norbitlink Logo" className="h-9 w-auto object-contain" />
                  <div>
                    <div className="text-base font-extrabold text-white">Norbitlink Limited</div>
                    <div className="text-xs font-mono text-cyan-400">Company No: 15012328</div>
                  </div>
                </div>
                
                <Separator className="mb-4" />

                <div className="space-y-3 text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>131 Mount Pleasant, Liverpool, Merseyside, L3 5TF</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock size={15} className="text-pink-400 shrink-0" />
                    <span>Operating Hours: Monday – Sunday (24 Hours)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={15} className="text-cyan-400 shrink-0" />
                    <span>Registered in England & Wales</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-cyan-950/30 border border-cyan-800/40 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-cyan-400 block mb-1">For Clients</span>
                  <h4 className="font-bold text-white text-sm mb-3">Urgent Shift Cover?</h4>
                  <p className="text-[11px] text-neutral-400 mb-4">Fast-track personnel booking.</p>
                </div>
                <Button onClick={openEmployerModal} size="sm" className="w-full">
                  Request Staff
                </Button>
              </div>

              <div className="p-6 rounded-3xl bg-purple-950/30 border border-purple-800/40 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-purple-400 block mb-1">For Candidates</span>
                  <h4 className="font-bold text-white text-sm mb-3">Join Our Talent Pool</h4>
                  <p className="text-[11px] text-neutral-400 mb-4">Weekly pay & flexible shifts.</p>
                </div>
                <Button onClick={() => openCandidateModal('register')} size="sm" className="w-full bg-purple-600 hover:bg-purple-500">
                  Register
                </Button>
              </div>
            </div>

          </div>

        </div>

        {/* — DIRECT SECTOR CONTACT CARDS WITH PHOTOS — */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-cyan-400 block mb-1">Direct Departments</span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">Contact Our Dedicated Desks</h3>
            </div>
            <Separator className="flex-1 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Healthcare Desk */}
            <div className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl flex flex-col sm:flex-row group">
              <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden shrink-0">
                <img
                  src="/img-healthcare.jpg"
                  alt="Norbitlink Healthcare Desk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/80 hidden sm:block" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <Badge variant="default" className="mb-2">Care & Support</Badge>
                  <h4 className="text-xl font-bold text-white mb-2">Healthcare Staffing Team</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    For care homes, nursing facilities, and supported living providers across Merseyside.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <span className="text-xs font-mono text-cyan-400 font-bold">0151 700 8920</span>
                  <Button onClick={openEmployerModal} size="sm">Book Carers</Button>
                </div>
              </div>
            </div>

            {/* Construction Desk */}
            <div className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl flex flex-col sm:flex-row group">
              <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden shrink-0">
                <img
                  src="/img-construction.jpg"
                  alt="Norbitlink Construction Desk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/80 hidden sm:block" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <Badge variant="purple" className="mb-2">Trades & Labour</Badge>
                  <h4 className="text-xl font-bold text-white mb-2">Construction Staffing Team</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    For main contractors, site managers, and commercial building developments.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <span className="text-xs font-mono text-purple-400 font-bold">0151 700 8920</span>
                  <Button onClick={openEmployerModal} size="sm" className="bg-purple-600 hover:bg-purple-500 text-white">Book Trades</Button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
