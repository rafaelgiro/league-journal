import { ScrollView } from "react-native";
import { Typography } from "../../atoms/Typography";
import { Match } from "./Match";
import { MatchHistoryContainer } from "./styles";

export const MatchHistory = () => {
  const matches = [
    { championId: "Ivern", kda: "0/2/13", date: new Date() },
    { championId: "AurelionSol", kda: "1/7/2", date: new Date() },
    { championId: "Ivern", kda: "0/0/43", date: new Date() },
    { championId: "Sion", kda: "2/2/2", date: new Date() },
  ];

  return (
    <MatchHistoryContainer>
      <Typography variant="title-2" style={{ textDecorationLine: "underline" }}>
        RECENT GAMES
      </Typography>
      <ScrollView horizontal>
        {matches.map((m, i) => (
          <Match key={`${m.date.toISOString()}-${i}`} {...m} />
        ))}
      </ScrollView>
    </MatchHistoryContainer>
  );
};
