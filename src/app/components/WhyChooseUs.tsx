import { Award, Heart, Shield, DollarSign, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Experienced Dentists',
    description: 'Our team of certified dentists has over 10 years of experience in dental care',
    gradient: 'from-teal-500 to-cyan-500',
    iconBg: 'from-teal-100 to-cyan-100'
  },
  {
    icon: Heart,
    title: 'Advanced Equipment',
    description: 'State-of-the-art dental technology for accurate diagnosis and comfortable treatment',
    gradient: 'from-cyan-500 to-blue-500',
    iconBg: 'from-cyan-100 to-blue-100'
  },
  {
    icon: Shield,
    title: 'Hygienic Environment',
    description: 'Maintaining the highest standards of cleanliness and sterilization',
    gradient: 'from-blue-500 to-indigo-500',
    iconBg: 'from-blue-100 to-indigo-100'
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Quality dental care at competitive prices with flexible payment options',
    gradient: 'from-indigo-500 to-purple-500',
    iconBg: 'from-indigo-100 to-purple-100'
  },
  {
    icon: Clock,
    title: 'Emergency Support',
    description: '24/7 emergency dental services available when you need us most',
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'from-purple-100 to-pink-100'
  }
];

export function WhyChooseUs() {
  return (
    <section id="treatments" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white"></div>

      {/* Animated Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Our Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Smile Clinic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            We are committed to providing exceptional dental care with a patient-first approach
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gray-100 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Corner Decoration */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex bg-gradient-to-br ${feature.iconBg} p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>

                  {/* Number Badge */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center font-black text-gray-400 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-500">
                    {index + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full shadow-xl font-bold text-lg">
            <Shield className="w-6 h-6" />
            <span>Trusted by 5000+ Happy Patients</span>
          </div>
        </div>
      </div>
    </section>
  );
}