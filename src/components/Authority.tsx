
import { Users, Star, Trophy, Clock, Globe, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Authority = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      number: "+10 mil",
      label: "alunos formados",
      description: "Vidas transformadas"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      number: "+11",
      label: "países alcançados",
      description: "Impacto global"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      number: "28",
      label: "anos de experiência",
      description: "Tradição e excelência"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      number: "24/7",
      label: "acesso à plataforma",
      description: "Estude quando quiser"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('final-cta');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm font-medium mb-4">
              Nossa História
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-blue-400">28 anos</span> formando líderes<br />
              através do <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">ensino prático da Palavra</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Text content */}
            <div className="space-y-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                Ao longo de 28 anos, a FATEMI tem se dedicado a formar líderes e transformar vidas através de um ensino que vai além da teoria. Nossos módulos são pensados para que você aprenda os princípios bíblicos e como vivenciá-los intensamente todos os dias.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-white">Ensino prático e aplicado</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-white">Professores especializados</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-white">Certificação reconhecida</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Garanta sua vaga agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  size="lg" 
                  className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com consultor
                </Button>
              </div>
            </div>

            {/* Temple Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-2xl"></div>
                <img 
                  src="/lovable-uploads/fa64f8c5-33ef-40a2-b99e-ca09e9852779.png" 
                  alt="Templo FATEMI" 
                  className="w-full max-w-md relative z-10 rounded-lg shadow-2xl" 
                />
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
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
