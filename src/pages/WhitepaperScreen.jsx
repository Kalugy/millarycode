
import React from 'react';
import { useTheme } from '../components/Theme/ThemeContext';
import LogoStory from '../components/Whitepaper/LogoStory';
import Section from '../components/Section';
export default function WhitepaperScreen() {
  const { theme } = useTheme()

  const bgClasses = {
    default: 'bg-defaultCustomBg',
    dark: 'bg-darkCustomBg', // Updated for dark theme
    blue: 'bg-blueCustomBg',
    green: 'bg-greenCustomBg',
  };

  return (
    <div className={`min-h-screen mt-20`}>
      {/* Header Section */}
      <Section>
      <header className={`${bgClasses[theme]} py-2`}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Growvyn Whitepaper</h1>
          <p className="text-lg mt-2">
            Your guide to achieving personal growth and success.
          </p>
        </div>
      </header>
      </Section>
      {/* Main Content */}
      
      <main className="container mx-auto px-4 py-10">
        {/* Introduction */}
        <Section>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg leading-relaxed">
            Our self-development app is designed to empower individuals to
            achieve their personal goals, track their progress, and improve
            their habits. This whitepaper outlines our vision, features, and
            the science behind personal growth.
          </p>
        </section>
        </Section>
        <Section>
        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg">
              <strong>Goal Setting:</strong> Define and break down your personal
              objectives.
            </li>
            <li className="text-lg">
              <strong>Habit Tracker:</strong> Build positive habits with
              reminders and analytics.
            </li>
            <li className="text-lg">
              <strong>Progress Visualization:</strong> View your achievements
              over time with interactive charts.
            </li>
            <li className="text-lg">
              <strong>AI-driven Insights:</strong> Receive tailored feedback to
              optimize your growth journey.
            </li>
          </ul>
        </section>
        </Section>
        {/* Vision and Philosophy */}
        <Section>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            We believe personal growth should be accessible, measurable, and
            rewarding. Our app is rooted in psychological research and designed
            to help users take consistent, meaningful steps toward self-improvement.
          </p>
        </section>
        </Section>
        {/* Call to Action */}
        <Section>
        <section>
          <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
          <p className="text-lg leading-relaxed mb-6">
            Start your journey of self-development today. Our app is available
            for download on all major platforms. Join a community of
            like-minded individuals striving to be the best version of
            themselves.
          </p>
          <a
            href="/"
            className={`inline-block button-${theme} px-6 py-3 rounded-lg text-lg font-semibold shadow`}
          >
            Get Started Now
          </a>
        </section>
        </Section>
      </main>
      <Section>
      <LogoStory/>
      </Section>
    </div>
  );
}


