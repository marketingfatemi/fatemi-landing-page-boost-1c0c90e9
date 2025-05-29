
import { Button } from "@/components/ui/button";

const Investment = () => {
  return (
    <section id="pricing" className="py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sua transformação começa <span className="text-gray-400">hoje</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-4 font-medium">
            Investir em sua formação ministerial nunca foi tão acessível
          </p>

          <div className="bg-black border border-gray-700 shadow-2xl max-w-2xl mx-auto rounded-lg p-12 mb-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Parcele em até <span className="text-gray-300">24x no cartão</span>
            </h3>
            
            <div className="text-6xl font-bold text-white mb-2">
              24x de <span className="text-gray-300">R$ 197</span>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-600 mb-8">
              <p className="text-lg text-gray-300 mb-2">
                <strong className="text-white">✓ Sem comprometer seu limite total</strong>
              </p>
              <p className="text-gray-400">
                ✓ Aprovação imediata • ✓ Acesso liberado na hora • ✓ Sem burocracia
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-white hover:bg-gray-100 text-black font-bold py-6 px-12 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Quero ser o próximo!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
