import { Instagram, Linkedin, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted py-8 mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Agustina Santos. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
            <a href="mailto:agustinasantos.tech@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
            </a>
            <a href="https://wa.me/..." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-foreground transition-colors">
                <MessageSquare className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/agus.tech" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
            </a>
        </div>
      </div>
    </footer>
  );
}
