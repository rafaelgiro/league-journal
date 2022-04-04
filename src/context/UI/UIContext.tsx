import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';
import { apiErrors } from '../../utils/apiErrors';

interface UIContextProps {
  isLoading: { open: boolean; text: string };
  setIsLoading: Dispatch<SetStateAction<UIContextProps['isLoading']>>;
  hasError: { open: boolean; text: string };
  showError: (text: string) => void;
  showAPIError: (text: string) => void;
}

export const UIContext = createContext<UIContextProps>({
  isLoading: { open: false, text: '' },
  setIsLoading: () => ({ open: false, text: '' }),
  hasError: { open: false, text: '' },
  showError: () => null,
  showAPIError: () => null
});

export const UIProvider: FC = (props) => {
  const [isLoading, setIsLoading] = useState({ open: false, text: '' });
  const [hasError, setHasError] = useState({ open: false, text: '' });

  function showError(text: string) {
    setHasError({ open: true, text });

    setTimeout(() => {
      setHasError({ open: false, text: '' });
    }, 5000);
  }

  function showAPIError(code: string) {
    setHasError({ open: true, text: apiErrors[code] });

    setTimeout(() => {
      setHasError({ open: false, text: '' });
    }, 5000);
  }

  return (
    <UIContext.Provider
      value={{ isLoading, setIsLoading, hasError, showError, showAPIError }}
      {...props}
    />
  );
};
