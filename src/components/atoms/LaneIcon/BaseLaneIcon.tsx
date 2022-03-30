import { View } from 'react-native';

import { Typography } from '../Typography';
import { BottomLane } from './BottomLane';
import { Jungle } from './Jungle';
import { MidLane } from './MidLane';
import { TopLane } from './TopLane';

import { lanes } from './helpers';
import { LaneIconProps } from './interfaces';
import { LaneIconContainer } from './styles';

export const BaseLaneIcon = (props: LaneIconProps) => {
  const { lane, ...other } = props;

  function renderIcon() {
    switch (lane) {
      case 'bot':
        return <BottomLane />;

      case 'mid':
        return <MidLane />;

      case 'top':
        return <TopLane />;

      default:
        return <Jungle />;
    }
  }

  return (
    <LaneIconContainer {...other}>
      <View style={{ height: 56 }}>{renderIcon()}</View>
      <Typography variant="body-1">{lanes[lane]}</Typography>
    </LaneIconContainer>
  );
};
