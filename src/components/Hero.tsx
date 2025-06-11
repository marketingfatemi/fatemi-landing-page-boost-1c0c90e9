import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Globe } from "lucide-react";
const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('final-cta');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541992059071?text=Ol%C3%A1!%20Estou%20interessado%20em%20conhecer%20o%20curso%20de%20teologia%20da%20FATEMI!', '_blank');
  };
  const handleGradeClick = () => {
    window.open('https://wa.me/5541992059071?text=Ol%C3%A1!%20Quero%20conhecer%20a%20grade%20curricular%20do%20curso%20de%20Teologia%20da%20FATEMI!%20Estou%20interessado%20nele!', '_blank');
  };
  return <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/97957b3e-dccb-43c6-a446-0ad0b0d2da59.png')`
      }} />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/85 to-black/90"></div>
        {/* Blue accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/20"></div>
      </div>
      
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-[32px]">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo - Nova logo redonda */}
          <div className="mb-8 animate-fade-in">
            <img alt="FATEMI Logo" className="w-32 h-auto mx-auto mb-6" src="/lovable-uploads/8c4056b9-fcb3-4b64-b4ee-12ce3da9013c.png" />
          </div>

          {/* Main headline with modern typography */}
          <div className="mb-8 animate-fade-in">
            <div className="text-lg md:text-xl font-light text-gray-300 mb-4 tracking-wide">
              O maior
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Curso Livre de<br />
                Teologia Ministerial
              </span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-400 mb-6">
              do Brasil!
            </div>
          </div>

          {/* Trust badges - Hidden on mobile */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>+10 mil alunos</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>+11 países</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>28 anos de experiência</span>
            </div>
          </div>

          {/* Value proposition - Hidden on mobile */}
          <div className="mb-10 animate-fade-in hidden md:block" style={{
          animationDelay: '0.2s'
        }}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
              <span className="text-white font-semibold">Mais de 10 mil pessoas já foram transformadas.</span><br />
              Seja capacitado a viver o chamado de Deus para sua vida!
            </p>
            
            {/* Modern feature list */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Certificado de Conclusão</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Professores Especializados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Certificação Reconhecida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>100% Digital</span>
              </div>
            </div>
          </div>

          {/* Modern CTA section */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="flex justify-center items-center mb-8">
              {/* Desktop CTA */}
              <Button onClick={handleWhatsAppClick} size="lg" className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-500/20">QUERO CONHECER O CURSO</Button>
              
              {/* Mobile CTA - Fixed text overflow */}
              <Button onClick={handleGradeClick} size="lg" className="md:hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-full text-sm shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-500/20 max-w-[280px] whitespace-normal text-center leading-tight">
                Quero conhecer a grade do curso
              </Button>
            </div>
            
            {/* Social proof */}
            <p className="text-sm text-gray-500">
              Junte-se a milhares de estudantes que já transformaram suas vidas
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;