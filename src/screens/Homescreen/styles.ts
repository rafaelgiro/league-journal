import styled from '@emotion/native';

export const FindGame = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.text};
  padding: 8px 24px;
  border-radius: 8px;
  margin: auto;
`;

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;
