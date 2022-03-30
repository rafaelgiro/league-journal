import styled from '@emotion/native';

export const ActionContainer = styled.View`
  margin-top: 16px;
  margin-bottom: auto;
  justify-content: center;
  align-items: center;
`;

export const FinishButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.text};
  padding: 12px 24px;
  border-radius: 8px;
  margin-top: 32px;
`;
