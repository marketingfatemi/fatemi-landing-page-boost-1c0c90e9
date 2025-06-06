
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Zap, Shield, ArrowRight } from "lucide-react";

const Investment = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Quero garantir minha vaga no curso de Teologia da FATEMI', '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 py-0 px-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-8 md:mb-12">
            <div className="inline-block bg-green-600/10 border border-green-600/20 rounded-full text-green-400 text-xs md:text-sm font-medium mb-4 px-4 md:px-6 py-2 md:py-3">
              Investimento
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 py-2 px-4">
              Sua transformação começa <span className="text-green-400">hoje</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-medium px-4">
              Investir em sua formação ministerial nunca foi tão acessível
            </p>
          </div>

          {/* Pricing card */}
          <div className="max-w-2xl mx-auto mb-8 md:mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-600/30 rounded-full px-3 md:px-4 py-2 mb-4 md:mb-6">
                  <Zap className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                  <span className="text-green-400 font-medium text-sm md:text-base">Oferta Especial</span>
                </div>

                {/* Price */}
                <div className="mb-6 md:mb-8">
                  <div className="text-lg md:text-2xl text-gray-400 mb-2">Parcele em até</div>
                  <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                    24x de <span className="text-green-400">R$ 197</span>
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    ou <span className="text-white font-semibold">R$ 4.728</span> à vista
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-600/20 border border-green-600/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    </div>
                    <span className="text-white text-sm md:text-base">Sem comprometer seu limite total</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-600/20 border border-green-600/30 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    </div>
                    <span className="text-white text-sm md:text-base">Aprovação imediata</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-600/20 border border-green-600/30 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    </div>
                    <span className="text-white text-sm md:text-base">Acesso liberado na hora</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-600/20 border border-green-600/30 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    </div>
                    <span className="text-white text-sm md:text-base">Sem burocracia</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={openWhatsApp} 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 md:py-6 px-8 md:px-12 rounded-full text-lg md:text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-500/20 mb-4"
                >
                  GARANTIR MINHA VAGA
                </Button>

                {/* Security badge */}
                <div className="flex items-center justify-center gap-2 mt-4 md:mt-6 text-xs md:text-sm text-gray-400">
                  <Shield className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Pagamento 100% seguro e protegido</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional CTA section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/20 border border-blue-600/30 rounded-xl p-4 md:p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-blue-400 mb-3 md:mb-4">
              <span className="font-semibold text-base md:text-lg">Transforme sua vida hoje mesmo</span>
            </div>
            <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4">
              <span className="text-blue-400 font-semibold">Mais de 10 mil</span> pessoas já foram capacitadas através do nosso curso. Seja o próximo!
            </p>
            <Button 
              onClick={openWhatsApp} 
              size="lg" 
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 md:px-8 rounded-full text-sm md:text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              QUERO ME INSCREVER AGORA!
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
