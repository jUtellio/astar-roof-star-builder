
import { useState, useEffect } from 'react';
import { Star, Phone, Mail, MapPin, Shield, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ContactForm from '@/components/ContactForm';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ProjectGallery from '@/components/ProjectGallery';
import CounterAnimation from '@/components/CounterAnimation';

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Residential Roofing",
      description: "Complete roof installations and replacements for Utah County homes with premium materials and expert craftsmanship",
      icon: "🏠",
      features: ["Asphalt Shingles", "Metal Roofing", "Tile Installation", "25-Year Warranty"]
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency roofing services for urgent situations - we respond within 2 hours of your call",
      icon: "🚨",
      features: ["Storm Damage", "Leak Repairs", "24/7 Response", "Insurance Claims"]
    },
    {
      title: "Commercial Roofing",
      description: "Professional roofing solutions for commercial properties with minimal business disruption",
      icon: "🏢",
      features: ["Flat Roofs", "TPO Systems", "EPDM Installation", "Maintenance Plans"]
    },
    {
      title: "Insurance Claims",
      description: "Expert assistance with insurance claim processing - we handle the paperwork so you don't have to",
      icon: "📋",
      features: ["Claim Filing", "Adjuster Meetings", "Documentation", "Direct Billing"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Provo, UT",
      rating: 5,
      text: "A-Star completed our roof replacement perfectly. Professional, on-time, and excellent quality work!"
    },
    {
      name: "Mike Chen",
      location: "Orem, UT", 
      rating: 5,
      text: "Emergency repair service was outstanding. They responded within hours and fixed everything properly."
    },
    {
      name: "Lisa Martinez",
      location: "Spanish Fork, UT",
      rating: 5,
      text: "Best roofing company in Utah County! Fair pricing and incredible craftsmanship."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Header */}
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-black">A-Star Roofing</h1>
                <p className="text-sm text-gray-600">& Construction</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="tel:8018304557" className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors bg-white border-2 border-red-600 px-4 py-2 rounded-lg hover:bg-red-50 font-semibold">
                <Phone className="w-4 h-4" />
                <span>(801) 830-4557</span>
              </a>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Get Free Estimate
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Animated Hero Section */}
      <section className="relative bg-gradient-to-r from-black/80 to-red-600/80 text-white py-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')] bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-red-600/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              <span className="text-xl font-bold">4.9 Stars</span>
              <span className="text-lg">• 100+ Reviews</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Utah County's #1 Rated<br />
              <span className="text-red-400">Roofing Experts</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              Licensed, insured, and trusted by hundreds of homeowners across Utah County. 
              Get your free estimate today and join our family of satisfied customers.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                  Get Free Estimate Today
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="tel:8018304557">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 border-2 border-white px-8 py-4 text-lg font-semibold">
                    Call (801) 830-4557
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Trust Indicators */}
      <motion.section 
        className="py-12 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 100, suffix: "+", label: "Happy Customers" },
              { end: 15, suffix: "+", label: "Years Experience" },
              { end: 4.9, suffix: "", label: "Google Rating" },
              { end: 24, suffix: "/7", label: "Emergency Service" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={fadeUpVariants}
              >
                <CounterAnimation end={stat.end} suffix={stat.suffix} className="text-3xl font-bold text-red-600 mb-2" />
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Animated Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6"
              variants={scaleInVariants}
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-5xl font-bold text-black mb-6">
              Premium Roofing Services
              <span className="block text-2xl text-red-600 font-normal mt-2">
                Trusted by 100+ Utah County Families
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From emergency repairs to complete roof replacements, we deliver unmatched quality 
              and craftsmanship with every project. Your satisfaction is our guarantee.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>

          {/* Service Guarantee Section */}
          <motion.div 
            className="bg-black text-white rounded-2xl p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                The A-Star Guarantee
              </h3>
              <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={staggerContainer}
              >
                {[
                  { icon: Award, title: "Quality Materials", desc: "Only premium materials from trusted manufacturers" },
                  { icon: Clock, title: "On-Time Completion", desc: "Projects completed on schedule, every time" },
                  { icon: Shield, title: "25-Year Warranty", desc: "Comprehensive warranty on all workmanship" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center"
                    variants={fadeUpVariants}
                  >
                    <item.icon className="w-12 h-12 text-red-400 mb-4" />
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg mt-8">
                  Get Your Free Estimate
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Why Choose A-Star Section */}
      <motion.section 
        className="py-20 bg-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose A-Star Roofing?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Utah County's most trusted roofing contractor with unmatched quality and service
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed and insured for your protection" },
              { icon: MapPin, title: "Local Experts", desc: "Utah County roofing specialists since 2009" },
              { icon: Clock, title: "24/7 Emergency", desc: "Emergency repairs available around the clock" },
              { icon: Award, title: "Quality Guarantee", desc: "100% satisfaction guaranteed on all work" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeUpVariants}
                whileHover={{ y: -10 }}
              >
                <item.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Animated Project Gallery Section */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeUpVariants}
          >
            <h2 className="text-4xl font-bold text-black mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the quality craftsmanship that has earned us 100+ five-star reviews
            </p>
          </motion.div>
          <ProjectGallery />
        </div>
      </motion.section>

      {/* Animated Testimonials Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeUpVariants}
          >
            <h2 className="text-4xl font-bold text-black mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read reviews from satisfied customers across Utah County
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Animated Contact Section */}
      <motion.section 
        className="py-20 bg-red-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft}>
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-red-100">
                Get your free estimate today and join hundreds of satisfied customers across Utah County.
              </p>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                {[
                  { icon: Phone, text: "(801) 830-4557" },
                  { icon: Mail, text: "info@astarroofing.com" },
                  { icon: MapPin, text: "Serving all of Utah County" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    variants={fadeUpVariants}
                  >
                    <item.icon className="w-6 h-6 text-red-200" />
                    <span className="text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div variants={slideInRight}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Animated Footer */}
      <motion.footer 
        className="bg-black text-white py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="font-bold text-lg">A-Star Roofing & Construction</span>
              </div>
              <p className="text-gray-400">
                Utah County's premier roofing contractor with 100+ five-star reviews and 15+ years of experience.
              </p>
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Roofing</li>
                <li>Commercial Roofing</li>
                <li>Emergency Repairs</li>
                <li>Insurance Claims</li>
                <li>Roof Inspections</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Phone: (801) 830-4557</p>
                <p>Email: info@astarroofing.com</p>
                <p>Serving Utah County</p>
                <p>Licensed & Insured</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
            variants={fadeUpVariants}
          >
            <p>&copy; 2024 A-Star Roofing & Construction. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
