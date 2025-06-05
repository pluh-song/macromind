import React from 'react';
import { Scale, Tag, Apple, Target } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Scale className="h-6 w-6 text-primary" />,
      title: "Custom Macro Breakdown",
      description: "View calories, protein, carbs, and fats for each meal."
    },
    {
      icon: <Tag className="h-6 w-6 text-primary" />,
      title: "Smart Health Tags",
      description: "Benefits shown for skin, gut, energy, and hormones."
    },
    {
      icon: <Apple className="h-6 w-6 text-primary" />,
      title: "Clean Ingredient Focus",
      description: "All meals made from real, whole foods."
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Goal-Based Planning",
      description: "Tailor meals for lean muscle, clear skin, or fat loss."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Smart features for better nutrition
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how MacroMind makes nutrition simple and personalized for your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;