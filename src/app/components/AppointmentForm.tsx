import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Stethoscope, Send } from 'lucide-react';

const services = [
  'Teeth Cleaning',
  'Dental X-Ray',
  'Root Canal Treatment',
  'Dental Implants',
  'Dentures',
  'Braces & Aligners',
  'Teeth Whitening',
  'Tooth Extraction',
  'General Checkup'
];

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM'
];

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    service: '',
    date: '',
    time: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Create WhatsApp message
      const message = `Hello! I would like to book an appointment at Smile Clinic.

*Patient Details:*
Name: ${formData.name}
Age: ${formData.age}
Phone: ${formData.phone}
Email: ${formData.email}

*Appointment Details:*
Service: ${formData.service}
Date: ${formData.date}
Preferred Time: ${formData.time}

Please confirm my appointment. Thank you!`;

      const whatsappNumber = '918454895868';
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Optional: Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        age: '',
        service: '',
        date: '',
        time: ''
      });
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-cyan-50 to-blue-50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Schedule Appointment
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Book an <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Appointment</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Fill out the form below and we'll confirm your appointment via WhatsApp
          </p>
        </div>

        {/* Form */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-teal-100/50">
          {/* Decorative Corner */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl opacity-20 -z-10"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl opacity-20 -z-10"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Age */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-900 font-bold mb-3">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-1.5 rounded-lg">
                    <User className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Enter your name"
                  className={`w-full px-5 py-4 rounded-2xl border-3 ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : focusedField === 'name' 
                        ? 'border-teal-500 shadow-lg shadow-teal-100' 
                        : 'border-gray-200 hover:border-gray-300'
                  } focus:outline-none transition-all duration-300 font-medium text-gray-900`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="font-semibold">⚠</span> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-900 font-bold mb-3">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-1.5 rounded-lg">
                    <User className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('age')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                  className={`w-full px-5 py-4 rounded-2xl border-3 ${
                    errors.age 
                      ? 'border-red-500 focus:border-red-500' 
                      : focusedField === 'age' 
                        ? 'border-cyan-500 shadow-lg shadow-cyan-100' 
                        : 'border-gray-200 hover:border-gray-300'
                  } focus:outline-none transition-all duration-300 font-medium text-gray-900`}
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="font-semibold">⚠</span> {errors.age}
                  </p>
                )}
              </div>
            </div>

            {/* Phone and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-900 font-bold mb-3">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-1.5 rounded-lg">
                    <Phone className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Enter phone number"
                  className={`w-full px-5 py-4 rounded-2xl border-3 ${
                    errors.phone 
                      ? 'border-red-500 focus:border-red-500' 
                      : focusedField === 'phone' 
                        ? 'border-blue-500 shadow-lg shadow-blue-100' 
                        : 'border-gray-200 hover:border-gray-300'
                  } focus:outline-none transition-all duration-300 font-medium text-gray-900`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="font-semibold">⚠</span> {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-900 font-bold mb-3">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-1.5 rounded-lg">
                    <Mail className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Enter email address"
                  className={`w-full px-5 py-4 rounded-2xl border-3 ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : focusedField === 'email' 
                        ? 'border-indigo-500 shadow-lg shadow-indigo-100' 
                        : 'border-gray-200 hover:border-gray-300'
                  } focus:outline-none transition-all duration-300 font-medium text-gray-900`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="font-semibold">⚠</span> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="flex items-center gap-2 text-gray-900 font-bold mb-3">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-1.5 rounded-lg">
                  <Stethoscope className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                Select Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={() => setFocusedField('service')}
                onBlur={() => setFocusedField('')}
                className={`w-full px-5 py-4 rounded-2xl border-3 ${
                  errors.service 
                    ? 'border-red-500 focus:border-red-500' 
                    : focusedField === 'service' 
                      ? 'border-purple-500 shadow-lg shadow-purple-100' 
                      : 'border-gray-200 hover:border-gray-300'
                } focus:outline-none transition-all duration-300 font-medium text-gray-900`}
              >
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="font-semibold">⚠</span> {errors.service}
                </p>
              )}
            </div>

            {/* Date and Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-900 font-bold mb-3">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-1.5 rounded-lg">
                    <Calendar className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('date')}
                  onBlur={() => setFocusedField('')}
                  min={today}
                  className={`w-full px-5 py-4 rounded-2xl border-3 ${
                    errors.date 
                      ? 'border-red-500 focus:border-red-500' 
                      : focusedField === 'date' 
                        ? 'border-pink-500 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-gray-300'
                  } focus:outline-none transition-all duration-300 font-medium text-gray-900`}
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="font-semibold">⚠</span> {errors.date}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-900 font-bold mb-3">
                  <div className="bg-gradient-to-br from-rose-500 to-orange-500 p-1.5 rounded-lg">
                    <Clock className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  Preferred Time *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('time')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full px-5 py-4 rounded-2xl border-3 ${
                    errors.time 
                      ? 'border-red-500 focus:border-red-500' 
                      : focusedField === 'time' 
                        ? 'border-rose-500 shadow-lg shadow-rose-100' 
                        : 'border-gray-200 hover:border-gray-300'
                  } focus:outline-none transition-all duration-300 font-medium text-gray-900`}
                >
                  <option value="">Select time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="font-semibold">⚠</span> {errors.time}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full relative overflow-hidden bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white px-10 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-xl font-black flex items-center justify-center gap-3"
            >
              <span className="relative z-10">Confirm via WhatsApp</span>
              <Send className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <p className="text-sm text-gray-500 text-center font-medium">
              * Required fields. Your appointment will be confirmed via WhatsApp
            </p>
          </form>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { icon: '🔒', text: 'Secure & Private' },
            { icon: '⚡', text: 'Instant Confirmation' },
            { icon: '💬', text: 'WhatsApp Support' }
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-teal-100">
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-bold text-gray-700">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}