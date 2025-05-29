
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Book, Star, Play, Users, CheckCircle } from "lucide-react";

const Formation = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-black" />,
      title: "Certificado Reconhecido",
      subtitle: "Validado e respeitado em todo Brasil"
    },
    {
      icon: <Clock className="w-6 h-6 text-black" />,
      title: "Flexibilidade Total",
      subtitle: "Até 2 anos para concluir no seu ritmo"
    },
    {
      icon: <Play className="w-6 h-6 text-black" />,
      title: "Estude Onde e Quando Quiser",
      subtitle: "Plataforma disponível 24/7"
    },
    {
      icon: <Book className="w-6 h-6 text-black" />,
      title: "Material Completo Incluso",
      subtitle: "Tudo digital e sempre atualizado"
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      title: "Suporte Pedagógico",
      subtitle: "Professores disponíveis para suas dúvidas"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-black" />,
      title: "Acesso Vitalício",
      subtitle: "Revise o conteúdo sempre que precisar"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Sua formação do <span className="text-gray-600">jeito certo</span>
            </h2>
            <p className="text-xl text-gray-700 mb-4 font-medium">
              Desenvolvemos a metodologia perfeita para sua transformação
            </p>
            <p className="text-lg text-gray-600">
              Cada detalhe foi pensado para que você tenha a <strong>melhor experiência de aprendizado</strong> possível
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border-2 border-black">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Plataforma Completa de Ensino
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Acesso total à nossa plataforma</strong> para assistir aulas gravadas em alta qualidade, 
                baixar material de apoio exclusivo e tirar dúvidas diretamente com os professores. 
                <strong>Tudo pensado para acelerar seu crescimento.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
