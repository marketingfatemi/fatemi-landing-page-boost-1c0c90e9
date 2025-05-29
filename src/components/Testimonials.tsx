
import { Card, CardContent } from "@/components/ui/card";
import { Star, Play } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "A FATEMI transformou minha vida! O ensino prático me ajudou a entender melhor a Palavra e aplicar no meu dia a dia.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Curso incrível! Os professores são excelentes e o material é muito bem estruturado. Recomendo para todos!",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Depois de 28 anos formando pessoas, a FATEMI continua sendo referência. Minha formação aqui foi fundamental para meu ministério.",
      rating: 5
    },
    {
      name: "Pedro Oliveira",
      text: "A flexibilidade do curso me permitiu estudar no meu ritmo. Excelente investimento para quem quer crescer na fé!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Estudar a Palavra de Deus é mais <span className="text-blue-600">leve</span> do que você imagina!
            </h2>
            <p className="text-xl text-gray-600">
              A melhor forma de conhecer a FATEMI é ouvir quem já estudou conosco
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">Aluno FATEMI</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
