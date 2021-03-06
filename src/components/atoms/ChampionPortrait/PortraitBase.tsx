import { useTheme } from '@emotion/react';
import Svg, { Defs, Path, Pattern, Image, Use } from 'react-native-svg';

import { Typography } from '../Typography';

import { ChampionPortraitProps } from './interfaces';
import { PortraitContainer } from './styles';

export const PortraitBase = (props: ChampionPortraitProps) => {
  const { championName, championId, isActive } = props;
  const theme = useTheme();

  return (
    <PortraitContainer>
      <Svg width="50" height="52" viewBox="0 0 50 52" fill="none">
        <Path
          d="M24.0391 5.73335C28.0422 5.21262 34.592 7.30368 38.3592 9.7446C42.1345 12.1855 45.5599 16.1154 46.6583 20.387C47.7486 24.6668 47.0651 31.42 44.9497 35.4068C42.8342 39.4018 37.8873 42.8353 33.9574 44.3243C30.0194 45.8133 25.7559 45.4797 21.3541 44.3487C16.9604 43.2096 10.3293 40.8582 7.55476 37.506C4.78838 34.1457 3.90152 28.8814 4.72329 24.203C5.5532 19.5245 8.7264 12.4215 12.5017 9.41914C16.2851 6.42494 24.2588 6.87245 27.3994 6.22153C30.5482 5.57062 31.0771 5.47299 31.37 5.52994L24.0391 5.73335ZM32.859 6.54699C36.9109 7.85695 42.0531 12.5272 44.4696 16.0666C46.8861 19.614 48.1554 23.9182 47.3499 27.8155C46.5444 31.7047 43.3793 36.0659 39.6447 39.4343C35.9101 42.8109 29.3766 47.5951 24.9422 48.0426C20.516 48.4901 16.0166 45.3658 13.055 42.1193C10.0933 38.8729 8.00226 32.9008 7.15608 28.5641C6.30989 24.2274 6.36684 20.1348 7.97785 16.0991C9.58072 12.0553 12.5912 6.31103 16.8058 4.31762C21.0205 2.31606 30.8086 4.09793 33.2658 4.09793C35.723 4.0898 31.8582 3.95148 31.549 4.30948"
          fill="url(#pattern0)"
        />
        <Path
          d="M32.6161 4.57181C37.1221 6.0433 42.8406 11.2895 45.528 15.2653C48.2153 19.2502 49.6269 24.0851 48.7311 28.463C47.8353 32.8318 44.3155 37.7307 40.1624 41.5145C36.0092 45.3075 28.7434 50.6816 23.8121 51.1843C18.8898 51.687 13.8861 48.1774 10.5925 44.5306C7.29893 40.8839 4.97352 34.1753 4.03249 29.3039C3.09147 24.4324 3.15481 19.8351 4.94637 15.3018C6.72889 10.7594 10.0768 4.30675 14.7638 2.06753C19.4508 -0.180843 30.3359 1.82075 33.0685 1.82075C35.8011 1.81161 31.5031 1.65624 31.1593 2.05839M22.8077 3.65783C27.2595 3.07289 34.5434 5.4218 38.7327 8.16371C42.9311 10.9056 46.7405 15.3201 47.962 20.1185C49.1745 24.9259 48.4144 32.5119 46.0618 36.9904C43.7093 41.478 38.2079 45.3349 33.8376 47.0075C29.4582 48.68 24.7169 48.3053 19.8218 47.0349C14.9357 45.7553 7.56133 43.114 4.47586 39.3484C1.39944 35.5737 0.413175 29.6603 1.32705 24.405C2.24998 19.1496 5.77882 11.1707 9.97723 7.79812C14.1847 4.43471 23.052 4.93739 26.5447 4.20622C30.0464 3.47504 30.6345 3.36536 30.9602 3.42934L22.8077 3.65783Z"
          stroke={theme.colors.text}
          opacity={isActive ? 1 : 0}
          strokeLinecap="round"
        />
        <Defs>
          <Pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <Use
              xlinkHref="#image0_229_1252"
              transform="translate(-0.0180224) scale(0.00863371 0.00833333)"
            />
          </Pattern>
          <Image
            id="image0_229_1252"
            width="120"
            height="120"
            xlinkHref={{
              uri: `https://assets.5pots.com/file/cincopots/champions/${championId}.png`
            }}
          />
        </Defs>
      </Svg>

      <Typography
        style={{
          textDecorationLine: isActive ? 'underline' : 'none',
          textAlign: 'center'
        }}
        variant="label-small"
      >
        {championName}
      </Typography>
    </PortraitContainer>
  );
};
