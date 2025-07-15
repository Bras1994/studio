import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { Instagram } from 'lucide-react';
import { FloatingWhatsappButton } from '@/components/floating-whatsapp-button';

export const metadata: Metadata = {
  title: 'Agustina Santos - Comunicación y Estrategia Digital',
  description: 'Mentorías, estrategia y páginas web para emprendedoras y negocios.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Play:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <FloatingWhatsappButton />
        <Toaster />
      </body>
    </html>
  );
}
