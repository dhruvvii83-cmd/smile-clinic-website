import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Dental Street', 'Medical District', 'New York, NY 10001'],
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8454895868', '+1 (555) 123-4567'],
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@smileclinic.com', 'appointments@smileclinic.com'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Clinic Timings',
      details: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat: 9:00 AM - 5:00 PM', 'Sun: 10:00 AM - 3:00 PM'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const socialMedia = [
    { icon: Facebook, color: 'hover:bg-blue-600', label: 'Facebook' },
    { icon: Twitter, color: 'hover:bg-sky-500', label: 'Twitter' },
    { icon: Instagram, color: 'hover:bg-pink-600', label: 'Instagram' },
    { icon: Linkedin, color: 'hover:bg-blue-700', label: 'LinkedIn' }
  ];

  const handleCallClick = () => {
    window.location.href = 'tel:+918454895868';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@smileclinic.com';
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-cyan-50 to-blue-50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Get in touch with us for any questions or to schedule an appointment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative flex items-start gap-6">
                    <div className={`bg-gradient-to-br ${info.gradient} p-4 rounded-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-gray-900 mb-3 text-xl">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 font-medium leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <button
                onClick={handleCallClick}
                className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 font-bold"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" strokeWidth={2.5} />
                <span>Call Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10"></span>
              </button>
              <button
                onClick={handleEmailClick}
                className="bg-white text-teal-600 border-3 border-teal-500 px-6 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-bold"
              >
                <Mail className="w-5 h-5" strokeWidth={2.5} />
                Email Us
              </button>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
              <h3 className="font-black text-gray-900 mb-6 text-xl flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Follow Us on Social Media
              </h3>
              <div className="flex gap-4">
                {socialMedia.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={idx}
                      aria-label={social.label}
                      className={`bg-gradient-to-br from-gray-100 to-gray-200 p-4 rounded-xl ${social.color} hover:text-white transition-all duration-300 group hover:scale-110 shadow-lg hover:shadow-xl`}
                    >
                      <Icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" strokeWidth={2.5} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-teal-100/50">
            <div className="relative h-full min-h-[500px] bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 flex items-center justify-center p-8">
              {/* Decorative Background */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl opacity-30"></div>

              <div className="relative text-center z-10">
                <div className="bg-gradient-to-br from-teal-500 to-blue-600 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <MapPin className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Visit Our Clinic</h3>
                <p className="text-lg text-gray-700 mb-6 font-medium">
                  123 Dental Street, Medical District<br />
                  New York, NY 10001
                </p>
                <button className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg">
                  Get Directions →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}