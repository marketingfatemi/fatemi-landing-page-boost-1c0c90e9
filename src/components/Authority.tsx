
import { Users, Book, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Authority = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      number: "+10 mil",
      label: "vidas transformadas"
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      number: "11+",
      label: "países alcançados"
    },
    {
      icon: <Book className="w-8 h-8 text-white" />,
      number: "Certificado",
      label: "reconhecido"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                <span className="text-gray-400">28 anos</span> formando líderes através do 
                <span className="text-white"> ensino prático da Palavra</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Não é apenas um curso - é uma <strong className="text-white">jornada de transformação completa</strong>. 
                Por quase 3 décadas, a FATEMI tem capacitado pessoas comuns a viverem de forma extraordinária, 
                aplicando os princípios bíblicos em cada área da vida.
              </p>

              <div className="bg-white text-black p-6 rounded-lg">
                <p className="text-lg font-medium">
                  "Você não vai apenas aprender teoria - você vai <strong>viver a transformação</strong> que a Palavra de Deus produz."
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Image placeholder */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-96 flex items-center justify-center border border-gray-700">
              <div className="text-center text-gray-300">
                <Book className="w-24 h-24 mx-auto mb-4 text-white" />
                <p className="text-lg font-medium text-white">28 anos de excelência</p>
                <p className="text-sm">FATEMI - Formando líderes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
