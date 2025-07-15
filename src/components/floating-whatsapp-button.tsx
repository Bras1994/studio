'use client';

import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export function FloatingWhatsappButton() {
  return (
    <Link
      href="https://wa.me/542236951465?text=Hola!%20Quisiera%20hacer%20una%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare className="h-8 w-8" />
    </Link>
  );
}
