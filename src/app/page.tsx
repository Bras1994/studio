import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, User, Building, Globe, Mail, MessageSquare, Linkedin, Calendar, Download, PlayCircle, Instagram, ArrowDown } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Top Banner */}
      <div className="bg-secondary text-secondary-foreground text-center py-2 px-4 text-sm">
        🎁 ¡Gratis! Ebook para destrabar tu creatividad emprendedora. 
        <a href="https://agustech.gumroad.com/l/ebookcreatividad" target="_blank" rel="noopener noreferrer" className="font-bold underline ml-2">Descargalo acá</a>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid lg:grid-cols-2 gap-10 items-center py-20 md:py-32">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Profesionalizá tu comunicación digital sin volverte loca.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Mentoría y consultoría para marcas, emprendedoras y equipos que quieren dejar de improvisar y empezar a comunicar con intención.
            </p>
            <div className="flex gap-4">
                <Button size="lg" asChild>
                    <a href="#services">
                        Así te puedo ayudar <ArrowDown className="ml-2 h-5 w-5" />
                    </a>
                </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Comunicación digital profesional"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
              data-ai-hint="woman working laptop"
            />
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="bg-primary text-primary-foreground py-20 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="https://i.imgur.com/2todKOR.png"
              alt="Agustina Santos"
              width={500}
              height={500}
              className="rounded-full aspect-square object-cover mx-auto shadow-xl"
              data-ai-hint="professional woman portrait"
            />
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Soy Agustina Santos. Analizo, ordeno y acciono.</h2>
              <p className="text-lg text-[#EDEDED]/80">
                Trabajo con emprendedoras y negocios a ordenar su comunicación, definir su estrategia y construir una presencia digital coherente, auténtica y realista.
              </p>
              <p className="text-lg text-[#EDEDED]/80">
                Trabajo con foco, herramientas simples y un enfoque que baja a tierra todo lo que parece caótico, sin fórmulas vacías ni presión.
              </p>
              <p className="text-lg text-[#EDEDED]/80">
                Si estás buscando acompañamiento para organizar tu comunicación, profesionalizar tu presencia online o alinear a tu equipo con la identidad de tu marca, acá estoy para ayudarte.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container py-20 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Servicios
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mentorias */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-headline">MENTORÍAS PARA EMPRENDEDORAS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <div>
                  <h3 className="text-xl font-bold">✨ “Bajado a Tierra” – Mentoría express</h3>
                  <p className="text-muted-foreground mt-2">Una sesión única de 90 minutos para emprendedoras que necesitan claridad YA. Ordenamos ideas, definimos prioridades y te llevás una hoja de ruta práctica.</p>
                  <p className="mt-2 font-semibold">🔹 Ideal si:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4">
                    <li>Tenés mil ideas pero nada claro</li>
                    <li>Sentís que hacés de todo pero sin estrategia</li>
                    <li>Estás trabada para dar el siguiente paso</li>
                  </ul>
                  <Button className="mt-4" asChild>
                    <a href="https://wa.me/542236951465?text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20mentor%C3%ADa%20express%20%E2%80%9CBajado%20a%20Tierra%E2%80%9D." target="_blank" rel="noopener noreferrer">👉 Quiero una mentoría</a>
                  </Button>
                </div>
                <hr/>
                <div>
                  <h3 className="text-xl font-bold">🧰 “Botiquín de Marketing” – Mentoría extendida</h3>
                  <p className="text-muted-foreground mt-2">Acompañamiento de 6 semanas para ayudarte a construir (o reconstruir) tu presencia digital desde la base: identidad, comunicación, contenido, herramientas.</p>
                  <p className="font-semibold mt-2">Incluye:</p>
                  <ul className="list-none space-y-1 mt-2 text-muted-foreground">
                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-primary"/>Análisis de tu perfil actual</li>
                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-primary"/>Marca personal y público objetivo</li>
                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-primary"/>Estrategia de contenido</li>
                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-primary"/>Creá contenido visual que te represente</li>
                    <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-primary"/>Incluye la creación de tu página web</li>
                  </ul>
                   <Button className="mt-4" asChild>
                    <a href="https://wa.me/542236951465?text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20mentor%C3%ADa%20extendida%20%E2%80%9CBotiqu%C3%ADn%20de%20Marketing%E2%80%9D." target="_blank" rel="noopener noreferrer">👉 Más info del botiquín</a>
                   </Button>
                </div>
              </CardContent>
            </Card>

            {/* Consultoria */}
            <div className="space-y-8 flex flex-col">
              <Card className="flex flex-col flex-grow">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline">CONSULTORÍA PARA NEGOCIos / PYMES</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 flex-grow">
                   <div>
                      <h3 className="text-xl font-bold">🧠 Consultora externa en marketing digital</h3>
                      <p className="text-muted-foreground mt-2">Servicio pensado para marcas, pymes o emprendimientos más consolidados que necesitan una mirada externa profesional, sin fórmulas vacías.</p>
                      <p className="mt-2 font-semibold">3 etapas de trabajo:</p>
                      <ol className="list-decimal list-inside text-muted-foreground ml-4">
                        <li>Brief y diagnóstico del negocio</li>
                        <li>Auditoría de redes y comunicación</li>
                        <li>Plan estratégico + calendario de contenidos</li>
                      </ol>
                       <p className="text-muted-foreground mt-2">Podés sumar seguimiento mensual o usarlo como base para que lo implemente tu equipo.</p>
                      <Button className="mt-4" asChild>
                        <a href="https://wa.me/542236951465?text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20consultor%C3%ADa%20externa%20en%20marketing%20digital." target="_blank" rel="noopener noreferrer">👉 Ver cómo trabajamos</a>
                      </Button>
                   </div>
                </CardContent>
              </Card>
            </div>
          </div>
            
          {/* Taller para equipos */}
          <div className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">🟠 TALLER PARA EQUIPOS</CardTitle>
                </CardHeader>
                <CardContent>
                    <h3 className="text-xl font-bold">🎓 Marca personal con propósito – Formación para equipos</h3>
                    <p className="text-muted-foreground mt-2">Un taller pensado para que los miembros de tu equipo representen a la marca desde lo humano, con autenticidad y profesionalismo. Ideal para áreas comerciales, marketing, liderazgo o RRHH.</p>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div>
                            <p className="font-semibold">Incluye:</p>
                            <ul className="list-none space-y-1 mt-2 text-muted-foreground">
                                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0"/>Dinámicas para descubrir fortalezas y estilo personal</li>
                                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0"/>Guía para comunicar con coherencia en redes sociales</li>
                                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0"/>Ejercicios grupales y recursos editables</li>
                                <li className="flex items-start"><Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0"/>Revisión de perfiles + certificado de participación</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold">🔹 Ideal si:</p>
                             <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2">
                                <li>Tu equipo no sabe cómo “mostrarse” sin parecer forzado</li>
                                <li>Querés potenciar la comunicación interna y externa</li>
                                <li>Buscás que cada persona represente a tu marca desde su valor personal</li>
                            </ul>
                        </div>
                    </div>
                    <Button className="mt-4" asChild>
                      <a href="https://wa.me/542236951465?text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20taller%20para%20equipos%20%E2%80%9CMarca%20personal%20con%20prop%C3%B3sito%E2%80%9D." target="_blank" rel="noopener noreferrer">👉 Quiero este taller para mi equipo</a>
                    </Button>
                </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Free Resources Section */}
        <section id="free-resources" className="bg-primary py-20 md:py-24 text-primary-foreground">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">
                        🎁 Recursos Gratuitos
                    </h2>
                </div>
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    <Card className="bg-card text-card-foreground">
                        <CardHeader>
                            <CardTitle className="text-xl font-headline">📘 Ebook – Activá tu creatividad emprendedora</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">Una guía práctica para dejar de sentirte bloqueada, destrabar ideas y volver a conectar con tu contenido.</p>
                            <p className="text-foreground">💡 Ideal si estás empezando o perdiste el entusiasmo.</p>
                            <Button asChild>
                                <a href="https://agustech.gumroad.com/l/ebookcreatividad" target="_blank" rel="noopener noreferrer">
                                    <Download className="mr-2 h-4 w-4" />
                                    Descargalo gratis
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="bg-card text-card-foreground">
                        <CardHeader>
                            <CardTitle className="text-xl font-headline">🎥 Clase gratuita – Creá tu Linktree paso a paso</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">Una guía simple para tener tu perfil más profesional, sin depender de nadie.</p>
                            <p className="text-foreground">🌱 Ideal para emprendedoras que están empezando a ordenarse digitalmente.</p>
                            <Button asChild>
                                <a href="https://agustech.systeme.io/clase-gratis" target="_blank" rel="noopener noreferrer">
                                    <PlayCircle className="mr-2 h-4 w-4" />
                                    Accedé a la clase
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Final CTA Section */}
        <section id="final-cta" className="bg-primary py-20 md:py-24">
          <div className="container text-center max-w-3xl mx-auto text-primary-foreground">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              ¿No sabés por dónde empezar?
            </h2>
            <p className="mt-4 text-lg text-[#EDEDED]/80">
              Agendá una llamada gratuita de 20 minutos y te ayudo a elegir el camino más claro según tu negocio y tu momento.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/542236951465?text=Hola!%20Quiero%20agendar%20una%20llamada%20gratuita%20para%20saber%20cual%20servicio%20me%20conviene%20m%C3%A1s." target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" /> Agendar llamada
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
