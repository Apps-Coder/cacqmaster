import React from 'react';
import { Briefcase, TrendingUp, MapPin, DollarSign } from 'lucide-react';

const Careers = () => {
  const careers = [
    {
      title: "Ingénieur Qualité",
      company: "Danone, Nestlé, Unilever",
      salary: "45-65k€",
      description: "Garantir la conformité des produits et optimiser les processus qualité"
    },
    {
      title: "Responsable R&D",
      company: "Bonduelle, Lactalis, Bel",
      salary: "50-75k€",
      description: "Développer de nouveaux produits et innovations alimentaires"
    },
    {
      title: "Chef de Production",
      company: "Fleury Michon, Sodexo",
      salary: "48-70k€",
      description: "Piloter les équipes et optimiser les lignes de production"
    },
    {
      title: "Consultant Agroalimentaire",
      company: "Indépendant, Cabinets conseil",
      salary: "55-85k€",
      description: "Accompagner les entreprises dans leur transformation"
    }
  ];

  const sectors = [
    { name: "Industrie Laitière", percentage: 25 },
    { name: "Produits Carnés", percentage: 20 },
    { name: "Boissons", percentage: 18 },
    { name: "Produits Végétaux", percentage: 15 },
    { name: "Boulangerie-Pâtisserie", percentage: 12 },
    { name: "Autres secteurs", percentage: 10 }
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Débouchés Professionnels
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            L'industrie agroalimentaire recrute massivement. Nos diplômés trouvent 
            rapidement leur place dans des entreprises leaders du secteur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Career Opportunities */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Briefcase className="text-emerald-600" />
              Postes & Entreprises
            </h3>
            <div className="space-y-6">
              {careers.map((career, index) => (
                <div key={index} className="bg-gradient-to-r from-slate-50 to-emerald-50 p-6 rounded-xl border border-emerald-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-slate-800">{career.title}</h4>
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <DollarSign size={14} />
                      {career.salary}
                    </span>
                  </div>
                  <p className="text-emerald-600 font-medium mb-2 flex items-center gap-2">
                    <MapPin size={16} />
                    {career.company}
                  </p>
                  <p className="text-slate-600">{career.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Market Statistics */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <TrendingUp className="text-emerald-600" />
              Répartition par Secteur
            </h3>
            
            <div className="bg-slate-50 p-6 rounded-xl mb-8">
              <div className="space-y-4">
                {sectors.map((sector, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{sector.name}</span>
                      <span className="text-emerald-600 font-semibold">{sector.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${sector.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-emerald-600 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-emerald-100">Insertion professionnelle</div>
                <div className="text-emerald-100 text-sm mt-1">dans les 6 mois</div>
              </div>
              <div className="bg-slate-800 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2">€58k</div>
                <div className="text-slate-300">Salaire moyen</div>
                <div className="text-slate-300 text-sm mt-1">après 2 ans d'expérience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Image */}
        <div className="relative h-64 rounded-xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg"
            alt="Food industry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-emerald-900/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Un secteur en pleine croissance</h3>
              <p className="text-slate-200">+15% d'emplois créés chaque année dans l'agroalimentaire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;