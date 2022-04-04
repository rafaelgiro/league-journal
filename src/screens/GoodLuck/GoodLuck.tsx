import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import Svg, { Path } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Typography } from '../../components/atoms/Typography';

import { GoodLuckContainer, GoodLuckReminder, GoodLuckTitle } from './styles';
import { Wrapper } from '../../components/templates/Wrapper';

export const GoodLuckScreen = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const theme = useTheme();

  useEffect(() => {
    async function getData() {
      try {
        const jsonValue = await AsyncStorage.getItem('reminders');
        if (jsonValue && jsonValue !== '[]')
          setReminders(JSON.parse(jsonValue));
      } catch (e) {
        // todo: error reading value
      }
    }

    getData();
  }, []);

  return (
    <Wrapper homeButton>
      <GoodLuckContainer>
        <GoodLuckTitle>
          <Typography
            variant="title-1"
            style={{ textDecorationLine: 'underline', textAlign: 'center' }}
          >
            BOM JOGO, SE DIVIRTA!
          </Typography>
          <Typography variant="title-3" style={{ textAlign: 'center' }}>
            Aqui estão seus lembretes para essa partida
          </Typography>
        </GoodLuckTitle>
        {reminders.map((r) => (
          <GoodLuckReminder key={r.id}>
            <Svg width="22" height="44" viewBox="0 0 22 44" fill="none">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 7.73797C4.09826 5.75869 8.26136 5.21123 16.2627 1.03008L1 7.73797ZM1.51136 7.69585C5.60829 5.09692 9.79545 3.92981 15.0956 1.9746L1.51136 7.69585ZM15.986 1C16.1664 11.4739 15.5348 19.3249 12.7854 31.5555L15.986 1ZM16.0582 2.14906C15.5167 8.33355 15.0775 15.1979 13.6217 30.9118L16.0582 2.14906ZM14.1811 30.3523C12.0936 25.6598 7.68382 21.2861 1.28275 8.09291L14.1811 30.3523ZM13.7721 30.244C8.94719 21.5869 5.28944 13.748 1.62567 7.77406L13.7721 30.244Z"
                stroke={theme.colors.text}
                strokeLinecap="round"
              />
              <Path
                d="M15.9631 33.7158C16.7091 33.788 17.7438 34.6122 18.3214 35.3281C18.8929 36.038 19.2719 37.1871 19.4103 37.9872C19.5547 38.7873 19.6449 39.4431 19.1756 40.1229C18.7064 40.8027 17.4069 41.6089 16.6008 42.0721C15.7946 42.5353 15.0787 43.155 14.3387 42.8903C13.5988 42.6196 12.7144 41.5066 12.1609 40.4598C11.6075 39.407 10.7532 37.5902 11.0179 36.5915C11.2766 35.5928 13.0212 34.889 13.7371 34.4618C14.447 34.0347 14.9283 34.167 15.3013 34.0226C15.6683 33.8783 15.9811 33.6978 15.9631 33.5955M15.6502 33.0119C16.4805 32.8796 17.3889 33.4631 18.195 34.0407C19.0072 34.6182 20.1924 35.4063 20.5112 36.4712C20.8301 37.536 20.6797 39.401 20.1081 40.4357C19.5366 41.4705 18.1288 42.2767 17.0821 42.6737C16.0293 43.0708 14.6756 43.0888 13.8153 42.8181C12.9551 42.5534 12.3354 41.9037 11.9263 41.0614C11.5172 40.2252 11.3367 38.7753 11.3668 37.7947C11.3969 36.8141 11.451 35.8696 12.0948 35.1837C12.7445 34.5039 14.6636 33.9023 15.2411 33.6978C15.8187 33.4872 15.5901 33.8482 15.56 33.9444L15.6502 33.0119Z"
                stroke={theme.colors.text}
                strokeLinecap="round"
              />
            </Svg>
            <Typography variant="title-2" style={{ marginLeft: 8 }}>
              {r.title}
            </Typography>
          </GoodLuckReminder>
        ))}
      </GoodLuckContainer>
    </Wrapper>
  );
};
