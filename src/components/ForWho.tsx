
import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, Book, Play } from "lucide-react";

const ForWho = () => {
  const targets = [
    {
      icon: <Book className="w-8 h-8 text-blue-600" />,
      text: "Desejam crescer no conhecimento da Palavra de Deus"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      text: "Querem ser capacitados ao serviço Cristão"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      text: "Buscam desenvolver uma liderança baseada em princípios bíblicos"
    },
    {
      icon: <Play className="w-8 h-8 text-blue-600" />,
      text: "Querem descobrir e viver seu propósito"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Para quem é a <span className="text-blue-600">FATEMI</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            A FATEMI é para todos aqueles que:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {targets.map((target, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                      {target.icon}
                    </div>
                    <p className="text-lg text-gray-700 text-left leading-relaxed">
                      {target.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
