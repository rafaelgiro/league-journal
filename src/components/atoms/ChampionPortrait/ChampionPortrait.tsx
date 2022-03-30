import { TouchableOpacity } from 'react-native';

import { PortraitBase } from './PortraitBase';

import { ChampionPortraitProps } from './interfaces';

export const ChampionPortrait = (props: ChampionPortraitProps) => {
  const { handlePress, ...other } = props;

  if (handlePress)
    return (
      <TouchableOpacity onPress={() => handlePress(props.championId)}>
        <PortraitBase {...other} />
      </TouchableOpacity>
    );

  return <PortraitBase {...other} />;
};
