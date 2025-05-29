
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Não foi apenas um curso - foi uma revolução na minha vida! Hoje entendo meu propósito e vivo cada dia com significado real.",
      rating: 5,
      role: "Formada em 2023"
    },
    {
      name: "João Santos",
      text: "28 anos depois, a FATEMI continua transformando vidas. O ensino prático me capacitou para liderar com sabedoria e amor.",
      rating: 5,
      role: "Formado em 2022"
    },
    {
      name: "Ana Costa",
      text: "Antes eu só 'ia à igreja'. Hoje eu VIVO a Palavra todos os dias. A diferença é gigantesca!",
      rating: 5,
      role: "Formada em 2023"
    },
    {
      name: "Pedro Oliveira",
      text: "Estudar na FATEMI foi o melhor investimento da minha vida. Minha família, meu trabalho, tudo mudou para melhor.",
      rating: 5,
      role: "Formado em 2022"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              <span className="text-gray-600">Mais de 10 mil</span> vidas transformadas
            </h2>
            <p className="text-xl text-gray-700 mb-4 font-medium">
              Veja o que acontece quando você decide investir em sua transformação
            </p>
            <p className="text-lg text-gray-600">
              Estas são apenas algumas das <strong>milhares de histórias reais</strong> de quem ousou mudar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-black fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-gray-300 mb-4" />
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    <strong>"{testimonial.text}"</strong>
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-black">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-black text-white p-8 rounded-lg">
            <p className="text-xl font-medium">
              <strong>E se a próxima história de transformação fosse a sua?</strong><br />
              Não deixe mais um dia passar vivendo abaixo do que Deus preparou para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
