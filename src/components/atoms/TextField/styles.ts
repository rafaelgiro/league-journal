import styled from "@emotion/native";

export const StyledTextField = styled.TextInput`
  color: ${(props) => props.theme.colors.text};
  font-family: "PatrickHand_400Regular";
  font-size: 18px;
  margin-bottom: -6px;
  letter-spacing: 2px;
`;

export const TextFieldContainer = styled.View`
  margin-bottom: -104px;
`;
