
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Star, Shield } from "lucide-react";

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541992059071?text=Ol%C3%A1!%20Estou%20interessado%20no%20curso%20de%20Teologia%20da%20FATEMI!', '_blank');
  };

  return (
    <section id="final-cta" className="bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden py-24">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/8c4056b9-fcb3-4b64-b4ee-12ce3da9013c.png" 
                alt="FATEMI Logo" 
                className="w-32 h-32 mx-auto relative z-10" 
              />
            </div>
          </div>

          {/* Headline */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-yellow-600/10 border border-yellow-600/20 rounded-full text-yellow-400 text-sm font-medium mb-4">
              Transforme Sua Vida
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comece sua jornada ministerial hoje!
            </h3>
            <p className="text-lg text-gray-300">
              Junte-se aos milhares de alunos que já transformaram suas vidas
            </p>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2 text-yellow-400">
              <Star className="w-4 h-4" />
              <span className="text-white">28 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-white">+10 mil alunos formados</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2 text-yellow-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-white">Acesso liberado imediatamente</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <MessageCircle className="w-4 h-4" />
              <span className="text-white">Atendimento personalizado</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-6 px-4">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-bold py-6 px-6 sm:px-12 rounded-full text-lg sm:text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-500/20 w-full sm:w-auto break-words"
            >
              <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-center">Quero ser aluno da FATEMI</span>
            </Button>
          </div>

          {/* Value proposition */}
          <p className="text-sm text-gray-400">
            <span className="text-yellow-400 font-semibold">✓ Sem compromisso</span> • 
            <span className="text-blue-400 font-semibold"> ✓ Formação completa</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
