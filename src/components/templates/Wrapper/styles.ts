import styled, { css } from "@emotion/native";

export const MainContainer = styled.View`
  flex: 1;
  padding: 8px 20px;
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.background};
    `}
`;
