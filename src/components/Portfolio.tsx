import { ExternalLink, ArrowRight } from 'lucide-react';
import {facial1 ,pointage1} from '../assets/images';
export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plateforme de vente en ligne complète avec gestion des stocks, panier intelligent et système de paiement sécurisé. Interface intuitive pour les clients et tableau de bord puissant pour les marchands.',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Spring Boot', 'Stripe'],
      link: '#',
      results: ['500+ produits gérés', '10k+ utilisateurs actifs', '+350% conversion'],
    },
    {
      title: 'Application Mobile',
      description: 'Application de gestion de tâches avec synchronisation cloud en temps réel. Notifications intelligentes, partage de projets et collaboration d\'équipe intégrées.',
      image: 'https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      link: '#',
      results: ['Sync temps réel', '4.8★ sur AppStore', '50k téléchargements'],
    },
    {
      title: 'Systeme de reconnaissance Faciale et Digital',
      description: 'Plateforme compléte et sécurisée permetant de vérifier l\'identité des personnes via leurs emprunts faciale ou digital ',
      image: facial1,
      tags: ['Java/JEE', 'JSP'],
      link: '#',
      results: ['API temps réel', 'Export PDF/CSV'],
    },
    {
      title: 'Site Vitrine',
      description: 'Site web moderne pour entreprise de services avec design responsif. Optimisé SEO, performance maximale et conversion excellente pour générer des leads.',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Vite', 'SEO'],
      link: '#',
      results: ['100/100 Lighthouse', '+200% trafic', 'Top 3 Google'],
    },
    {
      title: 'Application de pointage facial',
      description: 'Application desktop complète de gestion de pointage par reconnaissance faciale pour entreprises. Elle permet d\'automatiser le processus de pointage des employés via une interface de reconnaissance faciale en temps réel, avec une gestion administrative complète.',
      image:pointage1,
      tags: ['React.js', 'PostgreSQL', 'Rust','Tauri'],
      link: '#',
      results: ['Billing automatisé', '99% precision', '1k+ employées'],
    },
    {
      title: 'API REST',
      description: 'API robuste et scalable pour applications mobiles et web. Documentation complète, rate limiting intelligent et authentification sécurisée OAuth2.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Spring Boot','PostgreSQL'],
      link: '#',
      results: ['1M+ requêtes/jour', 'Latence <100ms', '100% uptime'],
    },
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de mes réalisations récentes
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-cols-2 md:auto-cols-fr' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : 'md:order-1'}>
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 py-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-blue-600">
                          {result}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 mt-6 text-blue-600 hover:text-blue-700 font-semibold group/link"
                  >
                    Voir le projet
                    <ArrowRight
                      size={20}
                      className="group-hover/link:translate-x-2 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
