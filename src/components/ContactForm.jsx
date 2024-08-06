import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';
import useTypingEffects from './useTypingEffects';

function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const prompts = [
    '> Please enter your name:',
    '> Please enter your email:',
    '> Please enter your message:',
    '> Preview: Is this correct? (y/n):'
  ];

  const typedPrompt = useTypingEffects(prompts[currentStep]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'c') {
        resetForm();
      } else if (event.key === 'Enter') {
        handleNextStep();
      } else if (event.key.length === 1) {
        setInputValue((prev) => prev + event.key);
      } else if (event.key === 'Backspace') {
        setInputValue((prev) => prev.slice(0, -1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentStep, inputValue]);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setConfirmation('');
    setInputValue('');
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    if (currentStep === 0) setName(inputValue);
    if (currentStep === 1) setEmail(inputValue);
    if (currentStep === 2) setMessage(inputValue);
    if (currentStep === 3) setConfirmation(inputValue);
    if (currentStep === 4) handleFormSubmit();
    setInputValue('');
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleFormSubmit = () => {
    if (confirmation.toLowerCase() === 'y') {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name,
        email,
        message,
      }, 'YOUR_USER_ID')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
          console.log('FAILED...', error);
        });
    }
  };

  return (
    <div className="contact-form">
      <div className="terminal-text">{typedPrompt || prompts[currentStep]}</div>
      <div className="terminal-input">
        {inputValue}
        <span className="blinking-cursor">|</span>
      </div>
    </div>
  );
}

export default ContactForm;