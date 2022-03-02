import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@emotion/react";

import { Typography } from "../Typography";

import { RadioButtonProps } from "./interfaces";
import { RadioButtonContainer } from "./styles";

export const RadioButton = (props: RadioButtonProps) => {
  const { isChecked, handlePress, label, name, ...other } = props;
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={() => handlePress(name)}>
      <RadioButtonContainer {...other}>
        <Svg width="10" height="9" viewBox="0 0 10 9" fill="none">
          <Path
            d="M4.32764 1.12102C5.13567 1.07654 6.68843 1.57022 7.43804 1.95715C8.19252 2.33964 8.74256 2.81553 8.82531 3.42039C8.90806 4.0297 8.37262 5.01705 7.94427 5.59523C7.52079 6.17341 6.89774 6.49363 6.26982 6.88946C5.6419 7.28974 4.90202 8.08585 4.17675 7.99245C3.45148 7.9035 2.30272 6.99175 1.90845 6.34241C1.51417 5.69752 1.73321 4.83026 1.8257 4.10531C1.91331 3.38036 1.86951 2.44638 2.45849 1.99273C3.04747 1.53909 4.84361 1.52574 5.34984 1.37898C5.86094 1.23221 5.56888 1.18328 5.52021 1.11657L4.32764 1.12102ZM6.21627 1.61025C6.91721 1.77925 8.42616 2.12616 8.81557 2.71768C9.20985 3.3092 8.89832 4.44332 8.56732 5.15937C8.2412 5.87987 7.56947 6.60927 6.84419 7.03178C6.12379 7.44985 4.99937 7.74783 4.22542 7.68112C3.44661 7.60996 2.7262 7.20968 2.19077 6.61371C1.65046 6.01775 0.915456 4.85249 1.00794 4.10531C1.09556 3.35812 2.31246 2.52199 2.73107 2.12171C3.14482 1.72143 2.96472 1.89934 3.49528 1.71254C4.03072 1.52574 5.52021 0.97425 5.92422 1.00094C6.3331 1.02762 5.8512 1.73033 5.93395 1.88155"
            fill={theme.colors.text}
            opacity={isChecked ? 1 : 0}
          />
          <Path
            d="M6.21627 1.61025C6.91721 1.77925 8.42616 2.12616 8.81557 2.71768C9.20985 3.3092 8.89832 4.44332 8.56732 5.15937C8.2412 5.87987 7.56947 6.60927 6.84419 7.03178C6.12379 7.44985 4.99937 7.74783 4.22542 7.68112C3.44661 7.60996 2.7262 7.20968 2.19077 6.61371C1.65046 6.01775 0.915456 4.85249 1.00794 4.10531C1.09556 3.35812 2.31246 2.52199 2.73107 2.12171C3.14482 1.72143 2.96472 1.89934 3.49528 1.71254C4.03072 1.52574 5.52021 0.97425 5.92422 1.00094C6.3331 1.02762 5.8512 1.73033 5.93395 1.88155M4.32764 1.12102C5.13567 1.07654 6.68843 1.57022 7.43804 1.95715C8.19252 2.33964 8.74256 2.81553 8.82531 3.42039C8.90806 4.0297 8.37262 5.01705 7.94427 5.59523C7.52079 6.17341 6.89774 6.49363 6.26982 6.88946C5.6419 7.28974 4.90202 8.08585 4.17675 7.99245C3.45148 7.9035 2.30272 6.99175 1.90845 6.34241C1.51417 5.69752 1.73321 4.83026 1.8257 4.10531C1.91331 3.38036 1.86951 2.44638 2.45849 1.99273C3.04747 1.53909 4.84361 1.52574 5.34984 1.37898C5.86094 1.23221 5.56888 1.18328 5.52021 1.11657L4.32764 1.12102Z"
            stroke={theme.colors.text}
            strokeLinecap="round"
          />
        </Svg>

        <Typography variant="label">{label}</Typography>
      </RadioButtonContainer>
    </TouchableOpacity>
  );
};