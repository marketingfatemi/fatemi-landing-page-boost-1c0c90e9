
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/0c43f472-d0bc-4691-a328-d3ddf86a0429.png" 
              alt="FATEMI Logo" 
              className="w-32 h-32 mx-auto mb-6"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-white fill-current" />
            <span className="text-sm font-medium">O momento é agora</span>
          </div>

          {/* Main headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Pare de viver uma vida<br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              comum e medíocre
            </span>
          </h2>

          {/* Subtitle */}
          <h3 className="text-2xl md:text-3xl mb-4 text-gray-200 font-medium">
            Você foi chamado para algo extraordinário!
          </h3>
          
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <strong>Não desperdice mais tempo</strong> vivendo abaixo do que Deus preparou para você. 
            Sua transformação começa com uma decisão.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-white">
              <strong>Mais de 10 mil pessoas</strong> já deram esse passo.<br />
              <strong>Quando será a sua vez?</strong>
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6"
          >
            SIM! Quero transformar minha vida agora!
          </Button>

          {/* Additional text */}
          <p className="text-sm text-gray-400 opacity-80">
            Fale agora com nossa equipe e comece sua jornada de transformação • Acesso liberado imediatamente
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
