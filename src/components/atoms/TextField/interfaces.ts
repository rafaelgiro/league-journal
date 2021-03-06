import { TextInputProps } from 'react-native';

export interface TextFieldProps extends TextInputProps {
  label: string;
  hasError?: boolean;
}
