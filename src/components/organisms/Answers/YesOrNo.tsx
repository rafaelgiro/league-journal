import { useEffect, useState } from "react";
import { YesNoButton } from "../../atoms/YesNoButton";
import { YesOrNoProps } from "./interfaces";
import { YesOrNoContainer } from "./styles";

export const YesOrNo = (props: YesOrNoProps) => {
  const { handleChange } = props;
  const [answer, setAnswer] = useState<"yes" | "no">("yes");

  useEffect(() => {
    handleChange(answer);
  }, [answer]);

  return (
    <YesOrNoContainer>
      <YesNoButton
        type="yes"
        handlePress={() => setAnswer("yes")}
        isChecked={answer === "yes"}
      />
      <YesNoButton
        type="no"
        handlePress={() => setAnswer("no")}
        isChecked={answer === "no"}
      />
    </YesOrNoContainer>
  );
};
