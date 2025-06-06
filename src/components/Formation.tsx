
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Formation = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
      title: "Certificação Reconhecida",
      description: "Diploma com validade e reconhecimento em todo território nacional"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: "Flexibilidade Total",
      description: "Estude no seu ritmo, quando e onde quiser, 24 horas por dia"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Professores Especializados",
      description: "Aprenda com teólogos experientes e líderes ministeriais renomados"
    },
    {
      icon: <Trophy className="w-6 h-6 text-blue-400" />,
      title: "Metodologia Comprovada",
      description: "28 anos de experiência formando líderes e transformando vidas"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541992059071?text=Ol%C3%A1!%20Estou%20interessado%20em%20conhecer%20o%20curso%20de%20teologia%20da%20FATEMI!', '_blank');
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm font-medium mb-4">
              Sua Formação Ministerial
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Uma formação que <span className="text-blue-400">transforma vidas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Mais do que um curso, é uma jornada de crescimento espiritual e ministerial que vai impactar sua vida para sempre.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left side - Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right side - Image and stats */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-2xl"></div>
                <img 
                  src="/lovable-uploads/fa64f8c5-33ef-40a2-b99e-ca09e9852779.png" 
                  alt="FATEMI Campus" 
                  className="w-full max-w-md mx-auto relative z-10 rounded-lg shadow-2xl" 
                />
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-blue-400">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-1">28</div>
                    <div className="text-sm text-blue-100">Anos de tradição</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-purple-400">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-1">10k+</div>
                    <div className="text-sm text-purple-100">Vidas transformadas</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <div className="mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Avaliação média dos nossos alunos: 4.9/5
              </p>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-500/20"
            >
              QUERO ME INSCREVER
            </Button>
            
            <p className="text-sm text-gray-400 mt-4">
              Comece sua transformação hoje mesmo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
