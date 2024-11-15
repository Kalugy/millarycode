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

  // Function to toggle the visibility of an individual answer
  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same question is clicked
    } else {
      setOpenIndex(index); // Open the clicked question
    }
  };

  return (
    <div className="moving-gradient overflow-hidden">
    <div className="m-4 p-2 sm:p-6 md:p-8 inset-0 bg-white opacity-80 rounded-lg shadow-md max-w-3xl sm:mx-auto">
      <h2 className="text-1xl md:text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      {questions.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleAnswer(index)}
            className="flex justify-between items-center w-full text-left text-md md:text-xl font-semibold text-gray-800 bg-gray-200 p-3 md:p-4 rounded hover:bg-gray-300 transition"
          >
            {faq.question}
            <span className="ml-2">{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="text-gray-700 mt-2 p-3 md:p-4 bg-white rounded shadow">
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
