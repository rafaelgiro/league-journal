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
      <View style={{ justifyContent: "space-between", height: "90%" }}>
        <TextField
          onChangeText={setSummonerName}
          value={summonerName}
          label="Nome de invocador"
          placeholder="Digite aqui"
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
        <View style={{ marginTop: 24, marginBottom: 62 }}>
          <Typography variant="title-1" style={{ opacity: 0.4 }}>
            Comece com seu
          </Typography>
          <Typography variant="title-1">
            Servidor e Nome de Invocador
          </Typography>
        </View>
      </View>
    </StartupStep>
  );
};
