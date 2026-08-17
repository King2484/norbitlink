import HealthCare from '@/components/HealthCare';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health & Social Care Staffing',
  description:
    'Norbitlink provides fully vetted HCAs, Care Assistants, Support Workers, and senior care staff across Liverpool and Merseyside. DBS-checked, compliance-ready.',
};

export default function HealthcarePage() {
  return (
    <div className="pt-20 min-h-screen bg-[#09090b]">
      <HealthCare />
    </div>
  );
}
