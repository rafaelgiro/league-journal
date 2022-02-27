import { View } from "react-native";
import { Typography } from "../Typography";
import { BottomLane } from "./BottomLane";
import { lanes } from "./helpers";
import { LaneIconProps } from "./interfaces";
import { Jungle } from "./Jungle";
import { MidLane } from "./MidLane";
import { LaneIconContainer } from "./styles";
import { TopLane } from "./TopLane";

export const BaseLaneIcon = (props: LaneIconProps) => {
  const { lane } = props;

  function renderIcon() {
    switch (lane) {
      case "bot":
        return <BottomLane />;

      case "mid":
        return <MidLane />;

      case "top":
        return <TopLane />;

      default:
        return <Jungle />;
    }
  }

  return (
    <LaneIconContainer>
      <View style={{ height: 56 }}>{renderIcon()}</View>
      <Typography variant="body-1">{lanes[lane]}</Typography>
    </LaneIconContainer>
  );
};
