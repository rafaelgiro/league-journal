import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '@emotion/react';

import { Typography } from '../Typography';

import { CheckboxProps } from './interfaces';
import { CheckboxContainer } from './styles';

export const Checkbox = (props: CheckboxProps) => {
  const { isChecked, handlePress, label, ...other } = props;
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={() => handlePress(!isChecked)}>
      <CheckboxContainer {...other}>
        <Svg
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          style={{ marginRight: 4 }}
        >
          <Path
            d="M4.86267 4.60038L11.992 3.29724L15.3521 4.951L17 8.55071L15.0073 13.4828L14.7443 17.4915L12.4069 19.2856L4.54711 18.8823L3.57122 16.7961L1.74799 13.5938L1 5.81002L3.69394 3.46086L4.52958 4.98022"
            fill={theme.colors.background}
          />
          <Path
            d="M1.69541 7.54562C1.19285 5.23736 3.93938 4.7874 5.23084 4.01019M5.23084 4.01019C8.45655 3.60698 9.748 4.57703 12.3075 4.01019H5.23084ZM5.23084 4.01019C7.79037 3.86994 10.6304 3.69463 12.3075 4.01019H5.23084ZM12.3075 4.01019C13.8795 4.12706 15.2878 4.59456 15.843 7.54562L12.3075 4.01019ZM12.3075 4.01019C15.5683 5.30164 16.3572 5.47695 15.843 7.54562L12.3075 4.01019ZM15.843 7.54562C15.7787 10.6135 16.3105 11.794 15.843 14.6223V7.54562ZM15.843 7.54562C15.5683 9.38638 16.1761 11.7998 15.843 14.6223V7.54562ZM15.843 14.6223C16.1059 16.4222 13.9555 18.9817 12.3075 18.1577L15.843 14.6223ZM15.843 14.6223C14.5164 17.1585 14.6392 17.9824 12.3075 18.1577L15.843 14.6223ZM12.3075 18.1577C9.36816 18.298 7.87218 18.1227 5.23084 18.1577H12.3075ZM12.3075 18.1577C10.7064 18.1461 8.80133 18.0467 5.23084 18.1577H12.3075ZM5.23084 18.1577C2.42587 18.4616 2.43756 17.4857 1.69541 14.6223L5.23084 18.1577ZM5.23084 18.1577C2.8583 17.065 1.04092 16.6676 1.69541 14.6223L5.23084 18.1577ZM1.69541 14.6223C2.309 11.8816 1.05845 10.5726 1.69541 7.54562V14.6223ZM1.69541 14.6223C1.50257 11.6596 1.40907 9.52662 1.69541 7.54562V14.6223ZM1.69541 7.54562C1.27466 4.72312 2.54274 3.01092 5.23084 4.01019L1.69541 7.54562Z"
            stroke={theme.colors.text}
            strokeLinecap="round"
          />
          <Path
            d="M8.44338 14.0957C11.1198 10.0869 13.1066 5.96129 15.3974 1.33309M5.73191 10.4901C6.77793 11.4427 6.71949 12.9386 8.96931 14.3236L5.73191 10.4901ZM5.45142 11.0628C6.69612 12.1731 7.87654 13.4295 8.51935 14.3587L5.45142 11.0628ZM9.03359 13.3828C12.2593 10.1395 12.8787 4.99708 15.8064 1L9.03359 13.3828Z"
            stroke={theme.colors.text}
            strokeLinecap="round"
            opacity={isChecked ? 1 : 0}
          />
        </Svg>

        <Typography variant="label">{label}</Typography>
      </CheckboxContainer>
    </TouchableOpacity>
  );
};
