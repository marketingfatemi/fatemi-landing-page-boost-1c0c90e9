import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('final-cta');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse opacity-60" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img alt="FATEMI Logo" className="w-48 h-48 mx-auto mb-6" src="/lovable-uploads/4235f20f-b895-47ac-9704-f0084dcdc037.png" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-in border border-white/20">
            <Star className="w-5 h-5 text-white fill-current" />
            <span className="text-sm font-medium text-white">28 anos transformando vidas</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Pare de viver uma vida<br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              comum e medíocre
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed animate-fade-in max-w-4xl mx-auto" style={{
          animationDelay: '0.4s'
        }}>
            <strong>Mais de 10 mil pessoas já descobriram seu verdadeiro propósito.</strong><br />
            Transforme sua vida através do maior Curso de Teologia Ministerial do Brasil
          </p>

          {/* CTA Button */}
          <Button onClick={scrollToContact} size="lg" className="bg-white text-black hover:bg-gray-100 font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            Quero transformar minha vida agora!
          </Button>

          {/* Trust indicator */}
          <p className="text-sm text-gray-400 mt-6 animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
            ✓ Certificado reconhecido ✓ Pagamento facilitado ✓ Acesso imediato
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;