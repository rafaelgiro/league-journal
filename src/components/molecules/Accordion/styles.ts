import styled, { css } from "@emotion/native";

export const AccordionArrow = styled.View<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    !isOpen
      ? css`
          transform: rotate(180deg);
        `
      : ""}
`;

export const AccordionItemContainer = styled.View`
  margin: 8px 0;
`;

export const DividerContainer = styled.View`
  align-items: center;
  margin-bottom: 8px;
`;

export const AccordtionItemHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
`;
