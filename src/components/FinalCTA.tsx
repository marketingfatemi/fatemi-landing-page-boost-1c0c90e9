
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
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

          {/* Subtitle */}
          <h3 className="text-2xl md:text-3xl mb-8 text-gray-200 font-medium">
            Venha estudar conosco!
          </h3>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6"
          >
            Quero ser aluno da FATEMI
          </Button>

          {/* Additional text */}
          <p className="text-sm text-gray-400 opacity-80">
            Fale agora com nossa equipe e comece já - Acesso liberado imediatamente
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
