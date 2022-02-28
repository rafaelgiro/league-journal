import { TouchableOpacity } from "react-native";

import { PortraitBase } from "./PortraitBase";

import { ChampionPortraitProps } from "./interfaces";

export const ChampionPortrait = (props: ChampionPortraitProps) => {
  const { handlePress, ...rest } = props;

  if (handlePress)
    return (
      <TouchableOpacity onPress={() => handlePress(props.championId)}>
        <PortraitBase {...rest} />
      </TouchableOpacity>
    );

  return <PortraitBase {...rest} />;
};
