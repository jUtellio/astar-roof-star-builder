
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200">
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-black group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        <Button 
          variant="outline" 
          className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
