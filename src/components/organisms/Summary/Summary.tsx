import { View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Typography } from "../../atoms/Typography";

import { summaryTitles } from "./helpers";
import { SummaryProps } from "./interfaces";
import { SummaryContainer } from "./styles";

export const Summary = (props: SummaryProps) => {
  const { variant } = props;
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const jsonValue = await AsyncStorage.getItem(variant);
        if (jsonValue && jsonValue !== "[]") {
          const savedItems = JSON.parse(jsonValue);
          setItems(savedItems.map((i: Question) => i.title));
        }
      } catch (e) {
        // error reading value
      }
    }

    getData();
  }, [variant]);

  return (
    <SummaryContainer>
      <Typography variant="title-2" style={{ textDecorationLine: "underline" }}>
        {summaryTitles[variant]}
      </Typography>
      <View>
        {items.slice(0, 3).map((item) => (
          <Typography variant="title-3">• {item}</Typography>
        ))}
      </View>
    </SummaryContainer>
  );
};
