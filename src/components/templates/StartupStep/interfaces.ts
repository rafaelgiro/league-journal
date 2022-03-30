import { ReactNode } from 'react';

export interface StartupStepProps {
  step: number;
  children: ReactNode;
}

export interface IndicatorProps {
  active: boolean;
}

export interface NextStepButtonProps {
  handleNavigation: () => void;
}
