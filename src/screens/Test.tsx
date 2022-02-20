import { Text, View } from "react-native";
import { ServerButton } from "../components/atoms/ServerButton";
import { TextField } from "../components/atoms/TextField";
import { useState } from "react";
import { Typography } from "../components/atoms/Typography";

export const Test = () => {
  const [text, setText] = useState("");
  const [server, setServer] = useState("");

  const servers = [
    "BR",
    "KR",
    "JP",
    "NA",
    "EUW",
    "EUNE",
    "OCE",
    "LAS",
    "LAN",
    "RU",
    "TR",
  ];

  return (
    <View
      style={{
        height: "100%",
        marginTop: 80,
      }}
    >
      <TextField
        onChangeText={setText}
        value={text}
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
      <View style={{ marginTop: 64 }}>
        <Typography variant="title-1" style={{ opacity: 0.3 }}>
          Start with your
        </Typography>
        <Typography variant="title-1">Server and Summoner Name</Typography>
      </View>
    </View>
  );
};
