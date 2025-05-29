
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Star, Users, Play, Clock } from "lucide-react";

const WhatYouLearn = () => {
  const modules = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Verbo e a Fé",
      description: "Descubra sua nova identidade em Cristo."
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Fundamentos de Cristo",
      description: "Aprofunde seu conhecimento sobre a obra de Cristo em nossas vidas."
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Segredo dos Tabernáculos",
      description: "Descubra a centralidade de Cristo desde o Velho Testamento."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Prática da Palavra",
      description: "Aprenda como estudar a Palavra de Deus e colocá-la em prática."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Aliança de Sangue",
      description: "Compreenda os princípios da aliança e seus reflexos em nossa vida."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Liderança Transformacional",
      description: "Desenvolva habilidades de liderança para transformar a sua comunidade."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que <span className="text-blue-600">aprenderá</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ao longo de 2 anos de curso, disponibilizamos um currículo completo e transformador, 
              com módulos que abrangem desde os fundamentos da fé até a aplicação prática da Palavra de Deus 
              em todas as áreas da sua vida. Conheça alguns dos módulos:
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modules.map((module, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <div className="text-blue-600">
                      {module.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Quero conhecer a Grade Curricular Completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
