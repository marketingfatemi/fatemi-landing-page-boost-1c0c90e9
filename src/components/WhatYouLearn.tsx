import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Star, Users, Play, Clock, Heart } from "lucide-react";
const WhatYouLearn = () => {
  const modules = [{
    icon: <Star className="w-6 h-6" />,
    title: "Verbo e a Fé",
    description: "Descubra quem você realmente é em Cristo e viva essa nova identidade todos os dias."
  }, {
    icon: <Book className="w-6 h-6" />,
    title: "Fundamentos de Cristo",
    description: "Entenda profundamente a obra de Cristo e como ela transforma cada área da sua vida."
  }, {
    icon: <Play className="w-6 h-6" />,
    title: "Segredo dos Tabernáculos",
    description: "Descubra como Cristo está presente desde o Antigo Testamento até hoje."
  }, {
    icon: <Clock className="w-6 h-6" />,
    title: "Prática da Palavra",
    description: "Métodos práticos para estudar a Bíblia e aplicar seus princípios no dia a dia."
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Panorama da Lei e da Graça",
    description: "Estude detalhadamente o Antigo e o Novo Testamento"
  }, {
    icon: <Heart className="w-6 h-6" />,
    title: "Liderança Transformacional",
    description: "Desenvolva habilidades para liderar e impactar sua comunidade de forma real."
  }];
  return <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que você <span className="text-gray-400">aprenderá</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">Ao longo de 2 anos de curso, disponibilizamos um currículo completo e transformador, com módulos que abrangem desde os fundamentos da fé até a aplicação prática da Palavra de Deus em todas as áreas da sua vida. São 16 módulos para você estudar. Conheça alguns dos módulos:</p>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modules.map((module, index) => <Card key={index} className="bg-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-gray-600">
                    <div className="text-white">
                      {module.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">{module.description}</p>
                </CardContent>
              </Card>)}
          </div>

          {/* Highlight Box */}
          

          {/* CTA */}
          <div className="text-center mx-0">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-black font-bold py-6 px-12 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Quero ver a Grade Curricular Completa
            </Button>
            <p className="text-gray-400 mt-4">
              Descubra todos os módulos que vão transformar sua vida
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default WhatYouLearn;