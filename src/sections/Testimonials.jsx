import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  Heart,
  Quote,
  Camera,
  MapPin,
  Calendar,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael",
      wedding: "Garden Wedding",
      location: "Napa Valley, CA",
      date: "June 2024",
      rating: 5,
      text: "Israa captured every magical moment of our special day with such artistry and grace. The photos exceeded our wildest dreams! Her ability to capture genuine emotions and candid moments is truly exceptional. We couldn't be happier with our wedding photos.",
      highlight: "Exceeded our wildest dreams",
      service: "Full Day Wedding Package",
      avatar: "👰🏻",
    },
    {
      id: 2,
      name: "Emma & James",
      wedding: "Beach Ceremony",
      location: "Monterey Bay, CA",
      date: "August 2024",
      rating: 5,
      text: "The sunset photos by the ocean are absolutely breathtaking. Israa has an incredible eye for natural beauty and timing. She made us feel so comfortable throughout the entire day, and the results speak for themselves. Pure perfection!",
      highlight: "Absolutely breathtaking",
      service: "Beach Wedding Package",
      avatar: "👰🏼",
    },
    {
      id: 3,
      name: "Olivia & David",
      wedding: "Vineyard Celebration",
      location: "Sonoma County, CA",
      date: "September 2024",
      rating: 5,
      text: "Every single photo tells our love story beautifully. Israa's attention to detail and creative vision transformed our vineyard wedding into a work of art. We're beyond grateful for these memories that will last a lifetime.",
      highlight: "Tells our love story beautifully",
      service: "Vineyard Wedding Package",
      avatar: "👰🏽",
    },
    {
      id: 4,
      name: "Sophia & Ryan",
      wedding: "City Wedding",
      location: "San Francisco, CA",
      date: "October 2024",
      rating: 5,
      text: "Israa's artistic eye captured the urban romance we envisioned perfectly. The way she used the city's architecture and lighting created stunning, magazine-worthy shots. Professional, creative, and absolutely wonderful to work with.",
      highlight: "Captured urban romance perfectly",
      service: "Urban Wedding Package",
      avatar: "👰🏻",
    },
    {
      id: 5,
      name: "Isabella & Marcus",
      wedding: "Forest Wedding",
      location: "Redwood National Park, CA",
      date: "May 2024",
      rating: 5,
      text: "The forest setting created such a fairytale atmosphere in our photos. Israa's ability to work with natural lighting and capture the magic of the redwoods was incredible. These photos are pure art!",
      highlight: "Fairytale atmosphere",
      service: "Outdoor Wedding Package",
      avatar: "👰🏾",
    },
    {
      id: 6,
      name: "Grace & Alexander",
      wedding: "Manor Wedding",
      location: "Historic Manor, Napa",
      date: "November 2024",
      rating: 5,
      text: "Every detail was captured with such artistry and attention. Israa understood our vision for a classic, elegant celebration and delivered beyond our expectations. The photos are timeless and absolutely perfect.",
      highlight: "Artistry and attention to detail",
      service: "Classic Wedding Package",
      avatar: "👰🏼",
    },
  ];

  const stats = [
    {
      icon: Heart,
      number: "200+",
      label: "Happy Couples",
    },
    {
      icon: Star,
      number: "5.0",
      label: "Average Rating",
    },
    {
      icon: Award,
      number: "50+",
      label: "Awards Won",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Guests Captured",
    },
  ];

  const reviewHighlights = [
    {
      category: "Photography Quality",
      rating: "5.0",
      count: "200+",
      icon: Camera,
      color: "from-primary-500 to-secondary-500",
    },
    {
      category: "Professionalism",
      rating: "5.0",
      count: "200+",
      icon: Award,
      color: "from-secondary-500 to-accent-500",
    },
    {
      category: "Communication",
      rating: "5.0",
      count: "200+",
      icon: Users,
      color: "from-accent-500 to-primary-500",
    },
    {
      category: "Value for Money",
      rating: "5.0",
      count: "200+",
      icon: Star,
      color: "from-primary-500 to-accent-500",
    },
  ];

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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="testimonial"
      className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 via-primary-50/40 to-secondary-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-primary-200/20 to-secondary-200/15 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${
              mousePosition.y * 0.2
            }px)`,
            transition: "transform 0.8s ease-out",
            right: "5%",
            top: "15%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-br from-accent-300/15 to-primary-200/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${
              mousePosition.y * -0.3
            }px)`,
            transition: "transform 0.8s ease-out",
            left: "10%",
            bottom: "20%",
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
            <Heart className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-neutral-700">
              Client Love Stories
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              What Couples
            </span>
            <span className="text-neutral-800"> Say</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the amazing couples who trusted me to capture their most
            precious moments
          </p>
        </div>

        {/* All Testimonials Grid */}
        <div
          className={`mb-20 transition-all duration-1000 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold text-center text-neutral-800 mb-12">
            All Client Reviews
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group bg-white/70 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setCurrentTestimonial(index)}
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/15 rounded-xl flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-primary-600" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-neutral-700 mb-6 line-clamp-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-lg shadow-md">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-neutral-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {testimonial.wedding}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 rounded-2xl transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
