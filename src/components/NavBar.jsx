import React, { useState, useEffect } from "react";
import {
  Camera,
  Menu,
  Phone,
  Mail,
  Award,
  X,
  Home,
  User,
  BookOpen,
  Heart,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Target,
} from "lucide-react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      if (sidebarOpen) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 10,
          y: (e.clientY / window.innerHeight) * 10,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = [
    { id: "home", name: "Home", icon: Home, href: "#home" },
    { id: "about", name: "About", icon: User, href: "#about" },
    { id: "portfolio", name: "Portfolio", icon: BookOpen, href: "#portfolio" },

    {
      id: "testimonial",
      name: "Testimonial",
      icon: Heart,
      href: "#testimonial",
    },
    { id: "services", name: "Services", icon: Camera, href: "#services" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      target: "_blank",
      href: "https://www.instagram.com/eventswith.ji/?igsh=cmY2NWNsbDR2bGxp&utm_source=qr#",
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-500",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  ];

  const stats = [
    { number: "230+", label: "Weddings", icon: Heart },
    { number: "4.9★", label: "Rating", icon: Star },
    { number: "15+", label: "Awards", icon: Award },
  ];

  const handleNavClick = (item) => {
    setActiveSection(item.id);

    if (item.href.startsWith("#")) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setTimeout(() => {
      setSidebarOpen(false);
    }, 300);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "Services", href: "#services" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/10 backdrop-blur-xl border-b border-primary-600/50 shadow-xl shadow-primary-500/70"
            : "bg-white/70 backdrop-blur-lg border-b border-primary-100/30"
        }`}
      >
        <div className="mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Matching Hero Style */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  LoveShots
                </span>
                <span className="text-xs text-neutral-600 font-medium">
                  Wedding Photography
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on iPad and below */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-neutral-700 hover:text-primary-600 font-semibold text-base transition-all duration-300 group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* Desktop Contact & CTA - Hidden on iPad and below */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Award Badge - Matching Hero */}
              <div className="hidden xl:flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-primary-200/60 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-primary-600" />
                <span className="text-xs font-semibold text-neutral-700">
                  Award-Winning Photography
                </span>
              </div>

              {/* Contact Icons */}
              <div className="flex items-center space-x-6">
                <a
                  href="tel:+44 7709 925197"
                  className="w-8 h-8 bg-white/70 backdrop-blur-sm border border-neutral-200/50 rounded-xl flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:bg-white hover:border-primary-300 hover:shadow-lg transition-all duration-300 group"
                  title="Call us"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:loveshots.israa@gmail.com"
                  className="w-8 h-8 bg-white/70 backdrop-blur-sm border border-neutral-200/50 rounded-xl flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:bg-white hover:border-primary-300 hover:shadow-lg transition-all duration-300 group"
                  title="Email us"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <div className="w-px h-8 bg-neutral-200/60 mx-2" />

              {/* CTA Button - Matching Hero Gradient */}
              <button
                className="btn-primary flex items-center space-x-2"
                onClick={() => scrollToSection("services")}
              >
                Book Session
              </button>
            </div>

            {/* Mobile Hamburger Menu - Visible on iPad and below */}
            <div className="lg:hidden">
              <button
                onClick={() => setSidebarOpen(true)}
                className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-xl flex items-center justify-center text-neutral-700 hover:cursor-pointer hover:text-primary-600 hover:bg-white hover:border-primary-300 transition-all duration-300 hover:scale-105"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-br from-white/95 via-primary-50/90 to-secondary-50/85 backdrop-blur-xl border-l border-primary-200/50 shadow-2xl z-50 transform transition-transform duration-500 ease-out ${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute w-40 h-40 bg-gradient-to-br from-primary-300/20 to-secondary-300/15 rounded-full blur-3xl"
                style={{
                  transform: `translate(${mousePosition.x * 0.5}px, ${
                    mousePosition.y * 0.3
                  }px)`,
                  transition: "transform 0.6s ease-out",
                  right: "10%",
                  top: "20%",
                }}
              />
              <div
                className="absolute w-32 h-32 bg-gradient-to-br from-accent-300/15 to-primary-300/10 rounded-full blur-3xl"
                style={{
                  transform: `translate(${mousePosition.x * -0.3}px, ${
                    mousePosition.y * 0.4
                  }px)`,
                  transition: "transform 0.6s ease-out",
                  left: "15%",
                  bottom: "30%",
                }}
              />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-primary-200/30">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        LoveShots
                      </h2>
                      <p className="text-xs text-neutral-600">
                        Wedding Photography
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="w-10 h-10 bg-white/70 backdrop-blur-sm border border-neutral-200/50 rounded-xl flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:bg-white hover:border-primary-300 hover:cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-12">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mx-auto mb-1">
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xs font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-xs text-neutral-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex-1 px-6">
                <nav className="space-y-3">
                  {navigationItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item)}
                      className={`w-full flex items-center space-x-4 p-2 rounded-2xl font-semibold text-left hover:cursor-pointer transition-all duration-300 group ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30"
                          : "text-neutral-700 hover:bg-white/60 hover:shadow-md"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-white/20"
                            : "bg-neutral-100 group-hover:bg-primary-100"
                        }`}
                      >
                        <item.icon
                          className={`w-4 h-4 ${
                            activeSection === item.id
                              ? "text-white"
                              : "text-neutral-600 group-hover:text-primary-600"
                          }`}
                        />
                      </div>
                      <span className="text-base">{item.name}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Contact Information */}
              <div className="px-10 mt-2 border-t border-primary-200/30">
                <div className="bg-gradient-to-r from-primary-50/80 to-secondary-50/60 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-primary-200/30">
                  <h3 className="font-bold text-neutral-800 mb-2 text-sm">
                    Get In Touch
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+44 7709 925197"
                      className="flex items-center space-x-3 text-neutral-600 hover:text-primary-600 transition-colors text-xs"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+44 7709 925197</span>
                    </a>
                    <a
                      href="mailto:hello@loveshots.com"
                      className="flex items-center space-x-3 text-neutral-600 hover:text-primary-600 transition-colors text-xs"
                    >
                      <Mail className="w-4 h-4" />
                      <span>loveshots.israa@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-8 mb-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.target}
                      className={`w-6 h-6 bg-white/70 backdrop-blur-sm border border-neutral-200/50 rounded-xl flex items-center justify-center text-neutral-600 ${social.color} hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-110`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-4 w-2 h-2 bg-primary-400/60 rounded-full animate-pulse" />
            <div className="absolute bottom-32 left-6 w-1.5 h-1.5 bg-secondary-400/50 rounded-full animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-8 w-1 h-1 bg-accent-400/70 rounded-full animate-pulse delay-500" />
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
