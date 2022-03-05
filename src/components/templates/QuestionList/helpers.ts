import { QuestionProps } from "../../../components/organisms/Question/interfaces";

const allyChampions: Champion[] = [
  { key: "Sion-ally", id: "Sion", name: "Sion" },
  { key: "Ivern-ally", id: "Ivern", name: "Ivern" },
  { key: "AurelionSol-ally", id: "AurelionSol", name: "Aurelion Sol" },
  { key: "Jhin-ally", id: "Jhin", name: "Jhin" },
  { key: "Bard-ally", id: "Bard", name: "Bard" },
];

const enemyChampions: Champion[] = [
  { key: "Poppy-ally", id: "Poppy", name: "Poppy" },
  { key: "Nunu-ally", id: "Nunu", name: "Nunu and William" },
  { key: "Galio-ally", id: "Galio", name: "Galio" },
  { key: "MissFortune-ally", id: "MissFortune", name: "Miss Fortune" },
  { key: "Swain-ally", id: "Swain", name: "Swain" },
];

export const initialQuestion: Omit<QuestionProps, "isAnswering"> = {
  id: 0,
  isActive: true,
  type: "multiple-champions",
  title: "Quem tem prioridade no início do jogo?",
  handleChange: () => {},
  allyChampions,
  enemyChampions,
  isPreGame: true,
  isPostGame: false,
};
