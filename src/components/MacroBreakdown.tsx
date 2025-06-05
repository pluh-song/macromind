import React from 'react';
import { Dumbbell, Zap, Brain, Flame, Check } from 'lucide-react';

const MacroBreakdown: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Understanding Your Macros
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every meal is carefully balanced for optimal nutrition and health benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center mb-4">
              <Dumbbell className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-semibold">Protein</h3>
            </div>
            <p className="text-gray-600">Builds lean muscle, supports skin and recovery</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-semibold">Carbs</h3>
            </div>
            <p className="text-gray-600">Fuel energy and support hormone balance</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-semibold">Fats</h3>
            </div>
            <p className="text-gray-600">Boost brain and skin function</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center mb-4">
              <Flame className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-semibold">Calories</h3>
            </div>
            <p className="text-gray-600">Total fuel your body uses</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center bg-success/10 text-success px-4 py-2 rounded-full">
            <Check className="h-5 w-5 mr-2" />
            <span>Gut-friendly</span>
          </div>
          <div className="flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Check className="h-5 w-5 mr-2" />
            <span>Skin-clearing</span>
          </div>
          <div className="flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full">
            <Check className="h-5 w-5 mr-2" />
            <span>Hormone-healthy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MacroBreakdown;