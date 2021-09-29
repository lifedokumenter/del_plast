import React from 'react';
import { PChainOption } from '../interfaces/PChainOption';

interface PChainChoicesProviderProps {
  children: React.ReactNode;
}

export interface PChainChoicesContextApi {
  pChainChoices: Array<PChainOption>;
  togglePChainChoice: (choice: PChainOption) => void;
  activePChainChoice: PChainOption | null;
  setActivePChainChoice: (choice: PChainOption) => void;
  disabledPChainChoices: Array<string>;
  setDisabledPChainChoices: (disabledChoices: Array<string>) => void;
}

const PChainChoiceContext = React.createContext({} as PChainChoicesContextApi)

export const PChainChoiceProvider = ({ children }: PChainChoicesProviderProps) => {

  const [pChainChoices, setPChainChoices] = React.useState<Array<PChainOption>>([]);
  const [activePChainChoice, setActivePChainChoice] = React.useState<PChainOption | null>(null);
  const [disabledPChainChoices, setDisabledPChainChoices] = React.useState<Array<string>>([]);

  const togglePChainChoice = (choice: PChainOption) => {
    let idx = -1;
    let arr = [...pChainChoices];
    // !! for some reason findIndex doesn't work here. changes the array. using good ol' for loop instead
    for (let i=0; i<arr.length; i++) {
      if (arr[i].id === choice.id) {
        idx = i;
        break;
      }
    }
    idx > -1 ? arr.splice(idx,1) : arr.push(choice);
    setPChainChoices(arr);

    // save disabled choices
    let disabledOptions:Array<string> = [];
    for (let j=0; j<arr.length; j++) {
      if (arr[j].disablesOptions) {
        disabledOptions = [...disabledOptions, ...arr[j].disablesOptions?.map(o => o.id) || []];
      }
    }
    setDisabledPChainChoices(disabledOptions);
  }

  return (
    <PChainChoiceContext.Provider
      value={{
        pChainChoices,
        togglePChainChoice,
        activePChainChoice,
        setActivePChainChoice,
        disabledPChainChoices,
        setDisabledPChainChoices
      }}
    >
      {children}
    </PChainChoiceContext.Provider>
  );
};

PChainChoiceProvider.defaultProps = {};

export const usePChainChoices = (): PChainChoicesContextApi => React.useContext(PChainChoiceContext);
