import React from 'react';

export default function LogoStory() {
  const butterflyStages = [
    {
      stage: 'Egg',
      description: 'The egg symbolizes the beginning of a journey. In human life, this is when we set our goals and dreams, laying the foundation for growth.',
      icon: 'https://via.placeholder.com/100?text=Egg', // Replace with a suitable egg icon
    },
    {
      stage: 'Caterpillar',
      description: 'The caterpillar represents hard work and learning. This is the stage where we acquire knowledge and build habits to move closer to our goals.',
      icon: 'https://via.placeholder.com/100?text=Caterpillar', // Replace with a suitable caterpillar icon
    },
    {
      stage: 'Chrysalis',
      description: 'The chrysalis stage symbolizes transformation. It’s a period of self-reflection, resilience, and internal growth before achieving breakthroughs.',
      icon: 'https://via.placeholder.com/100?text=Chrysalis', // Replace with a suitable chrysalis icon
    },
    {
      stage: 'Butterfly',
      description: 'The butterfly represents achievement and freedom. This is when you become the best version of yourself, soaring toward new goals.',
      icon: 'https://via.placeholder.com/100?text=Butterfly', // Replace with a suitable butterfly icon
    },
  ];

  return (
    <div className=" py-10">
      <div className="container mx-auto px-4 text-center lg:text-left">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold  mb-4">The Story of Our Logo</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Our butterfly logo symbolizes growth, transformation, and the pursuit of becoming the best version of yourself. 
          Like the butterfly, personal growth involves stages of hard work, reflection, and eventual transformation.
        </p>

        {/* Stages Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2">
          {butterflyStages.map((stage, index) => (
            <div
              key={index}
              className=" shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              {/* <img
                src={stage.icon}
                alt={`${stage.stage} icon`}
                className="w-34 h-34 mx-auto mb-4"
              /> */}
              <h3 className="text-xl font-semibold ">{stage.stage}</h3>
              <p className=" mt-2 lg:p2 font-light text-sm md:text-base">{stage.description}</p>
            </div>
          ))}
        </div>

        {/* Closing Text */}
        <p className="text-lg md:text-xl leading-relaxed mt-8">
          Our mission is to guide you through these stages of personal transformation, providing tools to set goals, build habits, and achieve your dreams.
        </p>
      </div>
    </div>
  );
}
