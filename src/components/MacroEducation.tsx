import React from 'react';
import { Dumbbell, Brain, Leaf, Apple, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface NutrientCardProps {
  icon: React.ReactNode;
  title: string;
  role: string;
  benefits: string[];
  ingredients: string[];
}

const NutrientCard: React.FC<NutrientCardProps> = ({ icon, title, role, benefits, ingredients }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-2 rounded-lg mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{role}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2 dark:text-white">Benefits:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span className="text-success mr-2">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2 dark:text-white">Key Sources:</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{ingredients.join(', ')}</p>
      </div>
    </motion.div>
  );
};

const MacroEducation: React.FC = () => {
  const nutrients = [
    {
      icon: <Dumbbell className="h-6 w-6 text-primary" />,
      title: "Protein",
      role: "Builds and repairs tissue, supports immune function",
      benefits: [
        "Boosts GH & muscle recovery",
        "Supports sleep",
        "Stable energy + mental focus"
      ],
      ingredients: ["Chicken", "Greek yogurt", "Eggs", "Tofu", "Lentils"]
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Healthy Fats",
      role: "Hormone production, brain & cell function",
      benefits: [
        "Brain power + memory",
        "Clears skin",
        "Supports GH + testosterone"
      ],
      ingredients: ["Avocado", "Olive oil", "Salmon", "Flax seeds", "Walnuts"]
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Carbohydrates",
      role: "Energy for brain + body",
      benefits: [
        "Fuels workouts",
        "Brain sharpness",
        "Feeds gut bacteria"
      ],
      ingredients: ["Oats", "Sweet potato", "Quinoa", "Brown rice", "Berries"]
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      title: "Fiber",
      role: "Gut health, satiety, digestion",
      benefits: [
        "Improves microbiome",
        "Detoxes skin",
        "Balances blood sugar"
      ],
      ingredients: ["Chia", "Flax", "Greens", "Lentils", "Berries"]
    }
  ];

  return (
    <section id="macro-education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Understanding Your Nutrients
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Learn how different nutrients work together to support your health goals.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {nutrients.map((nutrient, index) => (
            <NutrientCard key={index} {...nutrient} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MacroEducation;