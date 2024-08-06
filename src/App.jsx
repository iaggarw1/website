import React, { useState } from 'react';
import ContactForm from './components/ContactForm';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert('Form submitted!');
  };

  return (
    <div className="App">
      <ContactForm
        currentStep={currentStep}
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setCurrentStep={setCurrentStep}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default App;