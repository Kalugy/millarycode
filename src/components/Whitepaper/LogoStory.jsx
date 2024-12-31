import React from 'react';
import ButterflyStages from './ButterflyStages';
export default function LogoStory() {

  return (
    <div className=" py-10">
      <div className="container mx-auto px-4 text-center lg:text-left">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold  mb-4">The Story of Our Logo</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Our butterfly logo symbolizes growth, transformation, and the pursuit of becoming the best version of yourself. 
          Like the butterfly, personal growth involves stages of hard work, reflection, and eventual transformation.
        </p>

        <ButterflyStages />

        {/* Closing Text */}
        <p className="text-lg md:text-xl leading-relaxed mt-8">
          Our mission is to guide you through these stages of personal transformation, providing tools to set goals, build habits, and achieve your dreams.
        </p>
      </div>
    </div>
  );
}
