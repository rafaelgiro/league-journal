import { TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@emotion/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Typography } from "../../atoms/Typography";

import { summaryTitles } from "./helpers";
import { SummaryProps } from "./interfaces";
import { SummaryTitleContainer } from "./styles";

export const Summary = (props: SummaryProps) => {
  const { variant } = props;
  const [items, setItems] = useState<string[]>([]);
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useFocusEffect(() => {
    async function getData() {
      try {
        const jsonValue = await AsyncStorage.getItem(variant);
        if (jsonValue && jsonValue !== "[]") {
          const savedItems = JSON.parse(jsonValue);
          setItems(savedItems.map((i: Question) => i.title));
        }
      } catch (e) {
        // error reading value
      }
    }

    getData();
  });

  return (
    <View>
      <SummaryTitleContainer>
        <Typography
          variant="title-2"
          style={{ textDecorationLine: "underline" }}
        >
          {summaryTitles[variant].title}
        </Typography>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              summaryTitles[variant].screen as keyof RootStackParamList
            )
          }
        >
          <Svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <Path
              d="M25.3768 1.54507L7.2628 1.44597L4.08321 2.72331L2.46175 4.88984L2.04332 5.54778L1.06328 8.86227L0.999968 27.5627L2.5994 30.3486L3.99512 31.5489L5.91664 32.2013L9.15404 32.7244L26.467 33.0602L29.9935 31.5681L32.0967 29.52L31.959 28.4987L32.6362 25.6384L32.5454 9.5092L32.0444 6.27179L30.5826 3.0922L30.3541 2.07913L28.2564 2.07638L24.5565 1"
              fill={theme.colors.background}
            />
            <Path
              d="M24.9695 1.3854C20.2868 1.80109 16.5704 1.66345 9.10179 1.3854H24.9695ZM24.9695 1.3854C19.2324 1.58361 13.1871 1.25327 9.10179 1.3854H24.9695ZM9.10179 1.3854C3.29593 1.3799 1.26154 4.44938 1.16795 9.31925L9.10179 1.3854ZM9.10179 1.3854C3.35374 1.9993 1.7901 4.25392 1.16795 9.31925L9.10179 1.3854ZM1.16795 9.31925C0.892657 12.3282 1.59189 16.3887 1.16795 25.1869V9.31925ZM1.16795 9.31925C0.991761 13.2614 1.1707 17.3192 1.16795 25.1869V9.31925ZM1.16795 25.1869C0.702707 30.233 3.67033 33.374 9.10179 33.1208L1.16795 25.1869ZM1.16795 25.1869C1.38267 30.5496 3.60976 33.7181 9.10179 33.1208L1.16795 25.1869ZM9.10179 33.1208C14.9297 32.7161 20.7823 33.2804 24.9695 33.1208H9.10179ZM9.10179 33.1208C13.7762 33.2749 18.825 32.9804 24.9695 33.1208H9.10179ZM24.9695 33.1208C30.1311 33.6273 32.5317 30.8276 32.9033 25.1869L24.9695 33.1208ZM24.9695 33.1208C29.7045 33.6383 32.5179 30.4339 32.9033 25.1869L24.9695 33.1208ZM32.9033 25.1869C33.1731 19.4802 32.7794 13.7211 32.9033 9.31925V25.1869ZM32.9033 25.1869C33.0465 21.3164 32.6445 17.4926 32.9033 9.31925V25.1869ZM32.9033 9.31925C32.7244 4.11903 30.0431 1.02478 24.9695 1.3854L32.9033 9.31925ZM32.9033 9.31925C32.4904 4.16583 30.244 1.82036 24.9695 1.3854Z"
              fill={theme.colors.background}
            />
            <Path
              d="M32.9033 9.31925C32.4904 4.16583 30.244 1.82036 24.9695 1.3854M24.9695 1.3854C20.2868 1.80109 16.5704 1.66345 9.10179 1.3854H24.9695ZM24.9695 1.3854C19.2324 1.58361 13.1871 1.25327 9.10179 1.3854H24.9695ZM9.10179 1.3854C3.29593 1.3799 1.26154 4.44938 1.16795 9.31925L9.10179 1.3854ZM9.10179 1.3854C3.35374 1.9993 1.7901 4.25392 1.16795 9.31925L9.10179 1.3854ZM1.16795 9.31925C0.892657 12.3282 1.59189 16.3887 1.16795 25.1869V9.31925ZM1.16795 9.31925C0.991761 13.2614 1.1707 17.3192 1.16795 25.1869V9.31925ZM1.16795 25.1869C0.702707 30.233 3.67033 33.374 9.10179 33.1208L1.16795 25.1869ZM1.16795 25.1869C1.38267 30.5496 3.60976 33.7181 9.10179 33.1208L1.16795 25.1869ZM9.10179 33.1208C14.9297 32.7161 20.7823 33.2804 24.9695 33.1208H9.10179ZM9.10179 33.1208C13.7762 33.2749 18.825 32.9804 24.9695 33.1208H9.10179ZM24.9695 33.1208C30.1311 33.6273 32.5317 30.8276 32.9033 25.1869L24.9695 33.1208ZM24.9695 33.1208C29.7045 33.6383 32.5179 30.4339 32.9033 25.1869L24.9695 33.1208ZM32.9033 25.1869C33.1731 19.4802 32.7794 13.7211 32.9033 9.31925V25.1869ZM32.9033 25.1869C33.0465 21.3164 32.6445 17.4926 32.9033 9.31925V25.1869ZM32.9033 9.31925C32.7244 4.11903 30.0431 1.02478 24.9695 1.3854L32.9033 9.31925Z"
              stroke={theme.colors.text}
              strokeLinecap="round"
            />
            <Path
              d="M24.4044 13.6156L21.6643 10.8756C21.3067 10.5397 20.8381 10.3469 20.3477 10.334C19.8572 10.3211 19.3791 10.4889 19.0043 10.8056L10.0042 19.8057C9.68098 20.1316 9.47971 20.5589 9.43421 21.0157L9.0042 25.1857C8.99073 25.3322 9.00974 25.4798 9.05986 25.6181C9.10999 25.7564 9.19001 25.8819 9.29421 25.9857C9.38765 26.0784 9.49846 26.1517 9.6203 26.2015C9.74214 26.2513 9.87261 26.2765 10.0042 26.2757H10.0942L14.2643 25.8957C14.7211 25.8502 15.1483 25.649 15.4743 25.3257L24.4744 16.3256C24.8237 15.9566 25.0125 15.4641 24.9994 14.9561C24.9862 14.4482 24.7723 13.9661 24.4044 13.6156V13.6156ZM21.0043 16.9556L18.3243 14.2756L20.2743 12.2756L23.0044 15.0056L21.0043 16.9556Z"
              fill={theme.colors.text}
            />
          </Svg>
        </TouchableOpacity>
      </SummaryTitleContainer>
      <View>
        {items.slice(0, 3).map((item) => (
          <Typography variant="title-3" key={item}>
            • {item}
          </Typography>
        ))}
      </View>
    </View>
  );
};
