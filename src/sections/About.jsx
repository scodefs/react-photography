import React, { useState, useEffect, useRef } from "react";
import {
  Camera,
  Heart,
  Award,
  Star,
  MapPin,
  Coffee,
  Music,
  Palette,
  Users,
  Clock,
  Sparkles,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

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

  const skills = [
    { name: "Wedding Photography", level: 97, icon: Camera },
    { name: "Portrait Photography", level: 93, icon: Users },
    { name: "Photo Editing", level: 92, icon: Palette },
    { name: "Client Relations", level: 96, icon: Heart },
  ];

  const interests = [
    {
      name: "Travel Photography",
      icon: MapPin,
      description: "Capturing moments around the world",
    },
    {
      name: "Coffee Culture",
      icon: Coffee,
      description: "Finding the perfect shot in cafes",
    },
    {
      name: "Music & Arts",
      icon: Music,
      description: "Drawing inspiration from creativity",
    },
    {
      name: "Nature Walks",
      icon: Sparkles,
      description: "Connecting with natural beauty",
    },
  ];

  const achievements = [
    { number: "230+", label: "Weddings Captured", icon: Heart },
    { number: "4.9★", label: "Client Rating", icon: Star },
    { number: "4+", label: "Years Experience", icon: Clock },
    { number: "12+", label: "Awards Won", icon: Award },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 lg:py-32 bg-gradient-to-br from-white via-neutral-50 to-primary-50/30 relative overflow-hidden"
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
            right: "10%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-br from-secondary-300/15 to-accent-200/10 rounded-full blur-3xl"
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
              Meet Your Photographer
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              About
            </span>
            <span className="text-neutral-800"> Israa</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Passionate wedding photographer dedicated to capturing the authentic
            emotions and timeless moments of your special day
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Left Side - Photo & Info */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Background Decorations */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/5 rounded-3xl transform rotate-3 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/8 to-primary-500/5 rounded-3xl transform -rotate-2 scale-110" />

              {/* Main Photo Container */}
              <div className="relative bg-white/90 backdrop-blur-sm border border-neutral-200/50 rounded-3xl p-8 shadow-2xl">
                {/* Profile Photo Placeholder */}
                <div className="w-64 h-80 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-2xl mx-auto mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl text-neutral-400">👩‍💼</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-2xl" />
                </div>

                {/* Quick Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-neutral-800">
                    Israa El Mousa
                  </h3>
                  <p className="text-primary-600 font-semibold">
                    Wedding Photographer
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-neutral-600">
                    <MapPin className="w-6 h-6 text-primary-600 " />
                    <span className="text-sm">Based in London, UK</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full shadow-lg animate-bounce flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full shadow-md animate-pulse flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Story & Details */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Personal Story */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-neutral-800">My Story</h3>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  With over 4 years of experience in wedding photography, I've
                  had the privilege of documenting love stories across London's
                  most beautiful venues. My journey began with a simple love for
                  capturing genuine emotions and has evolved into a passion for
                  creating timeless visual narratives.
                </p>
                <p>
                  I believe that every couple has a unique story to tell, and my
                  role is to capture those authentic moments that you'll
                  treasure for a lifetime. From the quiet anticipation of
                  getting ready to the joyous celebration on the dance floor,
                  I'm there to document it all.
                </p>
                <p>
                  When I'm not behind the camera, you'll find me exploring new
                  coffee shops, traveling to discover new locations, or
                  immersing myself in art and music for creative inspiration.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-primary-50/80 to-secondary-50/60 backdrop-blur-sm rounded-2xl p-6 border border-primary-200/30">
              <h4 className="text-xl font-bold text-neutral-800 mb-3">
                My Photography Philosophy
              </h4>
              <p className="text-neutral-700 italic">
                "I believe in capturing moments, not just poses. Every wedding
                tells a story of love, and my mission is to preserve those
                genuine emotions and fleeting moments that make your day
                uniquely yours."
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold text-center text-neutral-800 mb-12">
            Professional Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/70 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-800">
                      {skill.name}
                    </h4>
                    <div className="text-sm text-neutral-600">
                      {skill.level}% Proficiency
                    </div>
                  </div>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-1000 delay-1000"
                    style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div
          className={`text-center transition-all duration-1000 delay-1100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold text-neutral-800 mb-12">
            Achievements & Recognition
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="bg-white/70 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-neutral-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
