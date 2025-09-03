import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Mail } from "lucide-react";

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = ["View Portfolio", "Explore Work", "See Projects"];

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
  }, [rotatingTexts.length]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
    >
      <button
        className="group btn-primary"
        onClick={() => scrollToSection("portfolio")}
      >
        <Camera />
        <span>{rotatingTexts[currentText]}</span>
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>

      <button
        className="group btn-secondary"
        onClick={() => scrollToSection("services")}
      >
        <Mail className="text-primary-400 group-hover:text-primary-500 transition-transform" />
        <span> Book Session</span>
      </button>
    </motion.div>
  );
};

export default Button;
