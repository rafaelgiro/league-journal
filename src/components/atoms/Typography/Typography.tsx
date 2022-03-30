import {
  useFonts,
  PatrickHand_400Regular
} from '@expo-google-fonts/patrick-hand';

import { TypographyProps } from './interfaces';
import { BaseTypography } from './styles';

export const Typography = (props: TypographyProps) => {
  const [fontLoaded] = useFonts({
    PatrickHand_400Regular
  });

  if (!fontLoaded) return null;

  return <BaseTypography {...props} />;
};
