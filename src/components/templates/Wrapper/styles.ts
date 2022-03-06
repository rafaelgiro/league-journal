import styled, { css } from "@emotion/native";

export const MainContainer = styled.View`
  flex: 1;
  padding: 24px 0;
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.background};
    `}
`;
