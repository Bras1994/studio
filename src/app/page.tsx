import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle2, Calendar, MessageCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const benefits = [
  "Gana una claridad cristalina sobre la dirección de tu negocio.",
  "Aumenta tu energía y motivación para tomar acciones consistentes.",
  "Logra un enfoque láser en lo que realmente importa para el crecimiento.",
  "Desarrolla un plan estratégico que se alinee con tu visión.",
  "Supera el agobio con una guía práctica y paso a paso."
];

const testimonials = [
  {
    quote: "La guía de Agustina fue un antes y un después. Pasé de sentirme completamente perdida a tener una hoja de ruta clara para mi negocio. ¡No puedo agradecerle lo suficiente!",
    name: "Laura P.",
    title: "Fundadora, Creative Minds Co."
  },
  {
    quote: "La mentoría 'Baja a Tierra' me ayudó a eliminar el ruido y concentrarme en lo importante. Mi productividad se ha disparado y me siento más en control que nunca.",
    name: "Sofía R.",
    title: "Emprendedora de E-commerce"
  },
  {
    quote: "Al principio era escéptica, pero las ideas estratégicas de Agustina son oro puro. Me ayudó a identificar mis prioridades clave y me dio la confianza para perseguirlas.",
    name: "Camila G.",
    title: "Proveedora de Servicios Digitales"
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
              Deja de Ahogarte en Ideas. Empieza a Construir Tu Sueño.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              ¿Te sientes abrumada por la información interminable? El servicio <span className="font-bold text-primary">Baja a Tierra</span> ayuda a mujeres emprendedoras como tú a encontrar claridad y construir un negocio que prospere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" /> Agenda una Llamada Gratis
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chatea por WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Mujer sintiéndose clara y enfocada"
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
              ¿Te Sientes Desorganizada y Estancada?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No estás sola. Muchas emprendedoras brillantes se quedan atascadas en un ciclo de sobrecarga de información y parálisis por análisis. Es hora de liberarse y obtener un plan claro y accionable que haga avanzar tu negocio.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container py-20 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Qué Obtendrás con 'Baja a Tierra'
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nuestra mentoría está diseñada para darte la claridad, energía y enfoque que necesitas para tener éxito.
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
              alt="Agustina, Fundadora de Clarity Launchpad"
              width={500}
              height={500}
              className="rounded-full aspect-square object-cover mx-auto shadow-xl"
              data-ai-hint="professional woman portrait"
            />
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Sobre Agustina</h2>
              <p className="text-lg text-muted-foreground">
                Con más de una década de experiencia en marketing digital y apoyo estratégico, he ayudado a innumerables emprendedoras a navegar las complejidades de construir un negocio en línea exitoso.
              </p>
              <p className="text-lg text-muted-foreground">
                Mi pasión es ayudarte a eliminar el desorden, alinear tus acciones con tu visión y construir un negocio que no solo sea rentable, sino también profundamente gratificante. Hagamos tu sueño realidad, juntas.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-20 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Lo Que Dicen Nuestras Clientas
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
              ¿Lista para Encontrar tu Enfoque?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Da el primer paso hacia la claridad y la acción impactante. Tu yo del futuro te lo agradecerá.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" /> Agenda una Llamada Gratis
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chatea por WhatsApp
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
