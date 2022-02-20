import { useTheme } from "@emotion/react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { Typography } from "../Typography";
import { ButtonProps } from "./interface";
import { StyledSvgContainer } from "./styles";

export const ServerButton = (props: ButtonProps) => {
  const { children, isSelected, ...rest } = props;
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{ width: 66, height: 42, marginTop: 32 }}
      {...rest}
    >
      <StyledSvgContainer style={{ right: isSelected ? -4 : 0 }}>
        <Svg width={66} height={42} viewBox="0 0 66 42" fill="none">
          <Path
            d="M3.92603 40.4636C2.96712 25.9353 2.09589 10.6427 2.07945 1.95388M1 2.60202C17.7452 3.19514 29.4384 1.47694 61.9753 2.29629L1 2.60202ZM3.20822 2.44304C24.0685 3.13399 46.4466 4.49754 64.5123 3.03004L3.20822 2.44304ZM63.8384 1C64.4192 11.5599 63.5315 22.3766 64.0027 37.4307L63.8384 1ZM65 2.36355C64.5397 13.0152 65.3945 22.823 63.5315 39.3201L65 2.36355ZM63.1808 38.195C49.0329 41.7598 36.7151 38.9838 1.22466 38.1155L63.1808 38.195ZM64.4575 38.7943C49.537 39.9071 37.4055 39.583 2.72603 38.9349L64.4575 38.7943ZM2.48493 41.766C4.30411 23.1776 2.70959 9.26692 2.62192 3.3908L2.48493 41.766Z"
            stroke={colors.text}
            stroke-linecap="round"
          />
        </Svg>
      </StyledSvgContainer>
      {isSelected && (
        <StyledSvgContainer>
          <Svg width={64} height={36} viewBox="0 0 64 36" fill="none">
            <Rect width={64} height={36} fill={colors.text} />
          </Svg>
        </StyledSvgContainer>
      )}
      <Typography
        style={{
          paddingHorizontal: 12,
          textAlign: "center",
          paddingVertical: 8,
          color: isSelected ? colors.background : colors.text,
        }}
        variant="button"
      >
        {children}
      </Typography>
    </TouchableOpacity>
  );
};
