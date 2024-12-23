import React from 'react';
import { useTheme } from '../components/Theme/ThemeContext';

export default function TeamScreen() {
  const { theme } = useTheme()

  const bgClasses = {
    default: 'bg-defaultCustomBg',
    dark: 'bg-darkCustomBg', // Updated for dark theme
    blue: 'bg-blueCustomBg',
    green: 'bg-greenCustomBg',
  };

  const teamMembers = [
    {
      name: 'Julian Trujillo',
      role: 'Founder',
      image: '/images/profile1.png',
      bio: 'Julian is the visionary behind our app, bringing years of experience in personal development and technology.',
    },
    {
      name: 'Mateo Areiza',
      role: 'Co-Founder',
      image: '/images/profile2.png',
      bio: 'Mateo leads the technical team, ensuring our app remains cutting-edge and reliable.',
    },
  ];

  return (
    <div className={`min-h-screen mt-20`}>
      {/* Header Section */}
      <header className={`${bgClasses[theme]} py-6 animate-fadeIn`}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Meet Our Team</h1>
          <p className="text-lg mt-2">
            The passionate individuals driving the success of our self-development app.
          </p>
        </div>
      </header>

      {/* Team Members Section */}
      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${bgClasses[theme]} shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 duration-300 transition-all`}
            >
              <img
                src={member.image}
                alt={`${member.name}'s photo`}
                className="w-full h-58 object-cover bg-transparent		"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold ">{member.name}</h2>
                <p className="text-sm underline">{member.role}</p>
                <p className=" mt-2 italic">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}
