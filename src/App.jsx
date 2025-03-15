// src/App.js
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import RecipeCard from './components/RecipeCard';

const sampleRecipes = [
  {
    id: 1,
    title: "Mediterranean Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    time: "25 mins",
    servings: 2,
    difficulty: "Easy"
  },
  {
    id: 2,
    title: "Grilled Salmon with Avocado",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    time: "30 mins",
    servings: 4,
    difficulty: "Medium"
  },
  {
    id: 3,
    title: "Vegetarian Buddha Bowl",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    time: "20 mins",
    servings: 2,
    difficulty: "Easy"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = sampleRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-gray-900">Recipe Finder</h1>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search recipes..."
                className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
