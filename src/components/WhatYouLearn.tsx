
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Users, Clock, Heart, MessageCircle, ArrowRight, Cross, House, BookOpen, Lightbulb, Download } from "lucide-react";

const WhatYouLearn = () => {
  const modules = [{
    icon: <Book className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Verbo e a Fé",
    description: "Descubra quem você realmente é em Cristo e viva essa nova identidade todos os dias."
  }, {
    icon: <Cross className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Fundamentos de Cristo",
    description: "Entenda profundamente a obra de Cristo e como ela transforma cada área da sua vida."
  }, {
    icon: <House className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Segredo dos Tabernáculos",
    description: "Descubra como Cristo está presente desde o Antigo Testamento até hoje."
  }, {
    icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Prática da Palavra",
    description: "Métodos práticos para estudar a Bíblia e aplicar seus princípios no dia a dia."
  }, {
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Panorama da Lei e da Graça",
    description: "Estude detalhadamente o Antigo e o Novo Testamento"
  }, {
    icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Liderança Transformacional",
    description: "Desenvolva habilidades para liderar e impactar sua comunidade de forma real."
  }];

  const scrollToContact = () => {
    const contactSection = document.getElementById('final-cta');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-black overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
              O que você <span className="text-blue-400">aprenderá</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
              Ao longo de 2 anos de curso, disponibilizamos um currículo completo e transformador, com módulos que abrangem desde os fundamentos da fé até a aplicação prática da Palavra de Deus em todas as áreas da sua vida. São 16 módulos para você estudar. Conheça alguns dos módulos:
            </p>
            
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              className="w-full md:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-sm md:text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              COMECE A TRANSFORMAÇÃO: INSCREVA-SE!
            </Button>
          </div>

          {/* Modules Grid - Mobile optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {modules.map((module, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3 md:pb-4">
                  <div className="bg-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4 border border-gray-600">
                    <div className="text-white">
                      {module.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg md:text-xl text-white">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-4 md:space-y-6 px-4">
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 md:py-6 px-8 md:px-12 rounded-full text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4"
            >
              BAIXE A GRADE COMPLETA (PDF)
              <Download className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
            
            <p className="text-gray-400 mt-4 text-sm md:text-base">
              Descubra todos os módulos que vão transformar sua vida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
