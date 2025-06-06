
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [{
    name: "Maria Silva",
    text: "Não foi apenas um curso - foi uma revolução na minha vida! Hoje entendo meu propósito e vivo cada dia com significado real.",
    rating: 5,
    role: "Formada em 2023"
  }, {
    name: "João Santos",
    text: "28 anos depois, a FATEMI continua transformando vidas. O ensino prático me capacitou para liderar com sabedoria e amor.",
    rating: 5,
    role: "Formado em 2022"
  }, {
    name: "Ana Costa",
    text: "Antes eu só 'ia à igreja'. Hoje eu VIVO a Palavra todos os dias. A diferença é gigantesca!",
    rating: 5,
    role: "Formada em 2023"
  }, {
    name: "Pedro Oliveira",
    text: "Estudar na FATEMI foi o melhor investimento da minha vida. Minha família, meu trabalho, tudo mudou para melhor.",
    rating: 5,
    role: "Formado em 2022"
  }];

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Quero começar agora no curso de Teologia da FATEMI', '_blank');
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

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-white fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-gray-600 mb-4" />
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    <strong className="text-white">"{testimonial.text}"</strong>
                  </p>
                  
                  <div className="flex items-center gap-3">
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
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="w-full md:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              COMECE AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
