import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Camera,
  Crown,
  Star,
  Heart,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    weddingDate: "",
    venue: "",
    guestCount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 15,
        y: (e.clientY / window.innerHeight) * 15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      id: "consultation",
      name: "Free Consultation",
      duration: "30 min",
      price: "Free",
      icon: MessageSquare,
    },
    {
      id: "engagement",
      name: "Engagement Session",
      duration: "2 hours",
      price: "£250",
      icon: Heart,
    },
    {
      id: "wedding-basic",
      name: "Basic Wedding Package",
      duration: "6 hours",
      price: "£480",
      icon: Camera,
    },
    {
      id: "wedding-pro",
      name: "Pro Wedding Package",
      duration: "8 hours",
      price: "£960",
      icon: Star,
    },
    {
      id: "wedding-exclusive",
      name: "Exclusive Collection",
      duration: "Full Day",
      price: "£1600",
      icon: Crown,
    },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Validate required fields
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !selectedService
      ) {
        throw new Error("Please fill in all required fields");
      }

      setSubmitStatus("success");

      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          weddingDate: "",
          venue: "",
          guestCount: "",
          message: "",
        });
        setSelectedService("");
        setSelectedDate("");
        setSelectedTime("");
        setSubmitStatus("");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Tomorrow
    return today.toISOString().split("T")[0];
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 lg:py-32 bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-80 h-80 bg-gradient-to-br from-primary-200/15 to-secondary-200/10 rounded-full blur-3xl"
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
          className="absolute w-60 h-60 bg-gradient-to-br from-accent-200/10 to-primary-200/8 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${
              mousePosition.y * -0.3
            }px)`,
            transition: "transform 0.8s ease-out",
            left: "15%",
            bottom: "25%",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-primary-200/60 rounded-full px-6 py-3 mb-8">
            <Calendar className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-neutral-700">
              Book Your Session
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Let's Create
            </span>
            <span className="text-neutral-800"> Magic</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Ready to capture your love story? Book a consultation or choose your
            wedding photography package.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Selection */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-neutral-800 mb-8">
              Choose Your Service
            </h3>

            <div className="space-y-4 mb-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedService === service.id
                      ? "border-primary-300 bg-gradient-to-r from-primary-50/80 to-secondary-50/60 shadow-lg"
                      : "border-neutral-200 bg-white/60 hover:border-primary-200 hover:bg-white/80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          selectedService === service.id
                            ? "bg-gradient-to-br from-primary-500 to-secondary-500"
                            : "bg-neutral-200"
                        }`}
                      >
                        <service.icon
                          className={`w-6 h-6 ${
                            selectedService === service.id
                              ? "text-white"
                              : "text-neutral-600"
                          }`}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-800">
                          {service.name}
                        </h4>
                        <p className="text-sm text-neutral-600">
                          {service.duration}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        {service.price}
                      </p>
                      <button className="mt-2 px-3 py-1 text-xs font-medium text-primary-600 border border-primary-200 rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-all duration-200">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Date & Time Selection */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-3">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={getMinDate()}
                  className="w-full px-4 py-3 bg-white/80 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-3">
                  Preferred Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 bg-white/80 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                >
                  <option value="">Select time...</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                Your Information
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      placeholder="+44 123 456 7890"
                    />
                  </div>
                </div>

                {/* Wedding Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      name="weddingDate"
                      value={formData.weddingDate}
                      onChange={handleInputChange}
                      min={getMinDate()}
                      className="w-full px-4 py-3 bg-white/80 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Guest Count
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    >
                      <option value="">Select...</option>
                      <option value="1-50">1-50 guests</option>
                      <option value="51-100">51-100 guests</option>
                      <option value="101-150">101-150 guests</option>
                      <option value="151-200">151-200 guests</option>
                      <option value="200+">200+ guests</option>
                    </select>
                  </div>
                </div>

                {/* Venue */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Wedding Venue
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/80 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    placeholder="Venue name or location"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-white/80 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your vision for your special day..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedService}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></div>
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Book Now</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">
                      Booking request sent successfully! We'll contact you
                      within 24 hours.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">
                      Please fill in all required fields and try again.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
