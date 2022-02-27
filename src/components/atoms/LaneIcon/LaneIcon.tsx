import { TouchableOpacity } from "react-native";
import { BaseLaneIcon } from "./BaseLaneIcon";
import { LaneIconProps } from "./interfaces";

export const LaneIcon = (props: LaneIconProps) => {
  const { handlePress, lane, ...rest } = props;

  if (handlePress)
    return (
      <TouchableOpacity onPress={() => handlePress(lane)}>
        <BaseLaneIcon lane={lane} {...rest} />
      </TouchableOpacity>
    );

  return <BaseLaneIcon lane={lane} {...rest} />;
};
