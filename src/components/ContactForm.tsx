
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    urgent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours for your free estimate.",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
      urgent: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.5)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardContent className="p-6">
          <motion.h3 
            className="text-2xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get Your Free Estimate
          </motion.h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div 
              className="grid md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div whileFocus={inputVariants.focus}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
              </motion.div>
              <motion.div whileFocus={inputVariants.focus}>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileFocus={inputVariants.focus}
            >
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </motion.div>
            
            <motion.select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <option value="">Select Service Needed</option>
              <option value="roof-replacement">Roof Replacement</option>
              <option value="roof-repair">Roof Repair</option>
              <option value="emergency-repair">Emergency Repair</option>
              <option value="inspection">Roof Inspection</option>
              <option value="commercial">Commercial Roofing</option>
              <option value="insurance-claim">Insurance Claim</option>
            </motion.select>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileFocus={inputVariants.focus}
            >
              <Textarea
                name="message"
                placeholder="Tell us about your roofing project..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <input
                type="checkbox"
                id="urgent"
                name="urgent"
                checked={formData.urgent}
                onChange={handleInputChange}
                className="rounded border-white/30"
              />
              <label htmlFor="urgent" className="text-white/90">
                This is an emergency/urgent situation
              </label>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit" 
                className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold py-3 text-lg"
              >
                Get Free Estimate Now
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
