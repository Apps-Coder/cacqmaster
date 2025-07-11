import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Ingénieur Qualité chez Danone",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
      content: "Cette formation m'a donné toutes les clés pour réussir dans l'industrie agroalimentaire. Les intervenants sont des professionnels reconnus et le programme est parfaitement adapté aux besoins du marché.",
      rating: 5,
      year: "Promotion 2022"
    },
    {
      name: "Thomas Martin",
      role: "Responsable R&D chez Bonduelle",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
      content: "Grâce à cette formation, j'ai pu évoluer rapidement vers un poste à responsabilités. L'approche pratique et les stages en entreprise m'ont permis d'acquérir une expérience solide.",
      rating: 5,
      year: "Promotion 2021"
    },
    {
      name: "Sophie Laurent",
      role: "Consultante Indépendante",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      content: "Le réseau d'anciens élèves est exceptionnel. Nous nous entraidons régulièrement et les opportunités professionnelles se multiplient grâce à cette communauté solidaire.",
      rating: 5,
      year: "Promotion 2020"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Témoignages
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les parcours inspirants de nos anciens étudiants, 
            aujourd'hui leaders dans l'industrie agroalimentaire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative">
              <Quote size={32} className="text-emerald-200 absolute top-4 right-6" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-emerald-600 text-sm font-medium">{testimonial.role}</p>
                  <p className="text-slate-500 text-xs">{testimonial.year}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-slate-600">Diplômés formés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-slate-600">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-slate-600">Recommandent la formation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-slate-600">Entreprises partenaires</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;