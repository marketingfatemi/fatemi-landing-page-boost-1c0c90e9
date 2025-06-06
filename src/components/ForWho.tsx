
import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, Book, Play } from "lucide-react";

const ForWho = () => {
  const targets = [
    {
      icon: <Book className="w-8 h-8 text-white" />,
      text: "Deseja crescer no conhecimento da Palavra",
      subtitle: "Aprofunde seu conhecimento teológico"
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      text: "Quer ser capacitado para servir ministerialmente",
      subtitle: "Buscam preparo sólido para o ministério"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      text: "Busca desenvolver liderança cristã",
      subtitle: "Baseado em princípios bíblicos aplicados"
    },
    {
      icon: <Play className="w-8 h-8 text-white" />,
      text: "Deseja conhecer mais sobre o chamado de Deus para sua vida",
      subtitle: "Viva uma vida com propósito"
    }
  ];

  return (
    <section className="py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Este curso é para você que...
          </h2>
          
          <p className="text-lg text-gray-400 mb-12">
            Se você se identifica com pelo menos um desses pontos, a FATEMI foi feita para você:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {targets.map((target, index) => (
              <Card key={index} className="bg-black border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 bg-gray-800 p-4 rounded-full border border-gray-600">
                      {target.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-lg font-bold text-white mb-2 leading-relaxed">
                        {target.text}
                      </p>
                      <p className="text-gray-400">
                        {target.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white text-black p-8 rounded-lg">
            <p className="text-xl font-medium">
              <strong>Se você respondeu "SIM" para qualquer um desses pontos...</strong><br />
              Você encontrou o curso certo para você!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
