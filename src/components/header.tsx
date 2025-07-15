import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const navLinks = [
    { href: "/#about", label: "Sobre mí" },
    { href: "/#services", label: "Servicios" },
    { href: "/#free-resources", label: "Recursos" },
    { href: "/#contact", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-lg">Agustina Santos</span>
          </Link>
        </div>
        <nav className="flex-1 items-center space-x-4 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="hidden md:inline-flex">
            <a href="https://wa.me/+542236951465?text=Hola!%20Quiero%20agendar%20una%20llamada%20gratuita%20para%20saber%20cual%20servicio%20me%20conviene%20m%C3%A1s." target="_blank" rel="noopener noreferrer">
              Agendar una llamada
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-4">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold font-headline text-lg">Agustina Santos</span>
                </Link>
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-4">
                  <a href="https://wa.me/+542236951465?text=Hola!%20Quiero%20agendar%20una%20llamada%20gratuita%20para%20saber%20cual%20servicio%20me%20conviene%20m%C3%A1s." target="_blank" rel="noopener noreferrer">
                    Agendar una llamada
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
