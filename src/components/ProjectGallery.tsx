
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectGallery = () => {
  const projects = [
    {
      id: 1,
      title: "Residential Roof Replacement",
      location: "Provo, UT",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      category: "residential"
    },
    {
      id: 2,
      title: "Commercial Building Restoration",
      location: "Orem, UT",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop",
      category: "commercial"
    },
    {
      id: 3,
      title: "Emergency Storm Repair",
      location: "Spanish Fork, UT",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      category: "emergency"
    },
    {
      id: 4,
      title: "New Construction Roofing",
      location: "Lehi, UT",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop",
      category: "residential"
    },
    {
      id: 5,
      title: "Tile Roof Installation",
      location: "American Fork, UT",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      category: "residential"
    },
    {
      id: 6,
      title: "Industrial Roof Repair",
      location: "Pleasant Grove, UT",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop",
      category: "commercial"
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full transition-colors ${
            filter === 'all' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setFilter('residential')}
          className={`px-4 py-2 rounded-full transition-colors ${
            filter === 'residential' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Residential
        </button>
        <button
          onClick={() => setFilter('commercial')}
          className={`px-4 py-2 rounded-full transition-colors ${
            filter === 'commercial' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Commercial
        </button>
        <button
          onClick={() => setFilter('emergency')}
          className={`px-4 py-2 rounded-full transition-colors ${
            filter === 'emergency' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Emergency
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Card 
            key={project.id} 
            className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            style={{ 
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-300"></div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
