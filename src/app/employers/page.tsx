import Employers from '@/components/Employers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employer Staffing Solutions',
  description:
    'Norbitlink helps employers in Health & Social Care and Construction find reliable vetted staff quickly. Temporary, emergency, and permanent workforce solutions.',
};

export default function EmployersPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#09090b]">
      <Employers />
    </div>
  );
}
