
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Tauan Jhonny",
      text: "Esse curso ajudou a transformar minha história.",
      rating: 5,
      role: "Aluno FATEMI"
    },
    {
      name: "Oeslen Ribeiro", 
      text: "Tive a imensa oportunidade de iniciar e concluir o Curso de Teologia Ministerial e Prática, um Curso que impactou a minha vida de uma forma tremenda, algo sobrenatural. A revelação da palavra de Deus ministrada nesse curso é tremenda, tem mudado a vida de muitas pessoas aos arredores do mundo. Recomendo sem sombra de dúvida!",
      rating: 5,
      role: "Aluno FATEMI"
    },
    {
      name: "Luana Lopes",
      text: "Simplesmente o melhor curso de teologia do Sul do Brasil...",
      rating: 5,
      role: "Aluna FATEMI"
    },
    {
      name: "Vania Barros",
      text: "Muito bom mesmo. É uma descoberta do evangelho que já conhecemos, mas numa outra dimensão e profundidade fantástica.",
      rating: 5,
      role: "Aluna FATEMI"
    },
    {
      name: "Marilda Martins",
      text: "É outro nível de compreensão da Palavra de Deus!",
      rating: 5,
      role: "Aluna FATEMI"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541992059071?text=Ol%C3%A1!%20Estou%20interessado%20em%20conhecer%20o%20curso%20de%20teologia%20da%20FATEMI!', '_blank');
  };

  return (
    <section className="bg-gray-900 py-[80px]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-blue-400">Mais de 10 mil</span> vidas transformadas
            </h2>
            <p className="text-xl text-gray-300 mb-4 font-medium">
              Veja o que acontece quando você decide investir em sua transformação
            </p>
            <p className="text-lg text-gray-400">
              Estas são apenas algumas das <strong className="text-white">milhares de histórias reais</strong> de quem ousou mudar
            </p>
          </div>

          {/* Carrossel de Testemunhos */}
          <div className="mb-12">
            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-black border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-white fill-current" />
                          ))}
                        </div>
                        
                        <Quote className="w-8 h-8 text-gray-600 mb-4" />
                        
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg flex-grow">
                          <strong className="text-white">"{testimonial.text}"</strong>
                        </p>
                        
                        <div className="flex items-center gap-3 mt-auto">
                          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                            <span className="text-black font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-bold text-white">{testimonial.name}</div>
                            <div className="text-sm text-gray-400">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              COMECE AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
