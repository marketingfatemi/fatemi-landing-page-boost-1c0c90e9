import { Card, CardContent } from "@/components/ui/card";
import { Clock, Book, Star, Play, Users, CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const Formation = () => {
  const features = [{
    icon: <Star className="w-6 h-6 text-white" />,
    title: "Certificado de Conclusão",
    subtitle: "Não reconhecido pelo MEC"
  }, {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "Flexibilidade Total",
    subtitle: "Até 2 anos para concluir no seu ritmo"
  }, {
    icon: <Play className="w-6 h-6 text-white" />,
    title: "Estude Onde e Quando Quiser",
    subtitle: "Plataforma disponível 24/7"
  }, {
    icon: <Book className="w-6 h-6 text-white" />,
    title: "Material Completo Incluso",
    subtitle: "Tudo digital e sempre atualizado"
  }, {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Suporte Pedagógico",
    subtitle: "Professores disponíveis para suas dúvidas"
  }, {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: "Avaliações Formativas",
    subtitle: "Avalie seu conhecimento e fixe o conteúdo"
  }];
  const scrollToContact = () => {
    const contactSection = document.getElementById('final-cta');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sua formação do <span className="text-blue-400">jeito certo</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-medium">
              Estude quando quiser e onde quiser
            </p>
            
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 mb-12 w-full sm:w-auto">
              <MessageCircle className="w-5 h-5 mr-2" />
              Começar minha formação
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => <Card key={index} className="bg-black border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.subtitle}</p>
                </CardContent>
              </Card>)}
          </div>

          <div className="bg-black rounded-lg p-8 border border-gray-700 mb-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Plataforma Completa de Ensino
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">Acesso total à nossa plataforma</strong> para assistir aulas gravadas em alta qualidade, 
                baixar material de apoio exclusivo e tirar dúvidas diretamente com os professores. 
                <strong className="text-white">Tudo pensado para acelerar seu crescimento.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  Quero começar hoje
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Formation;