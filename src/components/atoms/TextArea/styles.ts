import styled from '@emotion/native';

export const StyledTextArea = styled.TextInput`
  color: ${(props) => props.theme.colors.text};
  font-family: 'PatrickHand_400Regular';
  font-size: 18px;
  letter-spacing: 2px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.text};
  border-radius: 24px;
  flex: 1;
  text-align-vertical: top;
  padding: 12px;
`;

export const TextAreaContainer = styled.View``;
