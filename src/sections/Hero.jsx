import React, { useState, useEffect } from "react";
import { Camera, Heart, Star, Award, Users } from "lucide-react";
import Button from "../components/Button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    "Capturing Love Stories",
    "Your Perfect Wedding Day",
    "Timeless Memories Forever",
    "Beautiful Wedding Moments",
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 30,
        y: (e.clientY / window.innerHeight) * 30,
      });
    };

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <section className="relative mx-auto">
      <div className="min-h-screen  bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50 relative overflow-hidden flex items-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 bg-gradient-to-br from-primary-400/30 to-secondary-400/25 rounded-full blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * 0.6}px, ${
                mousePosition.y * 0.4
              }px)`,
              transition: "transform 0.6s ease-out",
              left: "5%",
              top: "10%",
            }}
          />
          <div
            className="absolute w-80 h-80 bg-gradient-to-br from-accent-300/35 to-primary-300/20 rounded-full blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * -0.4}px, ${
                mousePosition.y * -0.5
              }px)`,
              transition: "transform 0.6s ease-out",
              right: "10%",
              top: "25%",
            }}
          />
          <div
            className="absolute w-72 h-72 bg-gradient-to-br from-secondary-400/25 to-accent-300/15 rounded-full blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${
                mousePosition.y * 0.6
              }px)`,
              transition: "transform 0.6s ease-out",
              left: "60%",
              bottom: "15%",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-6 sm:px-8 lg:px-12 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
            {/* Left Side */}
            <div className="flex flex-col justify-between h-full text-center lg:text-left space-y-8">
              <div>
                {/* Heading */}
                <div
                  className={`transition-all duration-1000 delay-200 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6">
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block my-25 mb-4">
                      Wedding
                    </span>
                    <span className="text-neutral-800">Photography</span>
                  </h1>

                  {/* Subtitle */}
                  <div className="h-16 flex items-center justify-center lg:justify-start">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-600 transition-all duration-500">
                      {rotatingTexts[currentText]}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div
                  className={`transition-all duration-1000 delay-400 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                    Professional wedding photography that captures every
                    precious moment of your special day. From intimate
                    ceremonies to grand celebrations, we create timeless
                    memories you'll treasure forever.
                  </p>
                </div>

                {/* CTA */}
                <Button />
              </div>

              {/* Stats at bottom */}
              <div
                className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-800 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    230+
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    Weddings Shot
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
                    4.9★
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    Average Rating
                  </div>
                </div>
                <div className="text-center lg:text-left mb-10">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                    4+
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div
              className={`relative transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/15 rounded-3xl transform rotate-6 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/15 to-primary-500/10 rounded-3xl transform -rotate-3 scale-110" />

                <div className="relative bg-white/90 backdrop-blur-sm border border-neutral-200/50 rounded-3xl p-8 shadow-2xl mb-20">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg ">
                      <Camera className="w-12 h-12 text-white hover:scale-125 transition-transform" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-neutral-800">
                        Latest Work
                      </h3>
                      <p className="text-neutral-600">
                        Sarah & Michael's Wedding
                      </p>
                      <div className="flex justify-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4">
                      <p className="text-sm text-neutral-700 italic">
                        "Absolutely stunning photos! Every moment was captured
                        perfectly."
                      </p>
                    </div>
                  </div>

                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full shadow-lg animate-bounce flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white fill-current" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full shadow-md animate-pulse flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
