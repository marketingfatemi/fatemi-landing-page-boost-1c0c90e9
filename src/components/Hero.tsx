
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('final-cta');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
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
            <img 
              alt="FATEMI Logo" 
              className="w-24 h-24 mx-auto mb-6" 
              src="/lovable-uploads/6527ed59-3027-4c3c-a95a-695fa44553d7.png" 
            />
          </div>

          {/* Main headline with improved typography hierarchy */}
          <h1 className="mb-6 leading-tight animate-fade-in">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light mb-2">
              O melhor
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Curso Livre de<br />
                Teologia Ministerial
              </span>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              do Brasil!
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed animate-fade-in max-w-4xl mx-auto" style={{
            animationDelay: '0.2s'
          }}>
            <strong>Mais de 10 mil pessoas já foram transformadas.</strong><br />
            Seja capacitado a viver o chamado de Deus para sua vida!
          </p>

          {/* CTA Button */}
          <Button 
            onClick={scrollToContact} 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in" 
            style={{
              animationDelay: '0.4s'
            }}
          >
            Quero conhecer o curso
          </Button>

          {/* Trust indicator */}
          <p className="text-sm text-gray-400 mt-6 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
            ✓ Certificado de Conclusão ✓ Professores Especializados ✓ 100% Digital
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
