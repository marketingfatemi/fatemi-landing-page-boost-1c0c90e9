import { Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const Authority = () => {
  const stats = [{
    icon: <Users className="w-8 h-8 text-white" />,
    number: "+10 mil",
    label: "alunos formados"
  }, {
    icon: <Star className="w-8 h-8 text-white" />,
    number: "+11",
    label: "países alcançados"
  }];
  return <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight text-justify">
                <span className="text-gray-400">28 anos</span> formando líderes através do 
                <span className="text-white"> ensino prático da Palavra</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed text-justify">
                Ao longo de 28 anos, a FATEMI tem se dedicado a formar líderes e transformar vidas através de um ensino que vai além da teoria. Nossos módulos são pensados para que você aprenda os princípios bíblicos e como vivenciá-los intensamente todos os dias.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {stats.map((stat, index) => <Card key={index} className="bg-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* Logo placeholder */}
            <div className="flex items-center justify-center">
              <img src="/lovable-uploads/86d90a98-2dbd-4428-8d4a-97c67f9a3d58.png" alt="FATEMI Logo Horizontal" className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Authority;