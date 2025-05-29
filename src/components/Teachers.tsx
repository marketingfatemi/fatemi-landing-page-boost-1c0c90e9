
import { Card, CardContent } from "@/components/ui/card";

const Teachers = () => {
  const teachers = [
    {
      name: "Pio Carvalho",
      image: "/lovable-uploads/1016dca9-cbac-4903-9d05-6b5a9a75e8c1.png",
      bio: "Doutor (Honoris Causa) em Teologia, especialista em liderança e administração. Pastor, escritor e palestrante. Presidente do Colegiado Ministerial Abba."
    },
    {
      name: "Romulo Carvalho",
      image: "/lovable-uploads/871dd152-a8de-4acc-8e75-20e20ac9ed05.png",
      bio: "Bacharel em Teologia e Engenharia Florestal, com estudos em liderança pastoral e teologia do Novo Testamento, pastor presidente da Comunhão Cristã Abba e escritor."
    },
    {
      name: "Rafael Mincewicz",
      image: "/lovable-uploads/668ed03b-0488-490f-a7ca-ce2728f47b0b.png",
      bio: "Bacharel em História, Teologia e Filosofia, especialista em História Cultural e diretor acadêmico da FATEMI."
    },
    {
      name: "Plácido Casarini",
      image: "/lovable-uploads/a4010332-ba77-49cb-b706-402266b366ed.png",
      bio: "Bacharel em Teologia, capelão educacional e pastor da Comunhão Cristã Abba Fazenda do Rio Grande."
    },
    {
      name: "Silmar Kulka",
      image: "/lovable-uploads/2712699f-7055-4b26-b665-4bb3944364fd.png",
      bio: "Bacharel em Administração e Teologia. Especialista em gestão de pessoas e análise de comportamento com foco em NeuroLinguística. Pastor e palestrante."
    },
    {
      name: "Rose Carvalho",
      image: "/lovable-uploads/433fa7a6-8137-4a38-a567-3e46d2b492c3.png",
      bio: "Bacharel em Pedagogia e Teologia. Coordenadora de projetos sociais como o Operação Vida que atua em diversas localidades do Brasil."
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Aprenda com os <span className="text-gray-400">melhores professores</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Durante o curso, você terá aulas com grandes professores, dedicados ao ensino da Palavra de forma prática. Seja capacitado e inspirado a viver a Verdade em todas as áreas da sua vida! Conheça alguns de seus professores:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <CardContent className="p-0">
                  {/* Photo */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{teacher.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{teacher.bio}</p>
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

export default Teachers;
