
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Star, Shield } from "lucide-react";

const FinalCTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('final-cta');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="final-cta" className="bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 md:mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/51ab4e1f-4919-443e-a354-5075b8b71ec8.png" 
                alt="FATEMI Logo" 
                className="w-24 h-24 md:w-32 md:h-32 mx-auto relative z-10" 
              />
            </div>
          </div>

          {/* Headline */}
          <div className="mb-6 md:mb-8">
            <div className="inline-block px-3 md:px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-xs md:text-sm font-medium mb-4">
              Transforme Sua Vida
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 px-4">
              Comece sua jornada ministerial hoje!
            </h3>
            <p className="text-base md:text-lg text-gray-300 px-4">
              Junte-se aos milhares de alunos que já transformaram suas vidas
            </p>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8 text-xs md:text-sm">
            <div className="flex items-center gap-2 text-blue-400">
              <Star className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-white">28 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Shield className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-white">Certificação reconhecida</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-white"><span className="text-blue-400 font-semibold">+10 mil</span> alunos formados</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8 text-xs md:text-sm">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-white">Acesso liberado imediatamente</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-white">Atendimento personalizado</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-4 md:mb-6 px-4">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 md:py-6 px-8 md:px-12 rounded-full text-lg md:text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-500/20"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Quero ser aluno da FATEMI
            </Button>
          </div>

          {/* Value proposition */}
          <p className="text-xs md:text-sm text-gray-400 px-4">
            <span className="text-green-400 font-semibold">✓ Sem compromisso</span> • 
            <span className="text-blue-400 font-semibold"> ✓ Certificação reconhecida</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
