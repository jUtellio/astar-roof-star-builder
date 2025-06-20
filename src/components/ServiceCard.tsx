
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-gray-200 bg-white relative overflow-hidden h-full">
      <div className="absolute top-0 right-0 w-20 h-20 bg-red-600/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      <CardContent className="p-8 h-full flex flex-col">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
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
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-auto pt-4">
          <Button 
            className="w-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg"
          >
            Get Free Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
