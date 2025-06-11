import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Zap, Shield, Users } from "lucide-react";
const Investment = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541992059071?text=Ol%C3%A1!%20Estou%20interessado%20no%20curso%20de%20Teologia%20da%20FATEMI!', '_blank');
  };
  return <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 py-0 px-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-12">
            <div className="inline-block bg-green-600/10 border border-green-600/20 rounded-full text-green-400 text-sm font-medium mb-4 px-[21px] py-[12px]">
              Investimento
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 py-[8px]">
              Sua transformação começa <span className="text-green-400">hoje</span>
            </h2>
            <p className="text-xl text-white font-medium">
              Investir em sua formação ministerial nunca foi tão acessível
            </p>
          </div>

          {/* Pricing card */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-6">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-medium">Oferta Especial</span>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="text-2xl text-blue-200 mb-2">Parcele em até</div>
                  <div className="text-6xl md:text-7xl font-bold text-white mb-2">
                    24x de <span className="text-green-400">R$ 197</span>
                  </div>
                  <div className="text-blue-200">
                    ou <span className="text-white font-semibold">R$ 4.728</span> à vista
                  </div>
                  <div className="text-blue-200 text-lg mt-1">
                    no cartão de crédito
                  </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-full bg-green-600/20 border border-green-600/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-white">Sem comprometer seu limite total</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-full bg-green-600/20 border border-green-600/30 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-white">Aprovação imediata</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-full bg-green-600/20 border border-green-600/30 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-white">Acesso liberado na hora</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-full bg-green-600/20 border border-green-600/30 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-white">Sem burocracia</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button onClick={handleWhatsAppClick} size="lg" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-6 px-8 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6">
                  <span className="text-center break-words font-normal text-base">QUERO GARANTIR MINHA VAGA</span>
                </Button>

                {/* Security badge */}
                <div className="flex items-center justify-center gap-2 mt-6 text-sm text-blue-200">
                  <Shield className="w-4 h-4" />
                  <span>Pagamento 100% seguro e protegido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Investment;