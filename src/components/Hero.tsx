import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Globe } from "lucide-react";
const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o curso de Teologia da FATEMI', '_blank');
  };
  return <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 animate-fade-in">
            <img alt="FATEMI Logo" className="w-24 md:w-32 h-auto mx-auto mb-4" src="/lovable-uploads/6527ed59-3027-4c3c-a95a-695fa44553d7.png" />
          </div>

          {/* Main headline - condensed for mobile */}
          <div className="mb-6 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                O maior<br />
                Curso Livre de<br />
                Teologia Ministerial
              </span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-400 mb-4">
              do Brasil!
            </div>
          </div>

          {/* Condensed trust badges for mobile */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-xs md:text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
              <span className="text-blue-400 font-semibold">+10 mil</span> alunos
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
              <span>+11 países</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
              <span>28 anos</span>
            </div>
          </div>

          {/* Compact features for mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 text-xs">
            <div className="flex flex-col items-center gap-1 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-white text-center">Certificação Reconhecida</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-white text-center">100% Digital</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-white text-center">Professores Especializados</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-white text-center">Suporte Total ao Aluno</span>
            </div>
          </div>

          {/* Primary CTA - mobile optimized */}
          <div className="animate-fade-in mb-6" style={{
          animationDelay: '0.4s'
        }}>
            <Button onClick={openWhatsApp} size="lg" className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 md:px-8 rounded-full text-base md:text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-500/20 mb-4">
              QUERO ME INSCREVER
            </Button>
          </div>
          
          {/* Social proof */}
          <p className="text-xs md:text-sm text-gray-500">
            Junte-se a milhares de estudantes transformados
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;