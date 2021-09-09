import React from 'react';
import { PChainOption } from '../interfaces/PChainOption';

interface PChainChoicesProviderProps {
  children: React.ReactNode;
}

export interface PChainChoicesContextApi {
  PChainChoices: Array<PChainOption>;
  choosePChain: (choice: PChainOption) => void;
  activePChainChoice: PChainOption | null;
  setActivePChainChoice: (choice: PChainOption) => void;
}

const PChainChoiceContext = React.createContext({} as PChainChoicesContextApi)

export const PChainChoiceProvider = ({ children }: PChainChoicesProviderProps) => {

  const [PChainChoices, setPChainChoices] = React.useState<Array<PChainOption>>([]);
  const [activePChainChoice, setActivePChainChoice] = React.useState<PChainOption | null>(null);

  const choosePChain = (choice: PChainOption) => {
    setPChainChoices([...PChainChoices, choice])
  }

  return (
    <PChainChoiceContext.Provider
      value={{
        PChainChoices,
        choosePChain,
        activePChainChoice,
        setActivePChainChoice
      }}
    >
      {children}
    </PChainChoiceContext.Provider>
  );
};

PChainChoiceProvider.defaultProps = {};

export const usePChainChoices = (): PChainChoicesContextApi => React.useContext(PChainChoiceContext);
