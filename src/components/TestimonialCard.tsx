
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const TestimonialCard = ({ name, location, rating, text }: TestimonialCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic leading-relaxed">
          "{text}"
        </p>
        <div className="border-t pt-4">
          <h4 className="font-bold text-black">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
