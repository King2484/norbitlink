'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, UserCheck, Upload, Briefcase, CheckCircle2, Search, MapPin, Clock, Send, FileText, ArrowRight } from 'lucide-react';

/* ---------------- EMPLOYER MODAL ---------------- */
export function EmployerModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [sector, setSector] = useState('Health & Social Care');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    staffCount: '1-3 Workers',
    urgency: 'Immediate / Emergency Cover',
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#09090b] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Photo Header Banner */}
          <div className="relative h-32 w-full overflow-hidden">
            <img
              src="/img-boardroom-meeting.jpg"
              alt="Norbitlink Corporate Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-neutral-950/80 text-neutral-400 hover:text-white border border-neutral-800 transition-colors z-10"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-8 pt-2">
            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 size={48} className="text-cyan-400 mx-auto mb-3" />
                <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">Staff Request Received</h3>
                <p className="text-neutral-300 text-xs max-w-md mx-auto mb-6">
                  Thank you. A Norbitlink recruitment consultant will contact <strong>{formData.contactName || 'you'}</strong> immediately regarding staff availability.
                </p>
                <button onClick={() => { setSubmitted(false); onClose(); }} className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold text-xs">
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-neutral-900 text-cyan-400 border border-neutral-800">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">Request Staff</h3>
                    <p className="text-xs text-neutral-400 font-mono">Norbitlink Workforce Dispatch</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Sector Required *</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSector('Health & Social Care')}
                        className={`py-2.5 rounded-xl font-bold text-xs border transition-all ${
                          sector === 'Health & Social Care'
                            ? 'bg-cyan-950/60 border-cyan-500 text-cyan-400'
                            : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        Health & Social Care
                      </button>
                      <button
                        type="button"
                        onClick={() => setSector('Construction')}
                        className={`py-2.5 rounded-xl font-bold text-xs border transition-all ${
                          sector === 'Construction'
                            ? 'bg-purple-950/60 border-purple-500 text-purple-400'
                            : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        Construction
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Abbey Care Group"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Contact Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Miller"
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@caregroup.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Telephone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0151 700 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Staff Quantity</label>
                      <select
                        value={formData.staffCount}
                        onChange={(e) => setFormData({...formData, staffCount: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="1-3 Workers">1 - 3 Workers</option>
                        <option value="4-10 Workers">4 - 10 Workers</option>
                        <option value="10+ Project Team">10+ Project Team</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Urgency</label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="Immediate / Emergency Cover">Immediate / Emergency Cover</option>
                        <option value="Within 48 Hours">Within 48 Hours</option>
                        <option value="Permanent Recruitment">Permanent Recruitment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Role Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Describe role requirements..."
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs resize-none focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <button type="submit" className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors">
                    <Send size={15} />
                    <span>Submit Staff Request</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/* ---------------- CANDIDATE MODAL ---------------- */
export function CandidateModal({ isOpen, onClose, initialTab = 'register' }: { isOpen: boolean; onClose: () => void; initialTab?: string }) {
  const [sector, setSector] = useState('Health & Social Care');
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', roleTitle: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#09090b] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Photo Header Banner */}
          <div className="relative h-32 w-full overflow-hidden">
            <img
              src="/img-candidates.jpg"
              alt="Norbitlink Candidate Network"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-neutral-950/80 text-neutral-400 hover:text-white border border-neutral-800 transition-colors z-10"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-8 pt-2">
            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 size={48} className="text-purple-400 mx-auto mb-3" />
                <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">Application Submitted</h3>
                <p className="text-neutral-300 text-xs max-w-md mx-auto mb-6">
                  Thank you! Our recruitment team will contact <strong>{formData.name || 'you'}</strong> for fast-track onboarding.
                </p>
                <button onClick={() => { setSubmitted(false); onClose(); }} className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs">
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-neutral-900 text-purple-400 border border-neutral-800">
                    <UserCheck size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">Join Norbitlink</h3>
                    <p className="text-xs text-neutral-400 font-mono">Candidate Registration & Onboarding</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Preferred Sector *</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSector('Health & Social Care')}
                        className={`py-2.5 rounded-xl font-bold text-xs border transition-all ${
                          sector === 'Health & Social Care'
                            ? 'bg-cyan-950/60 border-cyan-500 text-cyan-400'
                            : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        Health & Social Care
                      </button>
                      <button
                        type="button"
                        onClick={() => setSector('Construction')}
                        className={`py-2.5 rounded-xl font-bold text-xs border transition-all ${
                          sector === 'Construction'
                            ? 'bg-purple-950/60 border-purple-500 text-purple-400'
                            : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        Construction
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-purple-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Desired Role *</label>
                      <input
                        type="text"
                        required
                        placeholder={sector === 'Health & Social Care' ? 'Support Worker' : 'Bricklayer'}
                        value={formData.roleTitle}
                        onChange={(e) => setFormData({...formData, roleTitle: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@example.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-purple-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Telephone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 07123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Upload CV (Optional)</label>
                    <div className="border border-dashed border-neutral-700 hover:border-purple-500/50 rounded-xl p-4 text-center cursor-pointer transition-colors bg-neutral-950/50">
                      <input
                        type="file"
                        id="cv-upload"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                      />
                      <label htmlFor="cv-upload" className="cursor-pointer flex flex-col items-center">
                        <Upload size={20} className="text-purple-400 mb-1.5" />
                        <span className="text-xs text-neutral-300 font-semibold">
                          {file ? file.name : "Click to select CV (PDF, DOCX)"}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-mono mt-0.5">Maximum file size: 10MB</span>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors">
                    <Send size={15} />
                    <span>Submit Candidate Profile</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/* ---------------- JOB BOARD MODAL ---------------- */
export function JobBoardModal({ isOpen, onClose, onApplyJob }: { isOpen: boolean; onClose: () => void; onApplyJob?: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSector, setFilterSector] = useState('all');

  if (!isOpen) return null;

  const jobs = [
    {
      id: 1,
      title: "Senior Support Worker (Autism & LD)",
      sector: "Health & Social Care",
      location: "Liverpool (Mount Pleasant)",
      type: "Flexible Shifts",
      rate: "£14.50 - £17.00 / hr",
      desc: "Supported living facility seeking experienced Senior Support Workers for shift leadership and care plans."
    },
    {
      id: 2,
      title: "Site Supervisor (SSSTS)",
      sector: "Construction",
      location: "Liverpool City Centre",
      type: "Contract / Project",
      rate: "£22.00 - £26.00 / hr",
      desc: "Commercial construction project requires SSSTS supervisor for trade coordination and safety."
    },
    {
      id: 3,
      title: "Healthcare Assistant (HCA)",
      sector: "Health & Social Care",
      location: "Merseyside Care Homes",
      type: "Temp & Perm Roles",
      rate: "£12.50 - £15.00 / hr",
      desc: "Compassionate HCAs needed for nursing environments. DBS check required."
    },
    {
      id: 4,
      title: "Bricklayer / Gang",
      sector: "Construction",
      location: "Liverpool Region",
      type: "Full-Time Permanent",
      rate: "£20.00 - £24.00 / hr",
      desc: "Residential development seeking experienced bricklayers for blockwork and facing brick finish. CSCS required."
    }
  ];

  const filtered = jobs.filter(j => {
    const matchSec = filterSector === 'all' || j.sector === filterSector;
    const matchTerm = j.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSec && matchTerm;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#09090b] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Photo Header Banner */}
          <div className="relative h-32 w-full overflow-hidden">
            <img
              src="/img-diverse-workers.jpg"
              alt="Live Job Directory"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-neutral-950/80 text-neutral-400 hover:text-white border border-neutral-800 transition-colors z-10"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-8 pt-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-neutral-900 text-cyan-400 border border-neutral-800">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">Live Job Directory</h3>
                <p className="text-xs text-neutral-400 font-mono">Current Openings Across Liverpool & Merseyside</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                <input
                  type="text"
                  placeholder="Search role title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div className="flex gap-2">
                {['all', 'Health & Social Care', 'Construction'].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => setFilterSector(sec)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      filterSector === sec
                        ? 'bg-neutral-800 border-neutral-600 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {sec === 'all' ? 'All Roles' : sec === 'Health & Social Care' ? 'Healthcare' : 'Construction'}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filtered.map((job) => (
                <div key={job.id} className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-white">{job.title}</h4>
                    <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800/40 w-fit">
                      {job.rate}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mb-4">{job.desc}</p>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-500 font-mono">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                    </div>
                    <button
                      onClick={() => {
                        if (onApplyJob) {
                          onApplyJob();
                        } else {
                          onClose();
                        }
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-bold transition-colors"
                    >
                      Apply via Candidate Hub
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
