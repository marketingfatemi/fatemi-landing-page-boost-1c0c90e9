
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, CheckCircle, Star, Shield } from "lucide-react";

const FinalCTA = () => {
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
                src="/lovable-uploads/0c43f472-d0bc-4691-a328-d3ddf86a0429.png" 
                alt="FATEMI Logo" 
                className="w-32 h-32 mx-auto relative z-10" 
              />
            </div>
          </div>

          {/* Headline */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-green-600/10 border border-green-600/20 rounded-full text-green-400 text-sm font-medium mb-4">
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
            <div className="flex items-center gap-2 text-green-400">
              <Star className="w-4 h-4" />
              <span className="text-white">28 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Shield className="w-4 h-4" />
              <span className="text-white">Certificação reconhecida</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-white">+10 mil alunos formados</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-white">Acesso liberado imediatamente</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Clock className="w-4 h-4" />
              <span className="text-white">Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <MessageCircle className="w-4 h-4" />
              <span className="text-white">Atendimento personalizado</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-500/20"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Quero ser aluno da FATEMI
            </Button>
          </div>

          {/* Value proposition */}
          <p className="text-sm text-gray-400">
            <span className="text-green-400 font-semibold">✓ Resposta em até 2 minutos</span> • 
            <span className="text-blue-400 font-semibold"> ✓ Sem compromisso</span> • 
            <span className="text-purple-400 font-semibold"> ✓ Totalmente gratuito</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
