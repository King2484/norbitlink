'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { EmployerModal, CandidateModal, JobBoardModal } from '@/components/Modals';

interface ModalContextValue {
  openEmployerModal: () => void;
  openCandidateModal: (tab?: string) => void;
  openJobBoardModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useModal must be used within a <ModalProvider />');
  }
  return ctx;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [employerOpen, setEmployerOpen] = useState(false);
  const [candidateOpen, setCandidateOpen] = useState(false);
  const [candidateTab, setCandidateTab] = useState('register');
  const [jobBoardOpen, setJobBoardOpen] = useState(false);

  const openEmployerModal = useCallback(() => setEmployerOpen(true), []);
  const openCandidateModal = useCallback((tab = 'register') => {
    setCandidateTab(tab);
    setCandidateOpen(true);
  }, []);
  const openJobBoardModal = useCallback(() => setJobBoardOpen(true), []);

  return (
    <ModalContext.Provider
      value={{ openEmployerModal, openCandidateModal, openJobBoardModal }}
    >
      {children}

      <EmployerModal
        isOpen={employerOpen}
        onClose={() => setEmployerOpen(false)}
      />
      <CandidateModal
        isOpen={candidateOpen}
        initialTab={candidateTab}
        onClose={() => setCandidateOpen(false)}
      />
      <JobBoardModal
        isOpen={jobBoardOpen}
        onClose={() => setJobBoardOpen(false)}
        onApplyJob={() => {
          setJobBoardOpen(false);
          openCandidateModal('register');
        }}
      />
    </ModalContext.Provider>
  );
}
