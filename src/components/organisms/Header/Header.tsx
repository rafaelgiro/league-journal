import { useContext } from 'react';
import { useTheme } from '@emotion/react';

import { ThemeIcon } from './ThemeIcon';
import { Typography } from '../../atoms/Typography';
import { LoadingOverlay } from '../../templates/LoadingOverlay/LoadingOverlay';
import { SummonerContext } from '../../../context/Summoner/SummonerContext';
import { servers } from '../../templates/ServerSelection/helpers';

import { HeaderButton, DefaultHeader, HeaderContent } from './styles';
import { HeaderProps } from './interfaces';
import { HeaderAction } from './HeaderAction';

export const Header = (props: HeaderProps) => {
  const { themeName, setIsDark } = useTheme();
  const { server, summonerName } = useContext(SummonerContext);
  const serverLabel = servers.find((s) => s.riot === server)?.label;

  return (
    <DefaultHeader>
      <LoadingOverlay />
      <HeaderContent>
        <HeaderAction
          summonerName={summonerName}
          serverLabel={serverLabel}
          {...props}
        />
        <HeaderButton onPress={() => setIsDark((t) => !t)}>
          <Typography variant="eyebrown" style={{ marginRight: 4 }}>
            {themeName === 'light' ? 'Solari' : 'Lunari'}
          </Typography>
          <ThemeIcon themeName={themeName} />
        </HeaderButton>
      </HeaderContent>
    </DefaultHeader>
  );
};
