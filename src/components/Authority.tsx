
import { Users, Book, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Authority = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "+10 mil",
      label: "alunos formados"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      number: "11+",
      label: "países"
    },
    {
      icon: <Book className="w-8 h-8 text-blue-600" />,
      number: "Certificado",
      label: "de Conclusão"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">28 anos</span> capacitando pessoas por meio do ensino prático da 
                <span className="text-blue-600"> Palavra de Deus</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Ao longo de 28 anos, a FATEMI tem se dedicado a formar líderes e transformar vidas através de um ensino 
                que vai além da teoria. Nossos módulos são pensados para que você aprenda os princípios bíblicos e 
                como vivenciá-los intensamente todos os dias.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Image placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Book className="w-24 h-24 mx-auto mb-4 text-blue-400" />
                <p className="text-lg">Imagem FATEMI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
