import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { ActivityIndicator } from "react-native";

import { UIContext } from "../../../context/UI/UIContext";
import { Typography } from "../../atoms/Typography";
import { LoadingContainer } from "./styles";

export const LoadingOverlay = () => {
  const { isLoading } = useContext(UIContext);
  const theme = useTheme();

  if (isLoading.open)
    return (
      <LoadingContainer>
        <ActivityIndicator
          size="small"
          color={theme.colors.text}
          style={{ marginRight: 8 }}
        />
        <Typography variant="title-3">{isLoading.text}</Typography>
      </LoadingContainer>
    );

  return null;
};
