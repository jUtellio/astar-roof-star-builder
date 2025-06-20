
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div>
      <motion.div 
        className="flex justify-center mb-8 space-x-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {[
          { key: 'all', label: 'All Projects' },
          { key: 'residential', label: 'Residential' },
          { key: 'commercial', label: 'Commercial' },
          { key: 'emergency', label: 'Emergency' }
        ].map((filterOption) => (
          <motion.button
            key={filterOption.key}
            onClick={() => setFilter(filterOption.key)}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === filterOption.key
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filterOption.label}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        key={filter} // Re-trigger animation when filter changes
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.location}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectGallery;
