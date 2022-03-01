import { useTheme } from "@emotion/react";
import { Path, Svg } from "react-native-svg";
import { IndicatorProps } from "./interfaces";

export const Indicator = (props: IndicatorProps) => {
  const { active } = props;
  const theme = useTheme();

  return (
    <Svg
      width="34"
      height="10"
      viewBox="0 0 34 10"
      fill="none"
      style={{ opacity: active ? 1 : 0.4, marginRight: 8 }}
    >
      <Path
        d="M5.21066 5.30412C4.93611 5.96029 5.30127 4.25534 5.75427 4.76051M5.75427 4.76051C11.9015 5.49356 17.3925 5.66653 30.2139 4.76051H5.75427ZM5.75427 4.76051C14.4163 5.26019 23.6275 4.42556 30.2139 4.76051H5.75427ZM30.2139 4.76051C30.1892 5.71869 30.343 5.10095 30.7576 5.30412L30.2139 4.76051ZM30.2139 4.76051C30.3787 3.86822 30.1014 3.7584 30.7576 5.30412L30.2139 4.76051ZM30.7576 5.30412C30.9827 5.85871 30.807 5.94657 30.7576 6.39408V5.30412ZM30.7576 5.30412C30.8564 5.58691 30.8482 6.03991 30.7576 6.39408V5.30412ZM30.7576 6.39408C31.0925 6.17444 31.216 6.5945 30.2139 6.93769L30.7576 6.39408ZM30.7576 6.39408C30.4391 5.63632 31.2435 6.84435 30.2139 6.93769L30.7576 6.39408ZM30.2139 6.93769C22.0269 6.77296 12.9365 7.08046 5.75427 6.93769H30.2139ZM30.2139 6.93769C24.3084 6.97064 18.2216 6.83336 5.75427 6.93769H30.2139ZM5.75427 6.93769C4.56547 7.83822 6.08099 6.40232 5.21066 6.39408L5.75427 6.93769ZM5.75427 6.93769C4.19208 8.05786 5.60602 6.83611 5.21066 6.39408L5.75427 6.93769ZM5.21066 6.39408C5.30401 5.97402 5.2793 5.683 5.21066 5.30412V6.39408ZM5.21066 6.39408C5.19968 6.13052 5.22165 5.88342 5.21066 5.30412V6.39408ZM5.21066 5.30412C5.62798 4.10983 4.53253 5.16684 5.75427 4.76051L5.21066 5.30412Z"
        stroke={theme.colors.text}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};
