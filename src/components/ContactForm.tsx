
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

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

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-6 text-white">Get Your Free Estimate</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </div>
            <div>
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </div>
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white"
          >
            <option value="">Select Service Needed</option>
            <option value="roof-replacement">Roof Replacement</option>
            <option value="roof-repair">Roof Repair</option>
            <option value="emergency-repair">Emergency Repair</option>
            <option value="inspection">Roof Inspection</option>
            <option value="commercial">Commercial Roofing</option>
            <option value="insurance-claim">Insurance Claim</option>
          </select>
          <Textarea
            name="message"
            placeholder="Tell us about your roofing project..."
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
          />
          <div className="flex items-center space-x-2">
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
          </div>
          <Button 
            type="submit" 
            className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold py-3 text-lg"
          >
            Get Free Estimate Now
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
