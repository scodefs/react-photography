import React, { useState, useEffect, useRef } from "react";
import {
  Camera,
  Heart,
  MapPin,
  Calendar,
  Award,
  Users,
  Star,
  Eye,
  ArrowRight,
  Filter,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliderPlaying, setIsSliderPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const sliderIntervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Auto-slider effect
  useEffect(() => {
    if (selectedProject && selectedProject.images && isSliderPlaying) {
      sliderIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
    }

    return () => {
      if (sliderIntervalRef.current) {
        clearInterval(sliderIntervalRef.current);
      }
    };
  }, [selectedProject, isSliderPlaying]);

  const toggleSlider = () => {
    setIsSliderPlaying(!isSliderPlaying);
  };

  const goToNextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex(
        currentImageIndex === selectedProject.images.length - 1 
          ? 0 
          : currentImageIndex + 1
      );
    }
  };

  const goToPrevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex(
        currentImageIndex === 0 
          ? selectedProject.images.length - 1 
          : currentImageIndex - 1
      );
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const portfolioProjects = [
    {
      id: 5,
      title: "Sandy & Henry Garden Wedding",
      category: "outdoor",
      location: "Botanical Gardens, London",
      date: "July 2024",
      guests: 120,
      rating: 5,
      description:
        "Romantic garden celebration with lush greenery, blooming flowers, and intimate outdoor ceremony.",
      testimonial:
        "The garden setting was captured so beautifully! Every photo feels like a fairytale.",
      tags: ["Garden", "Romantic", "Flowers"],
      featured: false,
      imageColor: "from-emerald-400/20 to-green-300/15",
      images: [
        "/images/sandy-img1.JPG",
        "/images/sandy-img2.JPG", 
        "/images/sandy-img3.JPG",
        "/images/sandy-img4.JPG",
        "/images/sandy-img5.JPG"
      ],
    },
  ];

  const filterCategories = [
    { id: "all", name: "All Weddings", count: portfolioProjects.length },
    {
      id: "outdoor",
      name: "Outdoor",
      count: portfolioProjects.filter((p) => p.category === "outdoor").length,
    },
    {
      id: "beach",
      name: "Beach",
      count: portfolioProjects.filter((p) => p.category === "beach").length,
    },
    {
      id: "vineyard",
      name: "Vineyard",
      count: portfolioProjects.filter((p) => p.category === "vineyard").length,
    },
    {
      id: "urban",
      name: "Urban",
      count: portfolioProjects.filter((p) => p.category === "urban").length,
    },
    {
      id: "indoor",
      name: "Indoor",
      count: portfolioProjects.filter((p) => p.category === "indoor").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeFilter
        );

  const featuredProjects = portfolioProjects.filter(
    (project) => project.featured
  );

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-20 lg:py-32 bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-primary-200/15 to-secondary-200/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.4}px, ${
              mousePosition.y * 0.3
            }px)`,
            transition: "transform 0.8s ease-out",
            left: "5%",
            top: "10%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-br from-accent-300/12 to-primary-200/8 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${
              mousePosition.y * -0.4
            }px)`,
            transition: "transform 0.8s ease-out",
            right: "10%",
            bottom: "15%",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-primary-200/60 rounded-full px-6 py-3 mb-8">
            <Camera className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-neutral-700">
              Wedding Portfolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Recent
            </span>
            <span className="text-neutral-800"> Work</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Explore a collection of beautiful wedding celebrations I've had the
            honor to capture across California
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-sm hover:cursor-pointer transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30"
                  : "bg-white/70 backdrop-blur-sm border border-neutral-200/50 text-neutral-700 hover:bg-white hover:shadow-md"
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{category.name}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === category.id
                    ? "bg-white/20"
                    : "bg-primary-100 text-primary-700"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-neutral-800">
              {activeFilter === "all"
                ? "All Weddings"
                : `${
                    filterCategories.find((c) => c.id === activeFilter)?.name
                  } Weddings`}
            </h3>
            <span className="text-neutral-600">
              {filteredProjects.length} projects
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/70 backdrop-blur-sm border border-neutral-200/40 rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.imageColor} relative overflow-hidden flex items-center justify-center`}
                >
                  {project.images ? (
                    <div className="relative w-full h-full group">
                      <img
                        src={project.images[currentImageIndex % project.images.length]}
                        alt={`${project.title} - Photo ${(currentImageIndex % project.images.length) + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      
                      {/* Slider Controls */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300">
                        {/* Navigation Arrows */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(
                              currentImageIndex === 0 
                                ? project.images.length - 1 
                                : currentImageIndex - 1
                            );
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-primary-600 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(
                              currentImageIndex === project.images.length - 1 
                                ? 0 
                                : currentImageIndex + 1
                            );
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-primary-600 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        
                        {/* Image Counter */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {/* Image Counter */}
                          <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
                            {currentImageIndex + 1} / {project.images.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-3xl">📷</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-bold text-neutral-800">
                          {project.date}
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <ArrowRight className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-3">
                  <h4 className="font-bold text-lg text-neutral-800 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {project.title}
                  </h4>

                  <p className="text-sm text-neutral-600 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1 text-xs text-neutral-500">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-neutral-500">
                      <Users className="w-3 h-3" />
                      <span>{project.guests}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-primary-50/80 to-secondary-50/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-primary-200/30">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-neutral-800 mb-4">
              Ready to Create Your Story?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Let's capture the magic of your special day with the same care and
              artistry shown in these celebrations.
            </p>
            <button
              className="btn-primary inline-flex items-center space-x-3"
              onClick={() => scrollToSection("services")}
            >
              <Camera className="w-6 h-6" />
              <span>Book Your Wedding</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal Preview */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => {
            setSelectedProject(null);
            setCurrentImageIndex(0);
            setIsSliderPlaying(true);
          }}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-neutral-800">
                {selectedProject.title}
              </h3>
              
              {/* Image Gallery */}
              {selectedProject.images ? (
                <div className="relative">
                  <div className="h-64 rounded-2xl overflow-hidden bg-neutral-100 relative">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Photo ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    
                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"
                        style={{ 
                          width: `${((currentImageIndex + 1) / selectedProject.images.length) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToPrevImage();
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-primary-600 hover:bg-white hover:cursor-pointer transition-all duration-300 shadow-lg"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToNextImage();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-700 hover:text-primary-600 hover:bg-white hover:cursor-pointer transition-all duration-300 shadow-lg"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div
                  className={`h-64 bg-gradient-to-br ${selectedProject.imageColor} rounded-2xl flex items-center justify-center`}
                >
                  <div className="text-6xl">📸</div>
                </div>
              )}
              
              <p className="text-neutral-600">{selectedProject.description}</p>
              <div className="bg-primary-50 rounded-xl p-4">
                <p className="text-sm italic text-neutral-700">
                  "{selectedProject.testimonial}"
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setCurrentImageIndex(0);
                }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:cursor-pointer transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;