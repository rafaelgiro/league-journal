import { useState } from 'react';
import { useTheme } from '@emotion/react';
import {
  useFonts,
  PatrickHand_400Regular
} from '@expo-google-fonts/patrick-hand';

import { StyledTextArea } from './styles';
import { TextAreaProps } from './interfaces';
export const TextArea = (props: TextAreaProps) => {
  const {
    numberOfLines = 6,
    placeholder = 'Type here...',
    onChangeText,
    initialValue,
    ...other
  } = props;
  const { colors } = useTheme();
  const [fontLoaded] = useFonts({
    PatrickHand_400Regular
  });
  const [val, setVal] = useState(initialValue || '');

  function handleChange() {
    if (onChangeText) onChangeText(val);
  }

  if (!fontLoaded) return null;

  return (
    <StyledTextArea
      {...other}
      value={val}
      onChangeText={(v) => setVal(v)}
      multiline
      onBlur={handleChange}
      placeholder={placeholder}
      numberOfLines={numberOfLines}
      placeholderTextColor={colors.secondary}
      selectionColor={colors.text}
    />
  );
};
