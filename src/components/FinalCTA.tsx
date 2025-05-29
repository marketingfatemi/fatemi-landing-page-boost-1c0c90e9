
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Sua jornada começa agora</span>
          </div>

          {/* Main headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Seja capacitado a servir o<br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Reino de Deus!
            </span>
          </h2>

          {/* Subtitle */}
          <h3 className="text-2xl md:text-3xl mb-4 text-blue-100">
            Não passe mais um dia sem viver intensamente a Palavra!
          </h3>
          
          <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
            Fale agora com a equipe FATEMI e comece já!
          </p>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Quero saber mais sobre o curso!
          </Button>

          {/* Additional text */}
          <p className="text-sm text-blue-200 mt-8 opacity-80">
            Entre em contato agora e transforme sua vida através da Palavra de Deus
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
