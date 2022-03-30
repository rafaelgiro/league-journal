import { StyleProp, TextStyle } from 'react-native';

export interface AddButtonProps {
  style?: StyleProp<TextStyle>;
  handlePress: () => void;
}
