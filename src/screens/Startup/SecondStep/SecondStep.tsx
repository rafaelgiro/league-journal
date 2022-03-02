import { useState } from "react";
import { ScrollView, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { AddButton } from "../../../components/atoms/AddButton";

import { ChampionPortrait } from "../../../components/atoms/ChampionPortrait/ChampionPortrait";
import { Checkbox } from "../../../components/atoms/Checkbox";
import { LaneIcon } from "../../../components/atoms/LaneIcon";
import { RadioButton } from "../../../components/atoms/RadioButton";
import { TextArea } from "../../../components/atoms/TextArea";
import { YesNoButton } from "../../../components/atoms/YesNoButton";
import {
  Accordion,
  AccordionItem,
} from "../../../components/molecules/Accordion";
import { MultipleChampionsAnswer } from "../../../components/organisms/Answers/MultipleChampions";
import { Question } from "../../../components/organisms/Question";
import { StartupStep } from "../../../components/templates/StartupStep";

export const StartupSecondStep = () => {
  const [activeChampions, setActionChampions] = useState<string[]>([]);
  const [isPostGame, setIsPostGame] = useState(false);
  const [typeOfAnswer, setTypeOfAnswer] = useState("text");
  const [yesNo, setYesNo] = useState("yes");

  function handlePress(championId: string) {
    if (activeChampions.includes(championId)) {
      setActionChampions(activeChampions.filter((c) => c !== championId));
    } else {
      setActionChampions([...activeChampions, championId]);
    }
  }

  const allyChampions: Champion[] = [
    { key: "Sion-ally", id: "Sion", name: "Sion" },
    { key: "Ivern-ally", id: "Ivern", name: "Ivern" },
    { key: "AurelionSol-ally", id: "AurelionSol", name: "Aurelion Sol" },
    { key: "Jhin-ally", id: "Jhin", name: "Jhin" },
    { key: "Bard-ally", id: "Bard", name: "Bard" },
  ];

  const enemyChampions: Champion[] = [
    { key: "Poppy-ally", id: "Poppy", name: "Poppy" },
    { key: "Nunu-ally", id: "Nunu", name: "Nunu and Willump" },
    { key: "Galio-ally", id: "Galio", name: "Galio" },
    { key: "MissFortune-ally", id: "MissFortune", name: "Miss Fortune" },
    { key: "Swain-ally", id: "Swain", name: "Swain" },
  ];

  return (
    <StartupStep step={1}>
      <Accordion>
        <Question
          id="multiple-1"
          type="multiple-champions"
          title="Hello there"
          isAnswering={false}
          allyChampions={allyChampions}
          enemyChampions={enemyChampions}
          handleChange={console.log}
        />
      </Accordion>
    </StartupStep>
  );
};
