const Features = () => (
  <section id="features" className="py-16 bg-gray-200">
    <div className="container mx-auto px-4">
      <h3 className="text-4xl font-extrabold text-center mb-12">Track Every Aspect of Your Life</h3>
      <p className="text-center text-gray-600 mb-8">
        Manage your activities, goals, and personal growth all in one place.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        <FeatureCard 
          title="Interactive Calendar" 
          description="Organize your time efficiently with a calendar that adapts to your goals." 
          icon="📅" 
        />
        <FeatureCard 
          title="Track Your Hobbies" 
          description="Log and monitor your hobbies to keep the fun alive and stay consistent." 
          icon="🎨" 
        />
        <FeatureCard 
          title="Financial Tracking" 
          description="Stay on top of your finances with an intuitive tracking tool." 
          icon="💰" 
        />
        <FeatureCard 
          title="Set and Achieve Goals" 
          description="Break down your dreams into actionable tasks with smart feedback." 
          icon="🎯" 
        />
        <FeatureCard 
          title="Daily Activity Monitoring" 
          description="Get insights on how you spend your day and find areas for improvement." 
          icon="🏃" 
        />
        <FeatureCard 
          title="AI-Powered Insights" 
          description="Let AI guide you with personalized recommendations and analytics." 
          icon="🤖" 
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white p-8 shadow-md rounded-lg text-center">
    <div className="text-6xl mb-4">{icon}</div>
    <h4 className="text-2xl font-bold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Features;
