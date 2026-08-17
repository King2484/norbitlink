'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Health & Care', href: '/services/healthcare' },
  { name: 'Construction', href: '/services/construction' },
  { name: 'Employers', href: '/employers' },
  { name: 'Candidates', href: '/candidates' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { openEmployerModal, openCandidateModal } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-[#09090b]/95 backdrop-blur-sm border-b border-neutral-800 py-3 shadow-xl'
          : 'bg-transparent py-5'
      )}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Norbitlink Logo"
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
                NORBITLINK
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-mono font-bold px-1.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-800/50">
                LTD
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono font-medium">
              Liverpool Specialist Recruitment
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-neutral-900/90 px-2 py-1.5 rounded-full border border-neutral-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors',
                isActive(link.href)
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            onClick={openEmployerModal}
            size="sm"
            className="gap-1.5"
          >
            Need Staff?
            <ArrowUpRight size={14} />
          </Button>
          <Button
            onClick={() => openCandidateModal('register')}
            variant="outline"
            size="sm"
          >
            Find Work
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#09090b] border-b border-neutral-800 px-6 py-6"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'py-2.5 px-4 text-sm font-medium rounded-xl transition-colors',
                    isActive(link.href)
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-300 hover:bg-neutral-800/60 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-800 mt-2">
                <Button
                  onClick={() => { setMobileMenuOpen(false); openEmployerModal(); }}
                  className="w-full"
                  size="sm"
                >
                  Need Staff?
                </Button>
                <Button
                  onClick={() => { setMobileMenuOpen(false); openCandidateModal('register'); }}
                  variant="outline"
                  className="w-full"
                  size="sm"
                >
                  Find Work
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
