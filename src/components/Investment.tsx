
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Investment = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Sua transformação começa <span className="text-gray-600">hoje</span>
          </h2>
          
          <p className="text-xl text-gray-700 mb-4 font-medium">
            Investir em sua formação ministerial nunca foi tão acessível
          </p>
          
          <p className="text-lg text-gray-600 mb-12">
            Acreditamos que <strong>dinheiro não pode ser um obstáculo</strong> para quem quer crescer no Reino. Por isso:
          </p>

          <Card className="border-2 border-black shadow-2xl max-w-2xl mx-auto bg-white">
            <CardContent className="p-12">
              <div className="bg-black text-white rounded-full px-6 py-3 inline-block mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">Condições Especiais</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-black mb-6">
                Parcele em até <span className="text-gray-600">24x no cartão</span>
              </h3>
              
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 mb-8">
                <p className="text-lg text-gray-700 mb-2">
                  <strong>✓ Sem comprometer seu limite total</strong>
                </p>
                <p className="text-gray-600">
                  ✓ Aprovação imediata • ✓ Acesso liberado na hora • ✓ Sem burocracia
                </p>
              </div>

              <Button 
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-bold py-6 px-12 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
