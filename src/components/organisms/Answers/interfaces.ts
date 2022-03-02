import { ViewProps } from "react-native";

export interface LaneProps extends ViewProps {
  handleChange: (selectedLane: string) => void;
  initialValue?: string;
}

export interface MultipleChampionsProps extends ViewProps {
  allyChampions: Champion[];
  enemyChampions: Champion[];
  handleChange: (selectedChampions: {
    ally: string[];
    enemy: string[];
  }) => void;
  initialValue?: {
    ally: string[];
    enemy: string[];
  };
}

export interface SingleChampionProps extends ViewProps {
  allyChampions: Champion[];
  enemyChampions: Champion[];
  handleChange: (selectedChampion: string) => void;
  initialValue?: string;
}

export interface TextProps extends ViewProps {
  handleChange: (textValue: string) => void;
  initialValue?: string;
}
export interface YesOrNoProps extends ViewProps {
  handleChange: (response: "yes" | "no") => void;
  initialValue?: "yes" | "no";
}
