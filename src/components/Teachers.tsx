
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Teachers = () => {
  const teachers = [
    {
      name: "Pr. Rômulo Vergilio",
      title: "Diretor e Fundador",
      image: "/lovable-uploads/86d90a98-2dbd-4428-8d4a-97c67f9a3d58.png",
      description: "Fundador da FATEMI há 28 anos, com vasta experiência em formação teológica e liderança ministerial."
    },
    {
      name: "Pr. Samuel Ferreira",
      title: "Professor de Teologia Sistemática",
      image: "/lovable-uploads/668ed03b-0488-490f-a7ca-ce2728f47b0b.png",
      description: "Especialista em Teologia Sistemática com mais de 15 anos de experiência no ensino teológico."
    },
    {
      name: "Pr. Marcos Silva",
      title: "Professor de Hermenêutica",
      image: "/lovable-uploads/66f3d17c-41f1-4dad-82cc-ad7a6fdfe5a1.png",
      description: "Doutor em Hermenêutica Bíblica, especialista na interpretação e aplicação das Escrituras Sagradas."
    },
    {
      name: "Pr. João Santos",
      title: "Professor de História da Igreja",
      image: "/lovable-uploads/a4010332-ba77-49cb-b706-402266b366ed.png",
      description: "Mestre em História Eclesiástica, com profundo conhecimento da trajetória da Igreja ao longo dos séculos."
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541992059071?text=Ol%C3%A1!%20Estou%20interessado%20em%20conhecer%20o%20curso%20de%20teologia%20da%20FATEMI!', '_blank');
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
              Nosso Corpo Docente
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Aprenda com os <span className="text-blue-400">melhores professores</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nossa equipe é formada por teólogos experientes, pastores e líderes com décadas de experiência no ensino e ministério.
            </p>
          </div>

          {/* Teachers grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teachers.map((teacher, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group h-full">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-24 h-24 rounded-full mx-auto relative z-10 border-4 border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{teacher.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{teacher.title}</p>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow min-h-[80px] flex items-center">
                    {teacher.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              FALAR COM ATENDENTE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
