import { Context } from './Context';
import chat from '../config/gemini';

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    try {
      const response = await chat(prompt);
      console.log('Gemini response:', response);
    } catch (error) {
      console.error('Error calling Gemini:', error);
    }
  };

  const contextValue = {
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
