import { createContext } from 'react';

const AIContext = createContext({
  onSent: () => {},
});

export default AIContext;
