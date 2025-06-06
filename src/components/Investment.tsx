
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Investment = () => {
  const benefits = [
    "Certificado de Conclusão Reconhecido",
    "Acesso Vitalício ao Conteúdo",
    "Material Didático Completo",
    "Suporte dos Professores",
    "Flexibilidade Total de Horários",
    "Comunidade Exclusiva de Alunos"
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541992059071?text=Ol%C3%A1!%20Estou%20interessado%20em%20conhecer%20o%20curso%20de%20teologia%20da%20FATEMI!', '_blank');
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm font-medium mb-4">
              Seu Investimento
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Uma oportunidade única de <span className="text-blue-400">transformação</span>
            </h2>
          </div>

          {/* Main pricing card */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/30 shadow-2xl mb-12 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                MAIS ESCOLHIDO
              </div>
            </div>
            
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Pricing */}
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Curso Completo de Teologia Ministerial
                  </h3>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                      <span className="text-gray-400 line-through text-xl">R$ 2.497</span>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">-60%</span>
                    </div>
                    <div className="text-5xl font-bold text-white mb-2">R$ 997</div>
                    <div className="text-blue-400 text-lg">ou 12x de R$ 97</div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-medium">Oferta por tempo limitado!</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <Button 
                      onClick={handleWhatsAppClick}
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      GARANTIR MINHA VAGA
                    </Button>
                    
                    <Button 
                      onClick={handleWhatsAppClick}
                      size="lg" 
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      QUERO ME INSCREVER AGORA!
                    </Button>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-400 text-sm ml-2">4.9/5 (1.247 avaliações)</span>
                  </div>
                </div>

                {/* Right side - Benefits */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-6">O que está incluso:</h4>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-bold">Garantia de 7 dias</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Se não ficar satisfeito, devolvemos 100% do seu dinheiro
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials highlight - "Mais de 10 mil vidas transformadas" */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-400">Mais de 10 mil</span> vidas transformadas
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Faça parte desta comunidade de líderes e transforme seu ministério hoje mesmo!
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              QUERO ME INSCREVER AGORA!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
