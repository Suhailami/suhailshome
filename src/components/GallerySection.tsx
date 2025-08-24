import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "VLSI Lab Work",
      description: "Working on digital circuit design and verification",
      category: "Lab Work",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Project Presentation",
      description: "Presenting machine learning project to faculty",
      category: "Presentations",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Technical Workshop",
      description: "Attending VLSI design workshop at university",
      category: "Workshops",
      imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Internship at BEL",
      description: "Working on FPGA implementation during internship",
      category: "Internship",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "IEEE Conference",
      description: "Participating in IEEE technical conference",
      category: "Conferences",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Team Project",
      description: "Collaborating on IoT-based project with teammates",
      category: "Projects",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop"
    }
  ];

  const categories = ["All", "Lab Work", "Projects", "Internship", "Workshops", "Conferences", "Presentations"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual journey through my academic and professional experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="card p-0 overflow-hidden cursor-pointer hover-lift group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View Image</span>
                </div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium">
                  {item.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                aria-label="Close image"
              >
                <X size={24} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>

              <img
                src={filteredItems[selectedImage].imageUrl}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-semibold text-lg">{filteredItems[selectedImage].title}</h3>
                <p className="text-gray-300">{filteredItems[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;