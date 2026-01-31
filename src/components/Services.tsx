import { Globe, Smartphone, Search, ShoppingCart, Database, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe size={40} />,
      title: 'Développement Web',
      description: 'Sites web modernes et performants adaptés à vos besoins',
      features: ['Framework moderne', 'Design Responsive', 'SEO Optimisé'],
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Applications Mobiles',
      description: 'Applications natives et hybrides pour iOS et Android',
      features: ['Interface Intuitive', 'Performance Optimale', 'UX Design'],
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'E-Commerce',
      description: 'Boutiques en ligne complètes avec paiement sécurisé',
      features: ['Gestion Produits', 'Paiements Sécurisés', 'Analytics'],
    },
    {
      icon: <Database size={40} />,
      title: 'Backend & API',
      description: 'Architecture backend robuste et APIs performantes',
      features: ['REST API', 'Base de données', 'Sécurité'],
    },
    {
      icon: <Search size={40} />,
      title: 'SEO & Marketing',
      description: 'Optimisation pour les moteurs de recherche',
      features: ['Référencement', 'Analytics', 'Stratégie digitale'],
    },
    {
      icon: <Zap size={40} />,
      title: 'Maintenance',
      description: 'Support technique et maintenance continue',
      features: ['Support 24/7', 'Mises à jour', 'Monitoring'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Mes Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour tous vos besoins digitaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
