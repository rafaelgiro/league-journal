import styled, { css } from "@emotion/native";

export const AccordionArrow = styled.View<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    !isOpen
      ? css`
          transform: rotate(180deg);
        `
      : ""}
`;

export const AccordionItemContainer = styled.View``;

export const AccordtionItemHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;
