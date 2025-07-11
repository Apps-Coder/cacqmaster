import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Accueil',
    'Programme',
    'Carrières',
    'Témoignages',
    'Contact'
  ];

  const legalLinks = [
    'Mentions légales',
    'Politique de confidentialité',
    'Conditions d\'utilisation',
    'Plan du site'
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IA</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Formation Ingénieur</h3>
                <p className="text-sm text-emerald-300">Agroalimentaire</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              La formation de référence pour devenir ingénieur dans l'industrie agroalimentaire. 
              Excellence académique et insertion professionnelle garantie.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-slate-800 hover:bg-emerald-600 p-2 rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-slate-400">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-slate-400">contact@formation-agroalimentaire.fr</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-emerald-400 mt-0.5" />
                <span className="text-slate-400">
                  123 Avenue de l'Innovation<br />
                  75015 Paris, France
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">
              Restez informé des nouveautés et des prochaines sessions de formation.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-lg text-sm focus:outline-none focus:border-emerald-500"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-r-lg transition-colors">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2024 Formation Ingénieur Agroalimentaire. Tous droits réservés.
            </div>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link, index) => (
                <button
                  key={index}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;