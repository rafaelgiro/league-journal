import styled, { css } from "@emotion/native";

import { variants } from "./helpers";
import { TypographyProps } from "./interfaces";

export const BaseTypography = styled.Text<TypographyProps>`
  ${({ variant, theme, hasError }) => css`
    font-family: ${variants[variant].fontFamily};
    font-size: ${variants[variant].fontSize};
    letter-spacing: ${variants[variant].letterSpacing};
    color: ${hasError ? theme.colors.error : theme.colors.text};
    text-transform: ${variants[variant].textTransform};
  `}
`;
