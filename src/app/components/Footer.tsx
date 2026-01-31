import React from 'react';
import { Logo } from './Logo';
import { Heart, Leaf, Facebook, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                    <Leaf className="w-3 h-3 text-white fill-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Dil Se Parivar
                  </h3>
                  <p className="text-xs text-secondary font-medium uppercase tracking-wide">
                    Pure Veg Family Restaurant
                  </p>
                </div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Serving authentic Indian vegetarian cuisine with love and care since day one. 
              Every meal is a celebration of family and tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <strong className="text-white">Address:</strong><br />
                Near Railway Station<br />
                Dombivli (East), Maharashtra 421201
              </li>
              <li>
                <strong className="text-white">Phone:</strong><br />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <strong className="text-white">Email:</strong><br />
                <a href="mailto:info@dilseparivar.com" className="hover:text-primary transition-colors">
                  info@dilseparivar.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@dilseparivar.com"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Dil Se Parivar. All rights reserved. Made with <Heart className="w-4 h-4 inline text-primary fill-primary" /> for our family.
            </p>
            <div className="flex items-center gap-2 text-secondary text-sm">
              <Leaf className="w-4 h-4" />
              <span>100% Pure Vegetarian</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
