
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Star, Users, Play, Clock, Heart } from "lucide-react";

const WhatYouLearn = () => {
  const modules = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Verbo e a Fé",
      description: "Descubra quem você realmente é em Cristo e viva essa nova identidade todos os dias."
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Fundamentos de Cristo",
      description: "Entenda profundamente a obra de Cristo e como ela transforma cada área da sua vida."
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Segredo dos Tabernáculos",
      description: "Descubra como Cristo está presente desde o Antigo Testamento até hoje."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Prática da Palavra",
      description: "Métodos práticos para estudar a Bíblia e aplicar seus princípios no dia a dia."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Aliança de Sangue",
      description: "Compreenda os princípios da aliança com Deus e seus reflexos em sua vida."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Liderança Transformacional",
      description: "Desenvolva habilidades para liderar e impactar sua comunidade de forma real."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Uma jornada que vai <span className="text-gray-600">mudar tudo</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
              <strong>Não é apenas teoria - é transformação real.</strong> Durante 2 anos, você vai passar por um currículo 
              completo que vai desde os fundamentos da fé até a aplicação prática da Palavra de Deus em cada área da sua vida.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Cada módulo foi desenvolvido para te levar a um novo nível de maturidade espiritual e liderança.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modules.map((module, index) => (
              <Card key={index} className="border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <CardHeader className="pb-4">
                  <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 border-2 border-black">
                    <div className="text-black">
                      {module.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-black">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-black text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">E isso é só o começo...</h3>
            <p className="text-lg">
              <strong>São mais de 20 módulos completos</strong> que vão te equipar com tudo que você precisa 
              para viver o propósito que Deus tem para sua vida.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-bold py-6 px-12 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Quero ver a Grade Curricular Completa
            </Button>
            <p className="text-gray-600 mt-4">
              Descubra todos os módulos que vão transformar sua vida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
