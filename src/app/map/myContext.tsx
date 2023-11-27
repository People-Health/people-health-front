// Exemplo: myContext.tsx

import { createContext, useContext, ReactNode } from 'react';

interface MyContextProps {
  // Defina o tipo para o valor inicial do contexto
  myValue: string;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Forneça um valor inicial para o contexto
  const myValue = 'Valor Inicial';

  return <MyContext.Provider value={{ myValue }}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext deve ser usado dentro de um MyContextProvider');
  }
  return context;
};
