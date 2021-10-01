import React from 'react';
import { DisabledPChainOption, PChainOption } from '../interfaces/PChainOption';

interface PChainChoicesProviderProps {
  children: React.ReactNode;
}

export interface PChainChoicesContextApi {
  pChainChoices: Array<PChainOption>;
  togglePChainChoice: (choice: PChainOption, enableMultipleChoice: boolean | undefined) => void;
  activePChainChoice: PChainOption | null;
  setActivePChainChoice: (choice: PChainOption) => void;
  disabledPChainChoices: Array<string>;
  setDisabledPChainChoices: (disabledChoices: Array<string>) => void;
  setMutuallyDisabledOptions: (disabledOptions: Array<DisabledPChainOption>) => void;
}

const PChainChoiceContext = React.createContext({} as PChainChoicesContextApi)

export const PChainChoiceProvider = ({ children }: PChainChoicesProviderProps) => {

  const [pChainChoices, setPChainChoices] = React.useState<Array<PChainOption>>([]);
  const [activePChainChoice, setActivePChainChoice] = React.useState<PChainOption | null>(null);
  const [disabledPChainChoices, setDisabledPChainChoices] = React.useState<Array<string>>([]);
  const [mutuallyDisabledOptions, setMutuallyDisabledOptions] = React.useState<Array<DisabledPChainOption>>([]);

  const togglePChainChoice = (choice:PChainOption, enableMultipleChoice:boolean|undefined = false) => {
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

    if (!enableMultipleChoice) {
      // filter out others from same category
      arr = arr.filter(o => o.id.split('_')[0] !== choice.id.split('_')[0] || o.id === choice.id);
    }
    
    setPChainChoices(arr);

    // save disabled choices
    let disabledOptions:Array<string> = [];
    for (let j=0; j<arr.length; j++) {
      for (let k=0; k<mutuallyDisabledOptions.length; k++) {
        if (arr[j].id === mutuallyDisabledOptions[k].id1 && disabledOptions.indexOf(mutuallyDisabledOptions[k].id2) === -1) {
          disabledOptions.push(mutuallyDisabledOptions[k].id2);
        } else if (arr[j].id === mutuallyDisabledOptions[k].id2 && disabledOptions.indexOf(mutuallyDisabledOptions[k].id1) === -1) {
          disabledOptions.push(mutuallyDisabledOptions[k].id1);
        }
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
        setDisabledPChainChoices,
        setMutuallyDisabledOptions
      }}
    >
      {children}
    </PChainChoiceContext.Provider>
  );
};

PChainChoiceProvider.defaultProps = {};

export const usePChainChoices = (): PChainChoicesContextApi => React.useContext(PChainChoiceContext);
