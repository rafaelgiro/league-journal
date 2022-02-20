import { useContext } from "react";
import { View } from "react-native";

import { ServerButton } from "../../../components/atoms/ServerButton";
import { TextField } from "../../../components/atoms/TextField";
import { Typography } from "../../../components/atoms/Typography";
import { StartupStep } from "../../../components/templates/StartupStep";
import { SummonerContext } from "../../../context/Summoner/SummonerContext";

import { servers } from "./helpers";

export const StartupFirstStep = () => {
  const { server, setServer, summonerName, setSummonerName } =
    useContext(SummonerContext);

  return (
    <StartupStep step={0}>
      <TextField
        onChangeText={setSummonerName}
        value={summonerName}
        label="Summoner Name"
        placeholder="Type here"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: 32,
        }}
      >
        {servers.map((s) => (
          <ServerButton
            key={s}
            onPress={() => setServer(s)}
            isSelected={s === server}
          >
            {s}
          </ServerButton>
        ))}
      </View>
      <View style={{ marginTop: 24 }}>
        <Typography variant="title-1" style={{ opacity: 0.4 }}>
          Start with your
        </Typography>
        <Typography variant="title-1">Server and Summoner Name</Typography>
      </View>
    </StartupStep>
  );
};
