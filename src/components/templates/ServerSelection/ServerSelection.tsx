import { useContext } from "react";

import { TextField } from "../../atoms/TextField";
import { Typography } from "../../atoms/Typography";
import { ServerButton } from "../../atoms/ServerButton";
import { SummonerContext } from "../../../context/Summoner/SummonerContext";

import { servers } from "./helpers";
import { ServerSelectionProps } from "./interfaces";
import { Servers, ServerScreenTitle, ServerSelectionContainer } from "./styles";

export const ServerSelection = (props: ServerSelectionProps) => {
  const { title } = props;
  const { server, setServer, summonerName, setSummonerName } =
    useContext(SummonerContext);

  return (
    <ServerSelectionContainer>
      <TextField
        onChangeText={setSummonerName}
        value={summonerName}
        label="Nome de invocador"
        placeholder="Digite aqui"
        hasError
      />
      <Servers>
        {servers.map((s) => (
          <ServerButton
            key={s}
            onPress={() => setServer(s)}
            isSelected={s === server}
          >
            {s}
          </ServerButton>
        ))}
      </Servers>
      <ServerScreenTitle>
        <Typography variant="title-1" style={{ opacity: 0.4 }}>
          {title}
        </Typography>
        <Typography variant="title-1">Servidor e Nome de Invocador</Typography>
      </ServerScreenTitle>
    </ServerSelectionContainer>
  );
};
