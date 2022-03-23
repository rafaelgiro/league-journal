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

import { getAccount } from "../../../utils/getAccount";
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
    const screens = [
      "FirstStep",
      "SecondStep",
      "ThirdStep",
      "Homescreen",
    ] as (keyof RootStackParamList)[];

    if (step === 0) {
      setIsLoading({ open: true, text: "Validando nome e região..." });

      try {
        if (!summonerName) {
          setHasError(true);
          setIsLoading({ open: false, text: "" });
        } else {
          const res = await getAccount(summonerName, server);
          const data = await res?.json();
          if (data.status?.status_code === 404 || summonerName === "")
            setHasError(true);
          else {
            setHasError(false);
            setIsLoading({ open: false, text: "" });
            navigation.navigate(screens[step + 1]);
          }
        }
      } catch (error) {
        // lida com chamad ade api falha
        setIsLoading({ open: false, text: "" });
      }
    } else {
      navigation.navigate(screens[step + 1]);
    }
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
