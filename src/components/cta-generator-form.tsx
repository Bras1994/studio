"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateCallToAction } from "@/ai/flows/generate-call-to-action";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Copy } from "lucide-react";

const formSchema = z.object({
  targetUserDescription: z
    .string()
    .min(20, { message: "Por favor, proporciona una descripción más detallada (al menos 20 caracteres)." })
    .max(500, { message: "La descripción no puede exceder los 500 caracteres." }),
});

export function CtaGeneratorForm() {
  const [generatedCtas, setGeneratedCtas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetUserDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedCtas([]);
    try {
      const result = await generateCallToAction(values);
      if (result.callToActions) {
        setGeneratedCtas(result.callToActions);
      }
    } catch (error) {
      console.error("Error al generar CTAs:", error);
      toast({
        variant: "destructive",
        title: "Ocurrió un error",
        description: "No se pudieron generar los CTAs. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "¡Copiado al portapapeles!",
      description: "El texto del CTA ha sido copiado.",
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="targetUserDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Descripción del Usuario Objetivo</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ej: 'Emprendedoras ambiciosas de unos 30 años, expertas en tecnología pero abrumadas por las herramientas de marketing, que solo quieren lanzar su negocio de servicios.'"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generando...
                </>
              ) : (
                "Generar CTAs"
              )}
            </Button>
          </form>
        </Form>

        {generatedCtas.length > 0 && (
          <div className="mt-10 space-y-4">
            <h3 className="text-2xl font-headline font-bold">CTAs Generados</h3>
            <div className="space-y-4">
              {generatedCtas.map((cta, index) => (
                <Card key={index} className="bg-accent">
                  <CardContent className="p-4 flex items-center justify-between">
                    <p className="text-accent-foreground">{cta}</p>
                    <Button variant="ghost" size="icon" onClick={() => handleCopy(cta)}>
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copiar</span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
