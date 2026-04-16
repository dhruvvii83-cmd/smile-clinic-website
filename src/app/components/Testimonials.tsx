import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    service: 'Teeth Whitening',
    rating: 5,
    comment: 'Amazing experience! The staff was incredibly professional and friendly. My teeth look brighter than ever. Highly recommend Smile Clinic for anyone looking for quality dental care.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
  },
  {
    id: 2,
    name: 'Michael Chen',
    service: 'Dental Implants',
    rating: 5,
    comment: 'I was nervous about getting dental implants, but Dr. Smith made the entire process smooth and painless. The results exceeded my expectations. Best decision I ever made!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    service: 'Braces',
    rating: 5,
    comment: 'The orthodontic treatment I received was excellent. The team was patient in explaining each step, and my smile transformation has been incredible. Thank you Smile Clinic!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  },
  {
    id: 4,
    name: 'David Patel',
    service: 'Root Canal',
    rating: 5,
    comment: 'I had a root canal done and it was completely painless! The dentist was very skilled and made me feel comfortable throughout. The clinic is modern and very clean.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    service: 'General Checkup',
    rating: 5,
    comment: 'Regular checkups here have kept my dental health in perfect condition. The preventive care approach is excellent. The entire team genuinely cares about patient wellbeing.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Patient Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Hear what our happy patients have to say about their experience
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-16 border-4 border-purple-100/50 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white opacity-50"></div>

            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-32 h-32 text-purple-600" strokeWidth={3} />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex gap-2 mb-8 justify-center">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-10 italic font-medium text-center">
                "{currentTestimonial.comment}"
              </p>

              {/* Patient Info */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white text-2xl font-black shadow-xl border-4 border-white">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div className="text-center">
                  <div className="font-black text-gray-900 text-2xl">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-purple-600 font-semibold mt-1">
                    {currentTestimonial.service}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prevTestimonial}
              className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-gray-500 font-semibold">
              {currentIndex + 1} / {testimonials.length}
            </span>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-xl font-bold text-lg">
            <Star className="w-6 h-6 fill-white" />
            <span>4.9/5 Average Rating from 500+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}