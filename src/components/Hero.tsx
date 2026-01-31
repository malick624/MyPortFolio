import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp">
            Créateur de Solutions Digitales
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Développement web & Design créatif pour donner vie à vos idées
          </p>

          <div className="flex justify-center gap-4 mb-12 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Me contacter
            </a>
            <a
              href="#projets"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              Voir mes projets
            </a>
          </div>

          <div className="flex justify-center gap-6 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/malick624/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/malick-fallba44b42ba"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:mf4749351@gmail.com"
              className="hover:scale-110 transition-transform"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
