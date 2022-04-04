import { useTheme } from '@emotion/react';
import { useContext } from 'react';
import Svg, { Path } from 'react-native-svg';

import { UIContext } from '../../../context/UI/UIContext';
import { Typography } from '../../atoms/Typography';
import { LoadingContainer } from './styles';

export const ErrorOverlay = () => {
  const { hasError } = useContext(UIContext);
  const theme = useTheme();

  if (hasError.open)
    return (
      <LoadingContainer>
        <Svg
          width="9"
          height="18"
          viewBox="0 0 9 18"
          fill="none"
          style={{ marginRight: 8 }}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 3.56684C2.18029 2.81283 3.76623 2.60428 6.81436 1.01146L1 3.56684ZM1.19481 3.5508C2.75554 2.56073 4.35065 2.11612 6.36975 1.37128L1.19481 3.5508ZM6.70894 1C6.77769 4.99007 6.53705 7.9809 5.48969 12.6402L6.70894 1ZM6.73644 1.43774C6.53017 3.79373 6.36287 6.40871 5.80825 12.395L6.73644 1.43774ZM6.02139 12.1818C5.22613 10.3942 3.54622 8.72803 1.10772 3.70206L6.02139 12.1818ZM5.86554 12.1406C4.0275 8.84263 2.63407 5.85638 1.23835 3.5806L5.86554 12.1406Z"
            stroke={theme.colors.error}
            strokeLinecap="round"
          />
          <Path
            d="M6.70015 13.4632C6.98434 13.4907 7.37853 13.8046 7.59854 14.0774C7.81627 14.3478 7.96065 14.7855 8.01336 15.0904C8.06837 15.3952 8.10275 15.645 7.92398 15.904C7.74522 16.1629 7.25019 16.47 6.94308 16.6465C6.63598 16.823 6.36325 17.059 6.08136 16.9582C5.79946 16.8551 5.46256 16.4311 5.25172 16.0323C5.04087 15.6312 4.71543 14.9391 4.81627 14.5587C4.91482 14.1782 5.57945 13.9101 5.85217 13.7473C6.12261 13.5846 6.30596 13.635 6.44805 13.58C6.58785 13.525 6.70702 13.4563 6.70015 13.4173M6.58097 13.195C6.89725 13.1446 7.24331 13.3669 7.55042 13.5869C7.85981 13.8069 8.3113 14.1072 8.43277 14.5128C8.55424 14.9185 8.49694 15.6289 8.27922 16.0231C8.06149 16.4173 7.52521 16.7244 7.12643 16.8757C6.72536 17.0269 6.2097 17.0338 5.88197 16.9307C5.55424 16.8299 5.31818 16.5823 5.16233 16.2615C5.00649 15.9429 4.93774 15.3906 4.94919 15.017C4.96065 14.6434 4.98128 14.2836 5.22651 14.0224C5.47402 13.7634 6.20511 13.5342 6.42513 13.4563C6.64515 13.3761 6.55806 13.5136 6.5466 13.5502L6.58097 13.195Z"
            stroke={theme.colors.error}
            strokeLinecap="round"
          />
        </Svg>

        <Typography
          variant="title-3"
          style={{ color: theme.colors.error, textDecorationLine: 'underline' }}
        >
          {hasError.text}
        </Typography>
      </LoadingContainer>
    );

  return null;
};
