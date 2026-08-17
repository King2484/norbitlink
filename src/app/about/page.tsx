import About from '@/components/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Norbitlink Ltd — our mission, values, compliance standards, and why we are Liverpool\'s trusted specialist recruitment partner.',
};

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#09090b]">
      <About />
    </div>
  );
}
