export interface QuestionsScreenProps {
  // TODO: Add right Generic interface from React Navigation
  route?: {
    params: {
      allyChampions?: Champion[];
      enemyChampions?: Champion[];
      isAnswering?: boolean;
    };
  };
}
