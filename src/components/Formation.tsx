
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Book, Star, Play, Users } from "lucide-react";

const Formation = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-blue-600" />,
      title: "Certificado de Conclusão"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Duração de até 2 anos"
    },
    {
      icon: <Play className="w-6 h-6 text-blue-600" />,
      title: "Estude onde quiser e quando quiser"
    },
    {
      icon: <Book className="w-6 h-6 text-blue-600" />,
      title: "Material Didático Digital Incluso"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Avaliações e suporte pedagógico"
    },
    {
      icon: <Star className="w-6 h-6 text-blue-600" />,
      title: "Acesso à plataforma completa"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sua <span className="text-blue-600">Formação Ministerial</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Estude no formato ideal para você:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              <strong>Acesso à plataforma para assistir às aulas gravadas</strong>, acessar material de apoio e tirar suas dúvidas com professores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
