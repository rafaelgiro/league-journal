import styled from '@emotion/native';

export const LoadingContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
