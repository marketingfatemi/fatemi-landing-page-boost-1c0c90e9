
import { Users, Star, Trophy, Clock, Globe, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Authority = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
      number: "+10 mil",
      label: "alunos formados",
      description: "Vidas transformadas",
      highlight: true
    },
    {
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
      number: "+11",
      label: "países alcançados",
      description: "Impacto global"
    },
    {
      icon: <Trophy className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
      number: "28",
      label: "anos de experiência",
      description: "Tradição e excelência"
    },
    {
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
      number: "24/7",
      label: "acesso à plataforma",
      description: "Estude quando quiser"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-3 py-2 md:px-4 md:py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-xs md:text-sm font-medium mb-4">
              Nossa História
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
              <span className="text-blue-400">28 anos</span> formando líderes<br />
              através do <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">ensino prático da Palavra</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-16">
            {/* Temple Image */}
            <div className="flex items-center justify-center order-1 lg:order-1">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-lg blur-2xl"></div>
                <img 
                  src="/lovable-uploads/fa64f8c5-33ef-40a2-b99e-ca09e9852779.png" 
                  alt="Templo FATEMI" 
                  className="w-full relative z-10 rounded-lg shadow-2xl" 
                />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-2 px-4">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Ao longo de 28 anos, a FATEMI tem se dedicado a formar líderes e transformar vidas através de um ensino que vai além da teoria. Nossos módulos são pensados para que você aprenda os princípios bíblicos e como vivenciá-los intensamente todos os dias.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span className="text-white text-sm md:text-base">Ensino prático e aplicado</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span className="text-white text-sm md:text-base">Professores especializados</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span className="text-white text-sm md:text-base">Certificação reconhecida</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid - enhanced for mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-900/40 to-gray-900/80 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 group shadow-xl">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="flex justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold mb-1 ${stat.highlight ? 'text-blue-400' : 'text-white'}`}>
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
