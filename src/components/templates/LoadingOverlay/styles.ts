import styled from "@emotion/native";

export const LoadingContainer = styled.View<{ isOpen: boolean }>`
  position: absolute;
  flex: 1;
  height: 110%;
  width: 100%;
  background-color: red;
  z-index: 100;
  justify-content: center;
  align-items: center;
`;
