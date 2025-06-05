import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PersonalizationForm from './components/PersonalizationForm';
import SampleMeals from './components/SampleMeals';
import MacroEducation from './components/MacroEducation';
import Features from './components/Features';
import Callout from './components/Callout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PersonalizationForm />
        <SampleMeals />
        <MacroEducation />
        <Features />
        <Callout />
      </main>
      <Footer />
    </div>
  );
}

export default App;