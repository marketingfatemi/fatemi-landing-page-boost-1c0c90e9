
import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, Book, Play } from "lucide-react";

const ForWho = () => {
  const targets = [
    {
      icon: <Book className="w-8 h-8 text-black" />,
      text: "Sentem que há mais em Deus do que estão vivendo",
      subtitle: "Querem crescer no conhecimento da Palavra"
    },
    {
      icon: <Star className="w-8 h-8 text-black" />,
      text: "Desejam ser capacitados para servir com excelência",
      subtitle: "Buscam preparo sólido para o ministério"
    },
    {
      icon: <Users className="w-8 h-8 text-black" />,
      text: "Querem liderar com sabedoria e propósito",
      subtitle: "Baseado em princípios bíblicos verdadeiros"
    },
    {
      icon: <Play className="w-8 h-8 text-black" />,
      text: "Estão prontos para descobrir e viver seu chamado",
      subtitle: "Não querem mais viver uma vida comum"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Este curso é para você que...
          </h2>
          
          <p className="text-xl text-gray-700 mb-4 font-medium">
            Sabe que Deus tem algo maior para sua vida
          </p>
          
          <p className="text-lg text-gray-600 mb-12">
            Se você se identifica com pelo menos um desses pontos, a FATEMI foi feita para você:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {targets.map((target, index) => (
              <Card key={index} className="border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 bg-gray-100 p-4 rounded-full border-2 border-black">
                      {target.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-lg font-bold text-black mb-2 leading-relaxed">
                        {target.text}
                      </p>
                      <p className="text-gray-600">
                        {target.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-black text-white p-8 rounded-lg">
            <p className="text-xl font-medium">
              <strong>Se você respondeu "SIM" para qualquer um desses pontos...</strong><br />
              Você está a um passo de uma transformação que vai impactar sua vida para sempre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
