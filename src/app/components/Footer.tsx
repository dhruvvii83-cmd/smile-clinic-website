import { Smile, MapPin, Phone, Mail, Heart } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  const services = [
    'Teeth Cleaning',
    'Dental X-Ray',
    'Root Canal',
    'Dental Implants',
    'Teeth Whitening',
    'Braces & Aligners'
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white pt-20 pb-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-600 rounded-2xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 p-3 rounded-2xl shadow-xl">
                  <Smile className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl leading-tight">Smile Clinic</span>
                <span className="text-sm text-cyan-400 font-bold">DENTAL SERVICES</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 font-medium">
              Your trusted partner for comprehensive dental care. We provide quality treatments with a gentle touch and personalized care.
            </p>
            <div className="flex gap-4">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-black">5k+</div>
                  <div className="text-xs">Patients</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-black">10+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-black">4.9</div>
                  <div className="text-xs">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 font-medium hover:translate-x-2 inline-block transform"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium hover:translate-x-2 inline-block transform"
                  >
                    → {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-black text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-2 rounded-lg mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-gray-400 text-sm font-medium">
                  123 Dental Street<br />Medical District<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <a href="tel:+918454895868" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium">
                  +91 8454895868
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <a href="mailto:info@smileclinic.com" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium">
                  info@smileclinic.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm text-center md:text-left font-medium flex items-center gap-2">
              © {new Date().getFullYear()} Smile Clinic Dental Services. Made with
              <Heart className="w-4 h-4 text-red-500 fill-red-500 inline animate-pulse" />
              All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm justify-center">
              <button className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">
                Cookie Policy
              </button>
            </div>
          </div>

          {/* Certification Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="text-2xl">🏆</span>
              <span className="text-sm font-bold text-cyan-400">Certified Dental Healthcare Provider</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}