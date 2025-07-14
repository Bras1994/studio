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
              AI-Powered CTA Generator
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Describe your target audience, and our AI will craft compelling call-to-action texts tailored to them. Find the perfect words to boost your engagement.
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
