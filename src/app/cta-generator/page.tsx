import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CtaGeneratorForm } from "@/components/cta-generator-form";

export default function CtaGeneratorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Generador de CTA con IA
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Describe tu público objetivo y nuestra IA creará textos de llamado a la acción convincentes y adaptados a ellos. Encuentra las palabras perfectas para aumentar tu interacción.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <CtaGeneratorForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
