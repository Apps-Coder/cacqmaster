import React from 'react';
import { ArrowRight, GraduationCap, Users, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5217687/pexels-photo-5217687.jpeg"
          alt="Food laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-emerald-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Devenez
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Ingénieur Agroalimentaire
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
            Formez-vous aux technologies de pointe de l'industrie alimentaire et 
            façonnez l'avenir de l'alimentation durable
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Candidater maintenant
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10"
            >
              Découvrir le programme
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <GraduationCap size={32} className="text-emerald-400 mb-2" />
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-slate-300">Taux de réussite</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Users size={32} className="text-emerald-400 mb-2" />
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-slate-300">Diplômés formés</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Award size={32} className="text-emerald-400 mb-2" />
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-slate-300">Insertion professionnelle</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;