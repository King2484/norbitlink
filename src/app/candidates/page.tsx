import Candidates from '@/components/Candidates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find Work — Candidate Hub',
  description:
    'Register with Norbitlink to find flexible or permanent roles in Health & Social Care and Construction across Liverpool and Merseyside.',
};

export default function CandidatesPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#09090b]">
      <Candidates />
    </div>
  );
}
