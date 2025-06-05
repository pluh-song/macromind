import React from 'react';
import { Leaf, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface MealCardProps {
  image: string;
  title: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  benefits: string[];
  type: 'bulk' | 'cut' | 'snack';
}

const MealCard: React.FC<MealCardProps> = ({ image, title, calories, protein, carbs, fat, benefits, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm ${
            type === 'bulk' ? 'bg-blue-100 text-blue-800' :
            type === 'cut' ? 'bg-green-100 text-green-800' :
            'bg-purple-100 text-purple-800'
          }`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Calories</p>
            <p className="font-semibold dark:text-white">{calories}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Protein</p>
            <p className="font-semibold dark:text-white">{protein}g</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Carbs</p>
            <p className="font-semibold dark:text-white">{carbs}g</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Fat</p>
            <p className="font-semibold dark:text-white">{fat}g</p>
          </div>
        </div>
        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span className="text-success mr-2">✓</span>
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SampleMeals: React.FC = () => {
  const meals = [
    {
      image: "https://images.pexels.com/photos/2122278/pexels-photo-2122278.jpeg",
      title: "High-Protein Bulking Bowl",
      calories: 850,
      protein: 65,
      carbs: 80,
      fat: 30,
      benefits: [
        "Muscle growth support",
        "High-quality protein sources",
        "Complex carbs for energy"
      ],
      type: 'bulk' as const
    },
    {
      image: "https://images.pexels.com/photos/1546113/pexels-photo-1546113.jpeg",
      title: "Lean Cutting Plate",
      calories: 450,
      protein: 45,
      carbs: 35,
      fat: 15,
      benefits: [
        "Low-calorie, high protein",
        "Thermogenic ingredients",
        "Rich in fiber"
      ],
      type: 'cut' as const
    },
    {
      image: "https://images.pexels.com/photos/8472878/pexels-photo-8472878.jpeg",
      title: "Protein Energy Balls",
      calories: 250,
      protein: 15,
      carbs: 25,
      fat: 12,
      benefits: [
        "Perfect pre-workout",
        "Sustained energy release",
        "Healthy fats"
      ],
      type: 'snack' as const
    }
  ];

  return (
    <section id="sample-meals" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Sample Meal Plans
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Customized meals for your specific goals, whether you're bulking, cutting, or need healthy snacks.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal, index) => (
            <MealCard key={index} {...meal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleMeals;