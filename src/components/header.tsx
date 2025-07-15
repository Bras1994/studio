import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-lg">Agustina Santos</span>
          </Link>
        </div>
        <nav className="flex-1 items-center space-x-4 hidden md:flex">
           <Link href="/#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Sobre mí</Link>
           <Link href="/#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Servicios</Link>
           <Link href="/#free-resources" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Recursos</Link>
           <Link href="/#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contacto</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <a href="https://wa.me/+542236951465?text=Hola!%20Quiero%20agendar%20una%20llamada%20gratuita%20para%20saber%20cual%20servicio%20me%20conviene%20m%C3%A1s." target="_blank" rel="noopener noreferrer">Agendar una llamada</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
