import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  const faqData = [
    {
      question: 'What is web3?',
      answer: 'web1+web2+decentralization',
    },
    {
      question: 'who is the founder of ethereum',
      answer: 'Vitalik Buterin',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <h2>Learning by Building</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default App;



