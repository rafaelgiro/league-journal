import { useState } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { AddButton } from "../../../components/atoms/AddButton";

import { ChampionPortrait } from "../../../components/atoms/ChampionPortrait/ChampionPortrait";
import { Checkbox } from "../../../components/atoms/Checkbox";
import { LaneIcon } from "../../../components/atoms/LaneIcon";
import { RadioButton } from "../../../components/atoms/RadioButton";
import { YesNoButton } from "../../../components/atoms/YesNoButton";
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

  return (
    <StartupStep step={1}>
      <View
        style={{
          marginTop: 24,
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <ChampionPortrait
          championId="Sion"
          championName="Sion"
          handlePress={handlePress}
          isActive={activeChampions.includes("Sion")}
        />
        <ChampionPortrait
          championId="Ivern"
          championName="Ivern"
          handlePress={handlePress}
          isActive={activeChampions.includes("Ivern")}
        />
        <ChampionPortrait
          championId="AurelionSol"
          championName="Aurelion Sol"
          handlePress={handlePress}
          isActive={activeChampions.includes("AurelionSol")}
        />
        <ChampionPortrait
          championId="Jhin"
          championName="Jhin"
          handlePress={handlePress}
          isActive={activeChampions.includes("Jhin")}
        />
        <ChampionPortrait
          championId="Bard"
          championName="Bard"
          handlePress={handlePress}
          isActive={activeChampions.includes("Bard")}
        />
        <ChampionPortrait
          championId="Trundle"
          championName="Trundle"
          handlePress={handlePress}
          isActive={activeChampions.includes("Trundle")}
        />
      </View>
      <View>
        <Checkbox
          label="POST-GAME"
          handlePress={(isChecked) => setIsPostGame(isChecked)}
          isChecked={isPostGame}
          style={{ opacity: isPostGame ? 1 : 0.3 }}
        />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
      >
        <RadioButton
          label="Text"
          name="text"
          handlePress={() => setTypeOfAnswer("text")}
          isChecked={typeOfAnswer === "text"}
        />
        <RadioButton
          label="Multiple Champions"
          name="multiple"
          handlePress={() => setTypeOfAnswer("multiple")}
          isChecked={typeOfAnswer === "multiple"}
        />
        <RadioButton
          label="Single Champion"
          name="single"
          handlePress={() => setTypeOfAnswer("single")}
          isChecked={typeOfAnswer === "single"}
        />
        <RadioButton
          label="Yes/No"
          name="yesno"
          handlePress={() => setTypeOfAnswer("yesno")}
          isChecked={typeOfAnswer === "yesno"}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <LaneIcon lane="top" />
        <LaneIcon lane="jungle" />
        <LaneIcon lane="mid" />
        <LaneIcon lane="bot" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <YesNoButton
          isChecked={yesNo === "yes"}
          handlePress={() => setYesNo("yes")}
          type="yes"
        />
        <YesNoButton
          isChecked={yesNo === "no"}
          handlePress={() => setYesNo("no")}
          type="no"
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <AddButton handlePress={() => {}} />
      </View>
    </StartupStep>
  );
};
