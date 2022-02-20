import styled, { css } from "@emotion/native";

export const MainContainer = styled.View`
  flex: 1;
  padding: 8px 20px;
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.background};
    `}
`;

export const ColoredContainer = styled.View`
  height: 100%;
  padding-top: 15%;
  padding-bottom: 10%;
  justify-content: space-between;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.background};
    `}
`;
