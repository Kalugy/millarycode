import { useState } from "react";
const questions = [
    {
        question: "How does Growvyn track my daily activities?",
        answer: "You can manually add activities or use integrations to track them automatically.",
    },
    {
        question: "Can I set reminders for my activities?",
        answer: "Yes, you can set reminders for each activity to stay on track.",
    },
    {
        question: "Is this going to help me achieve my goals?",
        answer: "Yes, it's a tool for tracking and self-development based on monitoring your progress.",
    },
    {
        question: "Where can I use the app?",
        answer: "Currently, we are still building Growvyn, as it is developed by a small team.",
    },
    {
        question: "Can I ask for a feature or share an idea?",
        answer: "Yes, we have a Discord server where we actively read and consider new ideas.",
    },
    {
        question: "I have a problem with the app. Where can I contact support?",
        answer: "Currently, you can reach out to us on our Discord server, where we actively read and respond to user issues.",
    },
];



const FAQs = () => {
  // State to manage which question is currently open
  const [openIndex, setOpenIndex] = useState(null);


  const bgClassesOuter = {
    default: 'bg-defaultBg text-defaultText border-defaultHoverBg hover:bg-defaultHoverBg',
    dark: 'bg-stone-600 text-darkText border-darkHoverBg hover:bg-darkHoverBg',
    blue: 'bg-blueBg text-blueText border-blueHoverBg hover:bg-blueHoverBg',
    green: 'bg-greenBg text-greenText border-greenHoverBg hover:bg-greenHoverBg',
  };

  const bgClasses = {
    default: 'bg-defaultBg',
    dark: 'bg-darkCustomBg', // Updated for dark theme
    blue: 'bg-blueBg',
    green: 'bg-greenBg',
  };

  // Function to toggle the visibility of an individual answer
  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same question is clicked
    } else {
      setOpenIndex(index); // Open the clicked question
    }
  };

  return (
    <div id="faq" className="overflow-hidden">
      <div className={`${bgClasses[theme]} inset-0  m-4 p-2 sm:p-6 md:p-8 rounded-lg shadow-md max-w-3xl sm:mx-auto`}>
        <h2 className="text-3xl md:text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        {questions.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className={`flex justify-between items-center w-full text-left text-md md:text-xl font-semibold ${bgClassesOuter[theme]} p-3 md:p-4 rounded transition shadow`}
            >
              {faq.question}
              <span className="ml-2">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className={`mt-2 p-3 md:p-4 rounded `}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default FAQs;
