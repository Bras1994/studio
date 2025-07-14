import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle2, Calendar, MessageCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const benefits = [
  "Gain crystal-clear clarity on your business direction.",
  "Boost your energy and motivation to take consistent action.",
  "Achieve laser-focus on what truly matters for growth.",
  "Develop a strategic plan that aligns with your vision.",
  "Overcome overwhelm with practical, step-by-step guidance."
];

const testimonials = [
  {
    quote: "Agustina's guidance was a game-changer. I went from feeling completely lost to having a clear roadmap for my business. I can't thank her enough!",
    name: "Laura P.",
    title: "Founder, Creative Minds Co."
  },
  {
    quote: "The 'Baja la Tierra' mentorship helped me cut through the noise and focus on what's important. My productivity has skyrocketed, and I feel more in control than ever.",
    name: "Sofia R.",
    title: "E-commerce Entrepreneur"
  },
  {
    quote: "I was skeptical at first, but Agustina’s strategic insights are pure gold. She helped me identify my key priorities and gave me the confidence to pursue them.",
    name: "Camila G.",
    title: "Digital Services Provider"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid lg:grid-cols-2 gap-10 items-center py-20 md:py-32 animate-in fade-in duration-1000">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Stop Drowning in Ideas. Start Building Your Dream.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Feeling overwhelmed by endless information? The <span className="font-bold text-primary">Baja la Tierra</span> service helps entrepreneurial women like you find clarity and build a business that thrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" /> Book a Free Call
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Woman feeling clear and focused"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
              data-ai-hint="abstract pastel shapes"
            />
          </div>
        </section>

        {/* Empathy Section */}
        <section className="bg-accent py-20 md:py-24">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Feeling Disorganized and Stuck?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              You're not alone. Many brilliant entrepreneurs get stuck in a cycle of information overload and analysis paralysis. It's time to break free and get a clear, actionable plan that moves your business forward.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container py-20 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              What You'll Gain from 'Baja la Tierra'
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our mentorship is designed to give you the clarity, energy, and focus you need to succeed.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-2 bg-transparent border-0 shadow-none">
                <CardContent className="flex items-start gap-4 p-4">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="font-body text-base text-muted-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Agustina Section */}
        <section className="bg-accent py-20 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Agustina, Founder of Clarity Launchpad"
              width={500}
              height={500}
              className="rounded-full aspect-square object-cover mx-auto shadow-xl"
              data-ai-hint="professional woman portrait"
            />
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">About Agustina</h2>
              <p className="text-lg text-muted-foreground">
                With over a decade of experience in digital marketing and strategic support, I've helped countless entrepreneurs navigate the complexities of building a successful online business.
              </p>
              <p className="text-lg text-muted-foreground">
                My passion is helping you cut through the clutter, align your actions with your vision, and build a business that is not only profitable but also deeply fulfilling. Let's make your dream a reality, together.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-20 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              What Our Clients Say
            </h2>
          </div>
          <Carousel className="mt-12 w-full max-w-4xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                        <div className="text-right">
                          <p className="font-bold font-headline text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Final CTA Section */}
        <section className="bg-accent py-20 md:py-24">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Ready to Find Your Focus?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Take the first step towards clarity and impactful action. Your future self will thank you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" /> Book a Free Call
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
