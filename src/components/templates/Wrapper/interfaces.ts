import { ReactNode } from 'react';

export interface WrapperProps {
  isIntro?: boolean;
  backButton?: boolean;
  children: ReactNode;
  homeButton?: boolean;
}
