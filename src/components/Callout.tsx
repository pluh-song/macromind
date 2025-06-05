import React from 'react';
import { ArrowRight } from 'lucide-react';

const Callout: React.FC = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Built to make nutrition clear, simple, and smart — for people who care about more than just calories.
        </h2>
        <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center">
          Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Callout;