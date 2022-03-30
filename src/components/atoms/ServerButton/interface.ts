import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'title'> {
  children: string;
  priority?: 'primary' | 'secondary';
  isSelected: boolean;
}
