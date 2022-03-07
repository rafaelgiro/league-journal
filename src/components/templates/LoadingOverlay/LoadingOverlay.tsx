import { useContext } from "react";

import { UIContext } from "../../../context/UI/UIContext";
import { Typography } from "../../atoms/Typography";
import { LoadingContainer } from "./styles";

export const LoadingOverlay = () => {
  const { isLoading, setIsLoading } = useContext(UIContext);

  return (
    <LoadingContainer isOpen={isLoading.open}>
      <Typography variant="title-3">Carregando</Typography>
    </LoadingContainer>
  );
};
