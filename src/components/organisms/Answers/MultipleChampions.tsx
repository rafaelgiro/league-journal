import { useEffect, useState } from "react";
import { ChampionPortrait } from "../../atoms/ChampionPortrait";
import { Typography } from "../../atoms/Typography";
import { MultipleChampionsProps } from "./interfaces";
import { ChampionsContainer, Portraits, Team } from "./styles";

export const MultipleChampionsAnswer = (props: MultipleChampionsProps) => {
  const { allyChampions, enemyChampions, handleChange, initialValue } = props;
  const [selectedAlliedChampions, setSelectedAlliedChampions] = useState<
    string[]
  >(initialValue?.ally || []);
  const [selectedEnemyChampions, setSelectedEnemyChampions] = useState<
    string[]
  >(initialValue?.enemy || []);

  function handleAllyPress(champion: string) {
    if (selectedAlliedChampions.includes(champion)) {
      setSelectedAlliedChampions(
        selectedAlliedChampions.filter((c) => c !== champion)
      );
    } else {
      setSelectedAlliedChampions([...selectedAlliedChampions, champion]);
    }
  }

  function handleEnemyPress(champion: string) {
    if (selectedEnemyChampions.includes(champion)) {
      setSelectedEnemyChampions(
        selectedEnemyChampions.filter((c) => c !== champion)
      );
    } else {
      setSelectedEnemyChampions([...selectedEnemyChampions, champion]);
    }
  }

  useEffect(() => {
    handleChange({
      ally: selectedAlliedChampions,
      enemy: selectedEnemyChampions,
    });
  }, [selectedAlliedChampions, selectedEnemyChampions]);

  return (
    <ChampionsContainer>
      <Team>
        <Typography variant="title-2" style={{ textAlign: "center" }}>
          MEU TIME
        </Typography>
        <Portraits>
          {allyChampions.map((champion) => (
            <ChampionPortrait
              key={`ally-${champion.id}`}
              championId={champion.id}
              championName={champion.name}
              handlePress={handleAllyPress}
              isActive={selectedAlliedChampions.includes(champion.id)}
            />
          ))}
        </Portraits>
      </Team>
      <Team>
        <Typography variant="title-2" style={{ textAlign: "center" }}>
          TIME INIMIGO
        </Typography>
        <Portraits>
          {enemyChampions.map((champion) => (
            <ChampionPortrait
              key={`enemy-${champion.id}`}
              championId={champion.id}
              championName={champion.name}
              handlePress={handleEnemyPress}
              isActive={selectedEnemyChampions.includes(champion.id)}
            />
          ))}
        </Portraits>
      </Team>
    </ChampionsContainer>
  );
};
