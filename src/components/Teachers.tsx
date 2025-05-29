
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      name: "Pio Carvalho",
      bio: "Doutor (Honoris Causa) em Teologia, especialista em liderança e administração. Pastor, escritor e palestrante. Presidente do Colegiado Ministerial Abba."
    },
    {
      name: "Romulo Carvalho",
      bio: "Bacharel em Teologia e Engenharia Florestal, com estudos em liderança pastoral e teologia do Novo Testamento, pastor presidente da Comunhão Cristã Abba e escritor."
    },
    {
      name: "Rafael Mincewicz",
      bio: "Bacharel em História, Teologia e Filosofia, especialista em História Cultural e diretor acadêmico da FATEMI."
    },
    {
      name: "Plácido Casarini",
      bio: "Bacharel em Teologia, capelão educacional e pastor da Comunhão Cristã Abba Fazenda do Rio Grande."
    },
    {
      name: "Thomas Ros",
      bio: "Bacharel em Teologia e mestre em administração. Grande experiência na área de evangelização e no ensino da palavra."
    },
    {
      name: "Silmar Kulka",
      bio: "Bacharel em Administração e Teologia. Especialista em gestão de pessoas e análise de comportamento com foco em NeuroLinguística. Pastor e palestrante."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conheça seus <span className="text-blue-600">professores</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Durante o curso, você terá aulas com grandes professores, dedicados ao ensino da Palavra de forma prática. 
              Seja capacitado e inspirado a viver a Verdade em todas as áreas da sua vida! Conheça alguns de seus professores:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  {/* Photo placeholder */}
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-blue-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{teacher.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{teacher.bio}</p>
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
