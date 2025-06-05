import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Meal Planning Made <span className="text-primary">Smarter</span>
            </h1>
            <h2 className="text-xl text-gray-600 mb-6 leading-relaxed">
              Your personalized health-focused meal guide.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              MacroMind builds clean, nutrient-rich meal plans tailored to your body's needs. 
              Get a daily breakdown of calories, protein, carbs, fats, and micro-benefits — all 
              designed for gut health, clearer skin, and energy.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
            <p className="text-gray-500 text-sm">
              Free 14-day trial, no credit card required.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
                alt="Healthy meal prep"
                className="rounded-xl shadow-xl object-cover w-full h-[400px] md:h-[500px]"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium">4,500+ Happy Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;