
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Investment = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comece hoje sua <span className="text-blue-600">jornada</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            Acreditamos que a formação ministerial deve ser acessível a todos. Por isso, oferecemos pagamento facilitado para você:
          </p>

          <Card className="border-0 shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full px-6 py-2 inline-block mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">Investimento Acessível</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pague em até <span className="text-blue-600">24x no cartão de crédito</span>
              </h3>
              
              <p className="text-lg text-gray-600 mb-8">
                Sem comprometer o limite total do seu cartão!
              </p>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Quero consultar o valor!
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Investment;
