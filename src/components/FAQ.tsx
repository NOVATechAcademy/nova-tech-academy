import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'What are the payment options?',
      answer:
        'You have two payment options:\n' +
        '1. Pay monthly for 6 months during your classes and placement, and receive a 40% discount.\n' +
        '2. Pay in installments only after you are placed in a job, but this option does not include the 40% discount.',
    },
    {
      question: 'Is your program online or in campus?',
      answer: 'We offer both online and in-campus classes. You can choose the option that works best for you.',
    },
    {
      question: 'Will I get support after placement?',
      answer:
        'Yes, we provide support even after you are placed in a job. If you face any difficulties, our team is here to help you succeed.',
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
