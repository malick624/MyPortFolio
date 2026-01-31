import { Code, Palette, Rocket } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Développement',
      description: 'Création d\'applications web modernes avec les dernières technologies',
    },
    {
      icon: <Palette size={32} />,
      title: 'Design',
      description: 'Interfaces utilisateur élégantes et expériences utilisateur optimales',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Performance',
      description: 'Solutions rapides, optimisées et scalables pour votre croissance',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionné par la création d'expériences digitales exceptionnelles,
            je transforme vos idées en solutions concrètes et performantes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
