import { TouchableOpacity } from "react-native";
import { ChampionPortraitProps } from "./interfaces";
import { PortraitBase } from "./PortraitBase";

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
