import React, { useState } from 'react';
import { ArrowRight, Activity, Scale, Clock, DollarSign, Utensils, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  // Basic Info
  feet: string;
  inches: string;
  weight: string;
  age: string;
  gender: string;
  activityLevel: string;
  goals: string[];
  
  // Dietary Preferences
  dietaryPreference: string;
  cuisines: string[];
  prepTime: string;
  allergies: string[];
  budget: string;
  mealFrequency: string;
  prepStyle: string;
  favoriteIngredients: string[];
  avoidIngredients: string[];
  
  // Plan Preferences
  planType: string;
  includeGroceryList: boolean;
  trackMacros: boolean;
  
  // Other Fields
  otherPreference: string;
  otherCuisine: string;
  otherAllergies: string;
  customMeals: string;
}

const PersonalizationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    feet: '',
    inches: '',
    weight: '',
    age: '',
    gender: '',
    activityLevel: '',
    goals: [],
    dietaryPreference: '',
    cuisines: [],
    prepTime: '',
    allergies: [],
    budget: '',
    mealFrequency: '',
    prepStyle: '',
    favoriteIngredients: [],
    avoidIngredients: [],
    planType: '',
    includeGroceryList: true,
    trackMacros: true,
    otherPreference: '',
    otherCuisine: '',
    otherAllergies: '',
    customMeals: ''
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const goals = [
    'Build Muscle',
    'Lose Fat',
    'Clear Skin',
    'Balanced Energy',
    'Improve Sleep',
    'Better Digestion'
  ];

  const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];
  const activityLevels = ['Sedentary', 'Light Activity', 'Moderate Activity', 'Intense Activity'];
  const cuisineOptions = ['Italian', 'Asian', 'Mediterranean', 'Mexican', 'American', 'Indian', 'Other'];
  const prepTimeOptions = ['5-10 minutes', '15-30 minutes', '30+ minutes'];
  const allergyOptions = ['Gluten', 'Dairy', 'Nuts', 'Soy', 'Eggs', 'Shellfish', 'Other'];
  const budgetOptions = ['Low-cost', 'Moderate', 'Gourmet'];
  const mealFrequencyOptions = ['3 meals + 2 snacks', '3 meals only', '6 small meals', 'Custom'];
  const prepStyleOptions = ['Meal prep (cooking in bulk)', 'Cooking fresh daily', 'Mix of both'];
  const dietaryPreferences = ['Vegetarian', 'Vegan', 'Pescatarian', 'Omnivore', 'Other'];
  const planTypes = ['Bulk', 'Cut', 'Maintain'];

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: Array.isArray(prev[field])
        ? (prev[field] as string[]).includes(value)
          ? (prev[field] as string[]).filter(item => item !== value)
          : [...(prev[field] as string[]), value]
        : [value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const stepIcons = {
    1: <Scale className="w-6 h-6" />,
    2: <Utensils className="w-6 h-6" />,
    3: <Activity className="w-6 h-6" />,
    4: <Calendar className="w-6 h-6" />
  };

  const stepTitles = {
    1: 'Basic Information',
    2: 'Dietary Preferences',
    3: 'Meal Planning',
    4: 'Plan Customization'
  };

  if (submitted) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Your Personalized Plan is Ready!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We've created a custom meal plan based on your preferences and goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Plan Overview
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Plan Type</p>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {formData.planType || 'Custom'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Meal Frequency</p>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {formData.mealFrequency}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Cuisine Focus</p>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {formData.cuisines.join(', ')}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Prep Style</p>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {formData.prepStyle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="text-success mr-2">✓</span>
                      Personalized meal plan with macro breakdown
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="text-success mr-2">✓</span>
                      Weekly grocery list
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="text-success mr-2">✓</span>
                      Prep-ahead instructions
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="text-success mr-2">✓</span>
                      Alternative recipes and substitutions
                    </li>
                    {formData.trackMacros && (
                      <li className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="text-success mr-2">✓</span>
                        Daily macro tracking dashboard
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center"
                    onClick={() => window.print()}
                  >
                    Download Plan
                  </button>
                  <button
                    className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                    onClick={() => setSubmitted(false)}
                  >
                    Create Another Plan
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="personalization" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 mb-6 text-center"
          >
            Create Your Personalized Meal Plan
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`flex items-center ${
                      step === currentStep ? 'text-primary' : 'text-gray-400'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step <= currentStep ? 'bg-primary text-white' : 'bg-gray-200'
                      }`}
                    >
                      {stepIcons[step as keyof typeof stepIcons]}
                    </div>
                    <span className="ml-2 text-sm font-medium hidden md:block">
                      {stepTitles[step as keyof typeof stepTitles]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Height (feet)
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="8"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.feet}
                            onChange={(e) => handleInputChange('feet', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Height (inches)
                          </label>
                          <input
                            type="number"
                            min="0"
                            max="11"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.inches}
                            onChange={(e) => handleInputChange('inches', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Weight (lbs)
                          </label>
                          <input
                            type="number"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.weight}
                            onChange={(e) => handleInputChange('weight', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Age
                          </label>
                          <input
                            type="number"
                            min="13"
                            max="120"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.age}
                            onChange={(e) => handleInputChange('age', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Gender
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {genderOptions.map((gender) => (
                              <div
                                key={gender}
                                className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                  formData.gender === gender
                                    ? 'border-primary bg-primary/10 text-primary'
                                    : 'border-gray-200 hover:border-primary/50'
                                }`}
                                onClick={() => handleInputChange('gender', gender)}
                              >
                                {gender}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Activity Level
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {activityLevels.map((level) => (
                            <div
                              key={level}
                              className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                formData.activityLevel === level
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-gray-200 hover:border-primary/50'
                              }`}
                              onClick={() => handleInputChange('activityLevel', level)}
                            >
                              {level}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Goals (Select Multiple)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {goals.map((goal) => (
                            <div
                              key={goal}
                              className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                formData.goals.includes(goal)
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-gray-200 hover:border-primary/50'
                              }`}
                              onClick={() => handleMultiSelect('goals', goal)}
                            >
                              {goal}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Dietary Preferences
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {dietaryPreferences.map((pref) => (
                            <div
                              key={pref}
                              className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                formData.dietaryPreference === pref
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-gray-200 hover:border-primary/50'
                              }`}
                              onClick={() => handleInputChange('dietaryPreference', pref)}
                            >
                              {pref}
                            </div>
                          ))}
                        </div>
                        {formData.dietaryPreference === 'Other' && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.otherPreference}
                            onChange={(e) => handleInputChange('otherPreference', e.target.value)}
                          />
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Cuisines (Select Multiple)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {cuisineOptions.map((cuisine) => (
                            <div
                              key={cuisine}
                              className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                formData.cuisines.includes(cuisine)
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-gray-200 hover:border-primary/50'
                              }`}
                              onClick={() => handleMultiSelect('cuisines', cuisine)}
                            >
                              {cuisine}
                            </div>
                          ))}
                        </div>
                        {formData.cuisines.includes('Other') && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.otherCuisine}
                            onChange={(e) => handleInputChange('otherCuisine', e.target.value)}
                          />
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Food Allergies or Restrictions (Select Multiple)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {allergyOptions.map((allergy) => (
                            <div
                              key={allergy}
                              className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                formData.allergies.includes(allergy)
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-gray-200 hover:border-primary/50'
                              }`}
                              onClick={() => handleMultiSelect('allergies', allergy)}
                            >
                              {allergy}
                            </div>
                          ))}
                        </div>
                        {formData.allergies.includes('Other') && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.otherAllergies}
                            onChange={(e) => handleInputChange('otherAllergies', e.target.value)}
                          />
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Favorite Ingredients
                          </label>
                          <input
                            type="text"
                            placeholder="Enter ingredients, separated by commas"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.favoriteIngredients.join(', ')}
                            onChange={(e) => handleInputChange('favoriteIngredients', e.target.value.split(',').map(i => i.trim()))}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ingredients to Avoid
                          </label>
                          <input
                            type="text"
                            placeholder="Enter ingredients, separated by commas"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.avoidIngredients.join(', ')}
                            onChange={(e) => handleInputChange('avoidIngredients', e.target.value.split(',').map(i => i.trim()))}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Meal Preparation Time
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {prepTimeOptions.map((time) => (
                            <div
                              key={time}
                              className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                formData.prepTime === time
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-gray-200 hover:border-primary/50'
                              }`}
                              onClick={() => handleInputChange('prepTime', time)}
                            >
                              {time}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Weekly Grocery Budget
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {budgetOptions.map((budget) => (
                            <div
                              key={budget}
                              className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                formData.budget === budget
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-gray-200 hover:border-primary/50'
                              }`}
                              onClick={() => handleInputChange('budget', budget)}
                            >
                              {budget}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Meal Planning Frequency
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {mealFrequencyOptions.map((freq) => (
                            <div
                              key={freq}
                              className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                formData.mealFrequency === freq
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-gray-200 hover:border-primary/50'
                              }`}
                              onClick={() => handleInputChange('mealFrequency', freq)}
                            >
                              {freq}
                            </div>
                          ))}
                        </div>
                        {formData.mealFrequency === 'Custom' && (
                          <input
                            type="text"
                            placeholder="Specify meals (e.g., weekday lunches)"
                            className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.customMeals}
                            onChange={(e) => handleInputChange('customMeals', e.target.value)}
                          />
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cooking Style Preference
                        </label>
                        <div className="grid grid-cols-1 gap-3">
                          {prepStyleOptions.map((style) => (
                            <div
                              key={style}
                              className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                formData.prepStyle === style
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-gray-200 hover:border-primary/50'
                              }`}
                              onClick={() => handleInputChange('prepStyle', style)}
                            >
                              {style}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Plan Type
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {planTypes.map((type) => (
                            <div
                              key={type}
                              className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                formData.planType === type
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-gray-200 hover:border-primary/50'
                              }`}
                              onClick={() => handleInputChange('planType', type)}
                            >
                              {type}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-800">Include Grocery List</h4>
                            <p className="text-sm text-gray-600">Get a weekly shopping list with your plan</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={formData.includeGroceryList}
                              onChange={(e) => handleInputChange('includeGroceryList', e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-800">Track Daily Macros</h4>
                            <p className="text-sm text-gray-600">Monitor your nutrition progress</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={formData.trackMacros}
                              onChange={(e) => handleInputChange('trackMacros', e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Previous
                  </button>
                )}
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center"
                  >
                    Next <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center"
                  >
                    Build My Plan <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationForm;