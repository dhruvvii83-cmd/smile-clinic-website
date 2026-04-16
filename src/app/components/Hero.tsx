import { Phone, Calendar, Shield, Award, Clock, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
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

  const handleCallNow = () => {
    window.location.href = 'tel:+918454895868';
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg border border-teal-100">
              <Award className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Award Winning Dental Care
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Healthy Teeth,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 animate-gradient">
                  Beautiful Smile
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                Expert dental care including <span className="text-teal-600 font-bold">cleaning</span>, <span className="text-cyan-600 font-bold">X-ray</span>, <span className="text-blue-600 font-bold">root canal</span>, implants, dentures and braces
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Shield, text: '100% Safe' },
                { icon: CheckCircle, text: 'Certified' },
                { icon: Clock, text: '24/7 Support' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-100">
                  <item.icon className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToAppointment}
                className="group relative overflow-hidden bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white px-10 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg font-bold"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={handleCallNow}
                className="group bg-white text-teal-600 border-3 border-teal-500 px-10 py-5 rounded-full hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                Call Now
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: '5000+', label: 'Happy Patients', gradient: 'from-teal-500 to-cyan-500' },
                { value: '10+', label: 'Years Experience', gradient: 'from-cyan-500 to-blue-500' },
                { value: '4.9', label: 'Rating', gradient: 'from-blue-500 to-purple-500' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-600/20 z-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684607632041-32d729cdee35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMHNtaWxpbmclMjBoYXBweXxlbnwxfHx8fDE3NzYzMDQ2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy patient with dentist"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl hidden md:block animate-float border-4 border-teal-100">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-4 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-black text-gray-900 text-lg">Premium Care</div>
                  <div className="text-sm text-teal-600 font-semibold">24/7 Support</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl hidden lg:block animate-float text-white" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-3xl font-black">100%</div>
                <div className="text-sm font-semibold mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}