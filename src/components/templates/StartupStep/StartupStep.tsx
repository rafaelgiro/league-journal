import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Indicator } from "./Indicator";
import { NextStepButton } from "./NextStepButton";

import { StartupStepProps } from "./interfaces";
import { StepNavigation } from "./styles";
import { ScrollView } from "react-native";

export const StartupStep = (props: StartupStepProps) => {
  const { children, step } = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function handleNavigation() {
    const screens = [
      "FirstStep",
      "SecondStep",
      "ThirdStep",
    ] as (keyof RootStackParamList)[];
    navigation.navigate(screens[step + 1]);
  }

  return (
    <>
      {children}
      <StepNavigation>
        <Indicator active={step === 0} />
        <Indicator active={step === 1} />
        <Indicator active={step === 2} />
        <NextStepButton handleNavigation={handleNavigation} />
      </StepNavigation>
    </>
  );
};
