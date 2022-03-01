import { TouchableOpacity } from "react-native";
import { BaseLaneIcon } from "./BaseLaneIcon";
import { LaneIconProps } from "./interfaces";

export const LaneIcon = (props: LaneIconProps) => {
  const { handlePress, lane, ...other } = props;

  if (handlePress)
    return (
      <TouchableOpacity onPress={() => handlePress(lane)}>
        <BaseLaneIcon lane={lane} {...other} />
      </TouchableOpacity>
    );

  return <BaseLaneIcon lane={lane} {...other} />;
};
