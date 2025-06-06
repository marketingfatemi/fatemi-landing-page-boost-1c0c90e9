
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const Teachers = () => {
  const teachers = [
    {
      name: "Pio Carvalho",
      image: "/lovable-uploads/1016dca9-cbac-4903-9d05-6b5a9a75e8c1.png",
      bio: "Doutor (Honoris Causa) em Teologia, especialista em liderança e administração. Pastor, escritor e palestrante. Presidente do Colegiado Ministerial Abba."
    },
    {
      name: "Romulo Carvalho",
      image: "/lovable-uploads/871dd152-a8de-4acc-8e75-20e20ac9ed05.png",
      bio: "Bacharel em Teologia e Engenharia Florestal, com estudos em liderança pastoral e teologia do Novo Testamento, pastor presidente da Comunhão Cristã Abba e escritor."
    },
    {
      name: "Rafael Mincewicz",
      image: "/lovable-uploads/668ed03b-0488-490f-a7ca-ce2728f47b0b.png",
      bio: "Bacharel em História, Teologia e Filosofia, especialista em História Cultural e diretor acadêmico da FATEMI."
    },
    {
      name: "Plácido Casarini",
      image: "/lovable-uploads/a4010332-ba77-49cb-b706-402266b366ed.png",
      bio: "Bacharel em Teologia, capelão educacional e pastor da Comunhão Cristã Abba Fazenda do Rio Grande."
    },
    {
      name: "Tom Ros",
      image: "/lovable-uploads/66f3d17c-41f1-4dad-82cc-ad7a6fdfe5a1.png",
      bio: "Bacharel em Teologia e mestre em administração. Grande experiência na área de evangelização e no ensino da palavra."
    },
    {
      name: "Rose Carvalho",
      image: "/lovable-uploads/433fa7a6-8137-4a38-a567-3e46d2b492c3.png",
      bio: "Bacharel em Pedagogia e Teologia. Coordenadora de projetos sociais como o Operação Vida que atua em diversas localidades do Brasil."
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de falar com um atendente sobre o curso de Teologia da FATEMI', '_blank');
  };

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Aprenda com os <span className="text-blue-400">melhores professores</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Durante o curso, você terá aulas com grandes professores, dedicados ao ensino da Palavra de forma prática. Seja capacitado e inspirado a viver a Verdade em todas as áreas da sua vida! Conheça alguns de seus professores:
            </p>
            
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              FALAR COM ATENDENTE
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                })
              ]}
              className="w-full"
            >
              <CarouselContent>
                {teachers.map((teacher, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="bg-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                        <CardContent className="p-0">
                          {/* Photo */}
                          <div className="aspect-square overflow-hidden">
                            <img 
                              src={teacher.image} 
                              alt={teacher.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">{teacher.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{teacher.bio}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
              <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
