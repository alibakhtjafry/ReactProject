// src/RecipeCard.js
import React from 'react';
import { Clock, Users, Utensils } from 'lucide-react';

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h3>
        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{recipe.time}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-sm">{recipe.servings} servings</span>
          </div>
          <div className="flex items-center">
            <Utensils className="h-4 w-4 mr-1" />
            <span className="text-sm">{recipe.difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
