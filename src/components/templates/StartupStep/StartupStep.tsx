import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Indicator } from "./Indicator";
import { NextStepButton } from "./NextStepButton";

import { StartupStepProps } from "./interfaces";
import { StepNavigation } from "./styles";
import {
  Children,
  cloneElement,
  isValidElement,
  useContext,
  useState,
} from "react";

import { getAccountData } from "../../../utils/getAccountData";
import { SummonerContext } from "../../../context/Summoner/SummonerContext";
import { UIContext } from "../../../context/UI/UIContext";

export const StartupStep = (props: StartupStepProps) => {
  const { children, step } = props;
  const [hasError, setHasError] = useState(false);
  const { setIsLoading } = useContext(UIContext);
  const { server, summonerName } = useContext(SummonerContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  async function handleNavigation() {
    if (step === 0) {
      setIsLoading({ open: true, text: "Validando nome e região..." });
      try {
        const res = await getAccountData(summonerName, server);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log("deu ruiiiimmmm", error);
      } finally {
        setIsLoading({ open: false, text: "" });
      }
    }

    const screens = [
      "FirstStep",
      "SecondStep",
      "ThirdStep",
    ] as (keyof RootStackParamList)[];
    navigation.navigate(screens[step + 1]);
  }

  function renderChildrenWithProps() {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, { hasError });
      }
    });
  }

  return (
    <>
      {renderChildrenWithProps()}
      <StepNavigation>
        <Indicator active={step === 0} />
        <Indicator active={step === 1} />
        <Indicator active={step === 2} />
        <NextStepButton handleNavigation={handleNavigation} />
      </StepNavigation>
    </>
  );
};
