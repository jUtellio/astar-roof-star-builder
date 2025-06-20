
import { useState, useEffect } from 'react';
import { Star, Phone, Mail, MapPin, Shield, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ProjectGallery from '@/components/ProjectGallery';
import CounterAnimation from '@/components/CounterAnimation';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Residential Roofing",
      description: "Complete roof installations and replacements for Utah County homes",
      icon: "🏠"
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency roofing services for urgent situations",
      icon: "🚨"
    },
    {
      title: "Commercial Roofing",
      description: "Professional roofing solutions for commercial properties",
      icon: "🏢"
    },
    {
      title: "Insurance Claims",
      description: "Expert assistance with insurance claim processing",
      icon: "📋"
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
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-black">A-Star Roofing</h1>
                <p className="text-sm text-gray-600">& Construction</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:8018304557" className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(801) 830-4557</span>
              </a>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Get Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black/80 to-red-600/80 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-red-600/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-xl font-bold">4.9 Stars</span>
              <span className="text-lg">• 100+ Reviews</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Utah County's #1 Rated<br />
              <span className="text-red-400">Roofing Experts</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Licensed, insured, and trusted by hundreds of homeowners across Utah County. 
              Get your free estimate today and join our family of satisfied customers.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                Get Free Estimate Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                Call (801) 830-4557
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CounterAnimation end={100} suffix="+" className="text-3xl font-bold text-red-600 mb-2" />
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <CounterAnimation end={15} suffix="+" className="text-3xl font-bold text-red-600 mb-2" />
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-red-600 mb-2">4.9</div>
              <p className="text-gray-600">Google Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <p className="text-gray-600">Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Roofing Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive roofing solutions for residential and commercial properties throughout Utah County
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose A-Star Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose A-Star Roofing?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Utah County's most trusted roofing contractor with unmatched quality and service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-300">Fully licensed and insured for your protection</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Local Experts</h3>
              <p className="text-gray-300">Utah County roofing specialists since 2009</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Emergency</h3>
              <p className="text-gray-300">Emergency repairs available around the clock</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
              <p className="text-gray-300">100% satisfaction guaranteed on all work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the quality craftsmanship that has earned us 100+ five-star reviews
            </p>
          </div>
          <ProjectGallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read reviews from satisfied customers across Utah County
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-red-100">
                Get your free estimate today and join hundreds of satisfied customers across Utah County.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-red-200" />
                  <span className="text-lg">(801) 830-4557</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-red-200" />
                  <span className="text-lg">info@astarroofing.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-red-200" />
                  <span className="text-lg">Serving all of Utah County</span>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="font-bold text-lg">A-Star Roofing & Construction</span>
              </div>
              <p className="text-gray-400">
                Utah County's premier roofing contractor with 100+ five-star reviews and 15+ years of experience.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Roofing</li>
                <li>Commercial Roofing</li>
                <li>Emergency Repairs</li>
                <li>Insurance Claims</li>
                <li>Roof Inspections</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Phone: (801) 830-4557</p>
                <p>Email: info@astarroofing.com</p>
                <p>Serving Utah County</p>
                <p>Licensed & Insured</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 A-Star Roofing & Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
