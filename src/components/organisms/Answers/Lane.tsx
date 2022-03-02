import { useEffect, useState } from "react";
import { LaneIcon } from "../../atoms/LaneIcon";
import { lanes } from "../../atoms/LaneIcon/helpers";
import { LaneIconProps } from "../../atoms/LaneIcon/interfaces";
import { LaneProps } from "./interfaces";
import { LaneContainer } from "./styles";

export const LaneAnswer = (props: LaneProps) => {
  const { handleChange } = props;
  const [selectedLane, setSelectedLane] =
    useState<LaneIconProps["lane"]>("top");

  useEffect(() => {
    handleChange(selectedLane);
  }, [selectedLane]);

  return (
    <LaneContainer>
      {Object.keys(lanes).map((lane) => (
        <LaneIcon
          key={lane}
          lane={lane as LaneIconProps["lane"]}
          handlePress={() => setSelectedLane(lane as LaneIconProps["lane"])}
          style={{ opacity: selectedLane === lane ? 1 : 0.2 }}
        />
      ))}
    </LaneContainer>
  );
};
