
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Investment = () => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sua transformação começa <span className="text-gray-400">hoje</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-4 font-medium">
            Investir em sua formação ministerial nunca foi tão acessível
          </p>
          
          <p className="text-lg text-gray-400 mb-12">
            Acreditamos que <strong className="text-white">dinheiro não pode ser um obstáculo</strong> para quem quer crescer no Reino. Por isso:
          </p>

          <Card className="border border-gray-700 shadow-2xl max-w-2xl mx-auto bg-gray-900">
            <CardContent className="p-12">
              <div className="bg-white text-black rounded-full px-6 py-3 inline-block mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">Condições Especiais</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6">
                Parcele em até <span className="text-gray-300">24x no cartão</span>
              </h3>
              
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
                Quero saber o valor e começar agora!
              </Button>

              <p className="text-sm text-gray-500 mt-4">
                Fale com nossa equipe e descubra como investir na sua transformação
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Investment;
