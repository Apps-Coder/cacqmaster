import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Formation', href: '#formation' },
    { name: 'Programme', href: '#programme' },
    { name: 'Débouchés', href: '#debouches' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AgroTech Formation</h1>
              <p className="text-sm text-emerald-600">Excellence en Agroalimentaire</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button className="hidden md:block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300">
            S'inscrire
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300 w-fit">
                S'inscrire
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;