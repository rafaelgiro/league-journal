import { useTheme } from '@emotion/react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { ServerButton } from '../../atoms/ServerButton';
import { Typography } from '../../atoms/Typography';

import { HeaderActionProps } from './interfaces';
import { CurrentServer, HeaderButton } from './styles';

export const HeaderAction = (props: HeaderActionProps) => {
  const { isIntro, backButton, serverLabel, summonerName } = props;
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  if (backButton)
    return (
      <HeaderButton onPress={navigation.goBack}>
        <Svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <Path
            d="M4.57143 13.5444C5.88889 8.98887 9.73016 4.48093 12.3016 3.59204M13.2857 23.9095C10.0317 23.1158 6.95238 19.0047 3.71429 13.2905L13.2857 23.9095ZM15.2698 24.1C11.7778 21.1476 8.84127 15.9571 2.55556 12.719L15.2698 24.1ZM2 15.8778C5.19048 10.2587 11.4762 7.78252 16 1.79839L2 15.8778Z"
            stroke={theme.colors.text}
            stroke-width="4"
            stroke-linecap="round"
          />
        </Svg>

        <Typography variant="body-1" style={{ marginLeft: 4 }}>
          VOLTAR
        </Typography>
      </HeaderButton>
    );

  if (!isIntro && serverLabel && summonerName && summonerName !== '')
    return (
      <TouchableOpacity onPress={() => navigation.navigate('SummonerConfig')}>
        <CurrentServer>
          <ServerButton
            style={{ transform: [{ scale: 0.75 }], marginLeft: -4 }}
            isSelected={false}
            onPress={() => {}}
          >
            {serverLabel}
          </ServerButton>
          <Typography variant="body-1">{summonerName}</Typography>
        </CurrentServer>
      </TouchableOpacity>
    );

  return <View />;
};
