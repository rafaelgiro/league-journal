import { TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@emotion/react";
import Collapsible from "react-native-collapsible";

import { Typography } from "../../atoms/Typography";

import { AccordionItemProps } from "./interfaces";
import {
  AccordionArrow,
  AccordionItemContainer,
  AccordtionItemHeader,
} from "./styles";

export const AccordionItem = (props: AccordionItemProps) => {
  const { handlePress, isOpen, title, children, ...other } = props;
  const theme = useTheme();

  if (!handlePress) return null;

  return (
    <AccordionItemContainer {...other}>
      <TouchableOpacity onPress={() => handlePress()}>
        <AccordtionItemHeader>
          <Typography variant="title-2">{title}</Typography>
          <AccordionArrow isOpen={isOpen!}>
            <Svg width="13" height="9" viewBox="0 0 13 9" fill="none">
              <Path
                d="M6.79193 6.71437C4.54211 6.05578 2.32343 4.13521 1.87969 2.84958M11.9066 2.35662C11.5096 3.98141 9.48549 5.52338 6.66737 7.13634L11.9066 2.35662ZM12 1.3707C10.5403 3.1138 7.97912 4.58479 6.38323 7.72L12 1.3707ZM7.9402 8C5.16879 6.40282 3.94657 3.25972 1 1L7.9402 8Z"
                stroke={theme.colors.text}
                stroke-linecap="round"
              />
            </Svg>
          </AccordionArrow>
        </AccordtionItemHeader>
      </TouchableOpacity>
      <Collapsible collapsed={!isOpen}>{children}</Collapsible>
    </AccordionItemContainer>
  );
};
