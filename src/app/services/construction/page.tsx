import Construction from '@/components/Construction';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction & Trades Recruitment',
  description:
    'CSCS/CPCS certified construction workers, tradespeople, site managers and labourers — Norbitlink Construction Division serves Liverpool and the North West.',
};

export default function ConstructionPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#09090b]">
      <Construction />
    </div>
  );
}
