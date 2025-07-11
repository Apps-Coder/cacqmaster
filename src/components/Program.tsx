import React from 'react';
import { BookOpen, FlaskRound as Flask, Cpu, Users, Clock, Award } from 'lucide-react';

const Program = () => {
  const modules = [
    {
      icon: Flask,
      title: "Sciences Alimentaires",
      description: "Microbiologie, chimie alimentaire, biochimie et analyse sensorielle",
      duration: "120h"
    },
    {
      icon: Cpu,
      title: "Technologies de Production",
      description: "Procédés industriels, automatisation et contrôle qualité",
      duration: "100h"
    },
    {
      icon: BookOpen,
      title: "Réglementation & Sécurité",
      description: "HACCP, normes internationales et législation alimentaire",
      duration: "80h"
    },
    {
      icon: Users,
      title: "Management & Innovation",
      description: "Gestion de projets, R&D et développement durable",
      duration: "90h"
    }
  ];

  const highlights = [
    "Formation certifiante reconnue par l'État",
    "Stages en entreprises partenaires",
    "Projet professionnel tutoré",
    "Réseau d'anciens diplômés actif"
  ];

  return (
    <section id="program" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Programme de Formation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Un cursus complet alliant théorie et pratique, conçu avec les professionnels 
            du secteur pour répondre aux enjeux actuels de l'industrie agroalimentaire
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Modules */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <BookOpen className="text-emerald-600" />
              Modules de Formation
            </h3>
            <div className="space-y-6">
              {modules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-100 p-3 rounded-lg">
                        <IconComponent size={24} className="text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-slate-800">{module.title}</h4>
                          <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1">
                            <Clock size={14} />
                            {module.duration}
                          </span>
                        </div>
                        <p className="text-slate-600">{module.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Program Image & Highlights */}
          <div>
            <div className="mb-8">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
                alt="Students in laboratory"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Award className="text-emerald-600" />
              Points Forts
            </h3>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-emerald-100">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-2">Durée & Format</h4>
              <p className="text-emerald-100 mb-3">
                12 mois de formation intensive • Temps plein ou temps partiel
              </p>
              <p className="text-emerald-100">
                70% pratique • 30% théorie • Stage en entreprise inclus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;