import Contact from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Norbitlink Ltd — Liverpool headquarters. Contact us for staffing enquiries, candidate registration, or general questions.',
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#09090b]">
      <Contact />
    </div>
  );
}
