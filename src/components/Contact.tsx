import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Users, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    motivation: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Merci pour votre candidature ! Nous vous recontacterons sous 48h.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      action: "tel:+33123456789"
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@formation-agroalimentaire.fr",
      action: "mailto:contact@formation-agroalimentaire.fr"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "123 Avenue de l'Innovation, 75015 Paris",
      action: null
    }
  ];

  const admissionSteps = [
    {
      icon: FileText,
      title: "Dossier de candidature",
      description: "Complétez le formulaire en ligne"
    },
    {
      icon: Users,
      title: "Entretien individuel",
      description: "Échangez avec notre équipe pédagogique"
    },
    {
      icon: Calendar,
      title: "Confirmation d'admission",
      description: "Recevez votre réponse sous 48h"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Candidater à la Formation
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Rejoignez notre prochaine promotion et donnez un nouvel élan à votre carrière 
            dans l'industrie agroalimentaire
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Send className="text-emerald-400" />
              Formulaire de Candidature
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Expérience professionnelle
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white resize-none"
                  placeholder="Décrivez brièvement votre parcours professionnel..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Motivation *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-emerald-500 text-white resize-none"
                  placeholder="Expliquez votre motivation pour cette formation..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer ma candidature
              </button>
            </form>
          </div>

          {/* Contact Info & Process */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Nous Contacter</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-emerald-600 p-3 rounded-lg">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">{info.title}</div>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-white hover:text-emerald-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Admission Process */}
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Processus d'Admission</h3>
              <div className="space-y-6">
                {admissionSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-emerald-600 p-3 rounded-lg">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                        <p className="text-slate-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Session */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Prochaine Session</h3>
              <div className="text-emerald-100 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={16} />
                  Début : Septembre 2024
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  Places limitées : 25 candidats
                </div>
              </div>
              <div className="bg-emerald-700 p-3 rounded-lg text-sm">
                <strong>Candidatures ouvertes</strong><br />
                Clôture des inscriptions : 31 juillet 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;