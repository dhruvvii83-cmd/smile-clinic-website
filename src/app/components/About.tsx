import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, TrendingUp, Star, Sparkles } from 'lucide-react';

export function About() {
  const stats = [
    {
      icon: Users,
      value: '5000+',
      label: 'Happy Patients',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      value: '10+',
      label: 'Years Experience',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Average Rating',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/40 to-white"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-600/10 z-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729162128021-f37dca3ff30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc2MjkwMjgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional dentist"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 p-8 rounded-3xl shadow-2xl hidden md:block animate-float border-4 border-white">
              <div className="text-white text-center">
                <Sparkles className="w-8 h-8 mx-auto mb-2" />
                <div className="text-5xl font-black">10+</div>
                <div className="text-sm mt-2 font-bold">Years Serving</div>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl opacity-80 -z-10"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 md:order-2">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                About Our Clinic
              </span>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Smile Clinic</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6 font-medium">
                Welcome to Smile Clinic Dental Services, where your dental health and beautiful smile are our top priorities. With over a decade of experience, we provide comprehensive dental care using the latest technology and techniques.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Our team of experienced dentists and friendly staff are dedicated to making every visit comfortable and stress-free. From routine check-ups to advanced treatments, we're here to help you achieve optimal oral health.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group text-center bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent cursor-pointer">
                    <div className={`bg-gradient-to-br ${stat.color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                    <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-gray-600 mt-2 font-semibold">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Mission Statement */}
            <div className="relative bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl border-l-4 border-teal-500 shadow-lg overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full blur-3xl opacity-30"></div>
              
              <div className="relative">
                <h3 className="font-black text-gray-900 mb-3 text-xl flex items-center gap-2">
                  <Star className="w-6 h-6 text-teal-600" />
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  To provide exceptional dental care that exceeds expectations, using advanced technology and personalized treatment plans in a comfortable, welcoming environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}