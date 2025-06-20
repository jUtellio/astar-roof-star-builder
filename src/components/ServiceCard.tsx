
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="h-full"
    >
      <Card className="group hover:shadow-2xl transition-all duration-500 border-gray-200 bg-white relative overflow-hidden h-full">
        <motion.div 
          className="absolute top-0 right-0 w-20 h-20 bg-red-600/10 rounded-bl-full"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <CardContent className="p-8 h-full flex flex-col">
          <div className="text-center mb-6">
            <motion.div 
              className="text-5xl mb-4"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
            >
              {icon}
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
          
          {features && (
            <div className="flex-grow mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-center">What's Included:</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-sm text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-auto pt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="w-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 shadow-lg"
              >
                Get Free Quote
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
