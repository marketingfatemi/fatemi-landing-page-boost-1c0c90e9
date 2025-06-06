
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatYouLearn = () => {
  const modules = [
    {
      title: "Teologia Sistemática",
      topics: ["Doutrina de Deus", "Cristologia", "Pneumatologia", "Soteriologia", "Escatologia"]
    },
    {
      title: "Hermenêutica Bíblica",
      topics: ["Princípios de Interpretação", "Exegese", "Contexto Histórico", "Aplicação Prática"]
    },
    {
      title: "História da Igreja",
      topics: ["Igreja Primitiva", "Idade Média", "Reforma Protestante", "Igreja Contemporânea"]
    },
    {
      title: "Homilética",
      topics: ["Preparação de Sermões", "Técnicas de Pregação", "Comunicação Eficaz", "Oratória Sagrada"]
    },
    {
      title: "Aconselhamento Pastoral",
      topics: ["Princípios Bíblicos", "Psicologia Pastoral", "Casos Práticos", "Ética Ministerial"]
    },
    {
      title: "Liderança Cristã",
      topics: ["Gestão Eclesiástica", "Desenvolvimento de Equipes", "Visão e Missão", "Crescimento da Igreja"]
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541992059071?text=Ol%C3%A1!%20Estou%20interessado%20em%20conhecer%20o%20curso%20de%20teologia%20da%20FATEMI!', '_blank');
  };

  const handleDownloadClick = () => {
    window.open('https://wa.me/5541992059071?text=Ol%C3%A1!%20Quero%20conhecer%20a%20grade%20curricular%20do%20curso%20de%20Teologia%20da%20FATEMI!%20Estou%20interessado%20nele!', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm font-medium mb-4">
              Grade Curricular
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              O que você vai <span className="text-blue-400">aprender</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Um currículo completo e estruturado para formar líderes cristãos capacitados e preparados para o ministério.
            </p>
            
            {/* Top CTA */}
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 mb-12"
            >
              QUERO ME INSCREVER
            </Button>
          </div>

          {/* Modules grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {modules.map((module, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {module.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional benefits */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 mb-16 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Além disso, você também terá:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Material Didático</h4>
                <p className="text-gray-300 text-sm">Apostilas e livros digitais inclusos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Suporte Online</h4>
                <p className="text-gray-300 text-sm">Tire suas dúvidas diretamente com os professores</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Certificado</h4>
                <p className="text-gray-300 text-sm">Diploma reconhecido nacionalmente</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Acesso Vitalício</h4>
                <p className="text-gray-300 text-sm">Revise o conteúdo sempre que precisar</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Button 
              onClick={handleDownloadClick}
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
            >
              <Download className="w-5 h-5 mr-2" />
              BAIXE A GRADE COMPLETA (PDF)
            </Button>
            <p className="text-sm text-gray-400">
              Conheça todos os detalhes do nosso currículo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
