import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1657313611583-ce19d042cfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWV0aCUyMHdoaXRlbmluZyUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc3NjMyNzE2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Teeth Whitening',
    type: 'Before & After'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1771442873035-474765b40ac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50JTIwcHJvY2VkdXJlfGVufDF8fHx8MTc3NjI1MTUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Dental Implants',
    type: 'Treatment'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzYzMTgwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Clinic',
    type: 'Facility'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1650803075918-efbee311735d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBkZW50YWwlMjBjaGVja3VwfGVufDF8fHx8MTc3NjMyNzE2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Happy Patient',
    type: 'Results'
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-300 to-teal-300 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Our Gallery
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Results & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Facility</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Explore our state-of-the-art facility and successful treatment results
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => {
            const gradients = [
              'from-teal-500 to-cyan-500',
              'from-blue-500 to-indigo-500',
              'from-purple-500 to-pink-500',
              'from-orange-500 to-red-500'
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-white hover:scale-105"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}>
                  <div className="text-white text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <ZoomIn className="w-12 h-12 mx-auto mb-3" strokeWidth={2.5} />
                    <div className="text-sm font-bold mb-2 bg-white/20 px-3 py-1 rounded-full inline-block backdrop-blur-sm">
                      {image.type}
                    </div>
                    <div className="text-2xl font-black">{image.title}</div>
                  </div>
                </div>

                {/* Corner Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${gradient} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {image.type}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm group"
          >
            <X className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center mt-8 text-white">
              <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-xl">
                {selectedImage.type}
              </div>
              <div className="text-4xl font-black mb-2">{selectedImage.title}</div>
              <p className="text-gray-300 text-lg">Click anywhere to close</p>
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