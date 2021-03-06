import { useTheme } from '@emotion/react';
import Svg, { Path } from 'react-native-svg';

import { Summary } from '../../organisms/Summary';
import { SavedItemsContainer } from './styles';

export const SavedItems = () => {
  const theme = useTheme();

  return (
    <SavedItemsContainer>
      <Summary variant="questions" />
      <Svg
        width="286"
        height="16"
        viewBox="0 0 286 16"
        fill="none"
        style={{ marginVertical: 32, alignSelf: 'center' }}
      >
        <Path
          d="M1 8.87793C30.671 11.6648 57.0628 11.9901 123.526 9.6252M4.23524 11.3132C39.2954 13.5901 75.2435 11.5593 120.124 9.46695L4.23524 11.3132Z"
          stroke={theme.colors.text}
          strokeLinecap="round"
        />
        <Path
          d="M163.731 8.56432C208.867 7.34231 256.542 8.12475 285 7.84342M164.153 11.0962C208.453 7.36869 253.325 3.71146 283.303 6.83241L164.153 11.0962Z"
          stroke={theme.colors.text}
          strokeLinecap="round"
        />
        <Path
          d="M136.184 14.5036C138.487 10.9167 138.883 7.91884 142.953 1M137.292 15.7784C138.294 6.98695 140.122 2.88136 140.852 1.53628L137.292 15.7784Z"
          stroke={theme.colors.text}
          strokeLinecap="round"
        />
        <Path
          d="M145.369 15.3132C147.856 8.60533 150.626 6.03824 152.331 3.16345M144.999 11.4977C147.751 14.0121 147.232 7.34816 150.415 3.38324L144.999 11.4977Z"
          stroke={theme.colors.text}
          strokeLinecap="round"
        />
      </Svg>
      <Summary variant="reminders" />
    </SavedItemsContainer>
  );
};
