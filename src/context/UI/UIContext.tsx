import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

interface UIContextProps {
  isLoading: { open: boolean; text: string };
  setIsLoading: Dispatch<SetStateAction<UIContextProps['isLoading']>>;
}

export const UIContext = createContext<UIContextProps>({
  isLoading: { open: false, text: '' },
  setIsLoading: () => ({ open: false, text: '' })
});

export const UIProvider: FC = (props) => {
  const [isLoading, setIsLoading] = useState({ open: false, text: '' });

  return <UIContext.Provider value={{ isLoading, setIsLoading }} {...props} />;
};
