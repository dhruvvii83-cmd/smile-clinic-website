import { useState } from 'react';
import { 
  Sparkles, 
  Camera, 
  Stethoscope, 
  Bone, 
  Scissors, 
  AlignJustify, 
  Sun, 
  XCircle,
  X,
  ArrowRight
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  details: string;
  benefits: string[];
}

const services: Service[] = [
  {
    id: 'cleaning',
    title: 'Teeth Cleaning',
    description: 'Professional dental cleaning and polishing',
    icon: Sparkles,
    details: 'Regular teeth cleaning helps prevent cavities, gum disease, and bad breath. Our professional cleaning service includes scaling, polishing, and fluoride treatment.',
    benefits: [
      'Removes plaque and tartar buildup',
      'Prevents gum disease',
      'Freshens breath',
      'Brightens your smile'
    ]
  },
  {
    id: 'xray',
    title: 'Dental X-Ray',
    description: 'Advanced digital imaging for accurate diagnosis',
    icon: Camera,
    details: 'State-of-the-art digital X-ray technology provides detailed images of your teeth and jaw structure with minimal radiation exposure.',
    benefits: [
      'Early detection of dental problems',
      'Precise treatment planning',
      'Low radiation exposure',
      'Instant digital results'
    ]
  },
  {
    id: 'rootcanal',
    title: 'Root Canal Treatment',
    description: 'Save your natural teeth with painless procedures',
    icon: Stethoscope,
    details: 'Modern root canal treatment is virtually painless and can save your natural tooth. We use advanced techniques for comfortable treatment.',
    benefits: [
      'Saves natural tooth',
      'Relieves tooth pain',
      'Prevents infection spread',
      'Pain-free procedure'
    ]
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth',
    icon: Bone,
    details: 'Dental implants are the gold standard for replacing missing teeth. They look, feel, and function like natural teeth.',
    benefits: [
      'Natural appearance',
      'Long-lasting solution',
      'Preserves jawbone',
      'Improved confidence'
    ]
  },
  {
    id: 'dentures',
    title: 'Dentures',
    description: 'Custom-fitted dentures for comfort',
    icon: Scissors,
    details: 'We create custom dentures that fit comfortably and look natural. Choose from partial or complete dentures.',
    benefits: [
      'Restores smile aesthetics',
      'Improves chewing ability',
      'Custom-fitted comfort',
      'Affordable option'
    ]
  },
  {
    id: 'braces',
    title: 'Braces & Aligners',
    description: 'Straighten teeth with modern orthodontics',
    icon: AlignJustify,
    details: 'Modern orthodontic treatments including traditional braces and clear aligners to give you the perfect smile.',
    benefits: [
      'Corrects misalignment',
      'Improves bite function',
      'Boosts confidence',
      'Multiple treatment options'
    ]
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Brighten your smile with professional whitening',
    icon: Sun,
    details: 'Professional teeth whitening can brighten your smile by several shades in just one visit. Safe and effective results.',
    benefits: [
      'Removes stains and discoloration',
      'Quick and effective',
      'Safe for enamel',
      'Long-lasting results'
    ]
  },
  {
    id: 'extraction',
    title: 'Tooth Extraction',
    description: 'Safe and comfortable tooth removal',
    icon: XCircle,
    details: 'When a tooth cannot be saved, we provide gentle extraction services with proper pain management and aftercare.',
    benefits: [
      'Pain relief',
      'Prevents infection',
      'Minimally invasive',
      'Quick recovery'
    ]
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Dental <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Comprehensive dental care services to keep your smile healthy and beautiful
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const gradients = [
              'from-teal-500 to-cyan-500',
              'from-cyan-500 to-blue-500',
              'from-blue-500 to-indigo-500',
              'from-indigo-500 to-purple-500',
              'from-purple-500 to-pink-500',
              'from-pink-500 to-rose-500',
              'from-rose-500 to-orange-500',
              'from-orange-500 to-amber-500'
            ];
            const gradient = gradients[index % gradients.length];
            
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`relative bg-gradient-to-br ${gradient} w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-black text-xl text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Arrow */}
                <div className="flex items-center gap-2 text-teal-600 font-bold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform scale-100 transition-all duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="relative p-8 md:p-10">
              {/* Gradient Header Background */}
              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 rounded-t-3xl opacity-10"></div>
              
              {/* Header */}
              <div className="relative flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                  <div className="bg-gradient-to-br from-teal-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl">
                    <selectedService.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">{selectedService.title}</h3>
                    <p className="text-gray-600 font-medium">{selectedService.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Details */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-2xl border-l-4 border-teal-500">
                  <h4 className="font-black text-gray-900 mb-3 text-lg">About this service</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedService.details}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-black text-gray-900 mb-4 text-lg">Key Benefits</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border-2 border-gray-100 hover:border-teal-200 transition-colors">
                        <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg p-1 flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    setSelectedService(null);
                    const element = document.getElementById('appointment');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg"
                >
                  Book Appointment for {selectedService.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}