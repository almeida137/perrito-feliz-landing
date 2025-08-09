import { Button } from "@/components/ui/button";
import { ConversionSection } from "@/components/ConversionSection";
import { CheckList } from "@/components/CheckList";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PriceTag } from "@/components/PriceTag";

const Index = () => {
  const beneficios = [
    "Reducir inflamaciones articulares con nutrición natural",
    "Incluir ejercicios ligeros que fortalezcan los músculos", 
    "Prevenir problemas futuros"
  ];

  const secretos = [
    "Alimentación antiinflamatoria",
    "Fortalecimiento físico adaptado",
    "Prevención y longevidad canina"
  ];

  const resultados = [
    "Más energía para jugar",
    "Menos dolor al caminar o subir escaleras",
    "Pelaje más bonito",
    "Un perro más feliz y activo"
  ];

  const faqs = [
    { q: "¿Funciona para cualquier raza y edad?", a: "Sí." },
    { q: "¿Necesito cambiar el pienso?", a: "No, solo ajustar." },
    { q: "¿En cuánto tiempo veré resultados?", a: "Entre 7 y 15 días de media." },
    { q: "¿Es seguro?", a: "100% natural y sin riesgos." },
    { q: "¿Y si mi perro tiene un caso grave?", a: "Consulta siempre al veterinario, pero la guía ayuda como apoyo." }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground py-6 shadow-glow">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">🐾 Perro Saludable</h1>
        </div>
      </header>

      {/* Hero Section */}
      <ConversionSection variant="default" className="pt-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Más de <span className="text-success">3.757 perros</span> ya volvieron a correr, jugar y vivir{" "}
            <span className="text-primary">sin dolores en las articulaciones</span>
          </h1>
          
          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-card">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/xWQRizxTsds"
                title="PERRO SALUDABLE" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Dile adiós a la tristeza de ver a tu mejor amigo cojeando.<br/>
              Con un ajuste simple y natural en la alimentación, tu perro puede recuperar energía y movilidad en pocos días.
            </p>
            <Button variant="cta" size="xl" className="animate-bounce-gentle">
              QUIERO AYUDAR A MI PERRO AHORA
            </Button>
          </div>
        </div>
      </ConversionSection>

      {/* Story Section */}
      <ConversionSection className="bg-muted/30">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Sé lo doloroso que es ver sufrir a tu perro.<br/>
            Ver esa mirada triste, la dificultad para subir al sofá o caminar.<br/>
            Yo también pasé por eso… y así nació Perro Saludable.
          </p>
          <p className="text-xl font-semibold text-primary">
            Hoy, 3.757 perros ya han recuperado calidad de vida con nuestro método — y el tuyo puede ser el próximo.
          </p>
        </div>
      </ConversionSection>

      {/* What is Section */}
      <ConversionSection>
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            💡 ¿Qué es y cómo funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Es una guía digital con orientaciones prácticas para:
          </p>
          <CheckList items={beneficios} variant="success" />
          
          {/* Product Image */}
          <div className="flex justify-center py-8">
            <img 
              src="/lovable-uploads/3c26dd21-d141-42ff-b340-7399937a695c.png" 
              alt="Ebook Perro Saludable" 
              className="max-w-sm w-full h-auto shadow-card rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </ConversionSection>

      {/* How it Works */}
      <ConversionSection variant="highlight">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            📈 El secreto detrás de los resultados
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            El método de Perro Saludable actúa en tres pilares:
          </p>
          <CheckList items={secretos} className="text-primary-foreground" />
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Beneficios:</h3>
            <CheckList items={resultados} className="text-primary-foreground" />
          </div>
        </div>
      </ConversionSection>

      {/* Testimonials */}
      <ConversionSection variant="testimonial">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            🐕 Historias reales, resultados reales
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <TestimonialCard 
              content="Mi perro estaba sin ánimo… después de seguir la guía, volvió a correr en 10 días!"
              author="María S."
            />
            <TestimonialCard 
              content="No tuve que gastar una fortuna en el veterinario para ver mejoras."
              author="Juan L."
            />
          </div>
          <p className="text-xl font-bold text-primary">
            Más de 3.757 perros ya han sido transformados por Perro Saludable. El próximo puede ser el tuyo.
          </p>
        </div>
      </ConversionSection>

      {/* Offer Section */}
      <ConversionSection variant="offer">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            🔥 Oferta especial por tiempo limitado
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-cta max-w-2xl mx-auto">
            <PriceTag 
              originalPrice="49" 
              currentPrice="9,90" 
              currency="USD"
              className="mb-6"
            />
            
            <div className="space-y-4 text-lg">
              <p className="flex items-center justify-center gap-2">
                🎁 <strong>Bono:</strong> Lista de los 10 peores piensos para tu perro
              </p>
              <p className="flex items-center justify-center gap-2">
                ✅ <strong>Garantía de 7 días:</strong> si no te gusta, te devolvemos el dinero
              </p>
              <p className="text-xl font-bold">
                Acceso de por vida
              </p>
            </div>
            
            <Button variant="success" size="xl" className="mt-8 w-full animate-pulse-glow">
              QUIERO PERRO SALUDABLE AHORA
            </Button>
          </div>
        </div>
      </ConversionSection>

      {/* FAQ */}
      <ConversionSection>
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            ❓ Preguntas Frecuentes
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">
                  → {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ConversionSection>

      {/* Final CTA */}
      <ConversionSection variant="highlight">
        <div className="text-center space-y-8">
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            Tu perro merece vivir sin dolor.<br/>
            Ya son 3.757 perros transformados. Ahora es el turno del tuyo.
          </p>
          <Button variant="cta" size="xl" className="animate-bounce-gentle">
            QUIERO AYUDAR A MI PERRO AHORA
          </Button>
        </div>
      </ConversionSection>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-sm opacity-80">
            Esta página no ofrece ningún tipo de asesoramiento veterinario. Los testimonios pueden ser ficticios, utilizados solo con fines ilustrativos. El producto no sustituye el diagnóstico, tratamiento o cura.
          </p>
          <p className="text-sm">
            © Copyright 2025 - Perro Saludable
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
