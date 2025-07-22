import { useState } from 'react';
import chat from '../config/gemini';
import AIContext from './Context';

const ContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const typeTextWithEffect = (text) => {
    const words = text.split(' ');
    setResult('');
    words.forEach((word, index) => {
      setTimeout(() => {
        setResult((prev) => prev + word + ' ');
      }, 75 * index);
    });
  };

  const onSent = async () => {
    setLoading(true);
    setShowResult(true);
    setResult('');

    try {
      setRecentPrompt(inputValue);
      const response = await chat(inputValue);

      const responseArray = response.split('**');
      const formatted = responseArray
        .map((part, idx) => (idx % 2 === 1 ? `<b>${part}</b>` : part))
        .join('')
        .replace(/\*/g, '<br>');

      typeTextWithEffect(formatted);
    } catch (error) {
      console.error('Error sending prompt:', error);
      setShowResult(false);
    } finally {
      setLoading(false);
      setInputValue('');
    }
  };

  const contextValue = {
    inputValue,
    setInputValue,
    recentPrompt,
    setRecentPrompt,
    previousPrompts,
    setPreviousPrompts,
    showResult,
    loading,
    result,
    onSent,
  };

  return (
    <AIContext.Provider value={contextValue}>{children}</AIContext.Provider>
  );
};

export default ContextProvider;
