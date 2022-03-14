import { useTheme } from "@emotion/react";
import Svg, { Defs, Path, Pattern, Use, Image } from "react-native-svg";
import { Typography } from "../../atoms/Typography";
import { MatchProps } from "./interfaces";
import { MatchContainer, MatchInfo } from "./styles";

export const Match = (props: MatchProps) => {
  const { championId, date, kda } = props;
  const theme = useTheme();

  return (
    <MatchContainer>
      <>
        <Svg width="113" height="114" viewBox="0 0 113 114" fill="none">
          <Path
            d="M1.64564 29.4444C-0.294698 11.8306 7.76808 2.92008 28.9423 2.14772M28.9423 2.14772C41.8842 0.24505 49.2311 2.20423 83.5356 2.14772H28.9423ZM28.9423 2.14772C49.0239 1.94049 73.702 1.39418 83.5356 2.14772H28.9423ZM83.5356 2.14772C103.617 3.05195 108.704 10.7756 110.832 29.4444L83.5356 2.14772ZM83.5356 2.14772C104.898 -1.80832 111.322 7.76152 110.832 29.4444L83.5356 2.14772ZM110.832 29.4444C112.32 39.2403 107.366 58.493 110.832 84.0377V29.4444ZM110.832 29.4444C111.266 49.6578 109.061 66.8572 110.832 84.0377V29.4444ZM110.832 84.0377C111.134 104.477 103.335 114.593 83.5356 111.334L110.832 84.0377ZM110.832 84.0377C112.886 103.347 99.793 111.202 83.5356 111.334L110.832 84.0377ZM83.5356 111.334C70.2735 111.353 56.2955 113.124 28.9423 111.334H83.5356ZM83.5356 111.334C66.2232 111.843 46.7633 110.807 28.9423 111.334H83.5356ZM28.9423 111.334C9.14327 114.744 -1.14242 100.239 1.64564 84.0377L28.9423 111.334ZM28.9423 111.334C13.363 108.094 4.7728 102.744 1.64564 84.0377L28.9423 111.334ZM1.64564 84.0377C1.77751 64.4459 1.60797 54.8572 1.64564 29.4444V84.0377ZM1.64564 84.0377C1.55145 70.3046 1.92822 55.46 1.64564 29.4444V84.0377ZM1.64564 29.4444C-1.65105 7.87455 7.71156 2.99544 28.9423 2.14772L1.64564 29.4444Z"
            stroke={theme.colors.text}
            stroke-width="2"
            stroke-linecap="round"
          />
          <Path
            d="M32.0887 0L90.525 0.941914L103.844 6.46153L103.542 9.08005L109.194 30.405L112.001 88.0689L108.176 103.045L100.943 108.979L80.0886 112.898L21.1625 107.755L11.9505 104.157L1.87207 101.03L5.20644 86.1662L3.15307 21.1177L14.3242 9.62636L25.2127 5.42542"
            fill="url(#pattern0)"
          />
          <Defs>
            <Pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <Use
                xlinkHref="#image0_290_116"
                transform="translate(-0.368585) scale(0.00142977)"
              />
            </Pattern>
            <Image
              id="image0_290_116"
              width="1215"
              height="717"
              xlinkHref={{
                uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`,
              }}
            />
          </Defs>
        </Svg>
        <MatchInfo>
          <Typography variant="label-small">
            {date.toLocaleDateString()}
          </Typography>
          <Typography variant="title-3">KDA: {kda}</Typography>
        </MatchInfo>
      </>
    </MatchContainer>
  );
};
