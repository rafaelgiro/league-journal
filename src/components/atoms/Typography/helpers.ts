type variant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "body-1"
  | "label"
  | "button"
  | "eyebrown";

interface styleI {
  fontSize: string;
  fontFamily: string;
  letterSpacing: string;
  textTransform?: string;
}

export const variants: Record<variant, styleI> = {
  "title-1": {
    fontSize: "32px",
    fontFamily: "PatrickHand_400Regular",
    letterSpacing: "0px",
  },
  "title-2": {
    fontSize: "20px",
    fontFamily: "PatrickHand_400Regular",
    letterSpacing: "1px",
  },
  "title-3": {
    fontSize: "16px",
    fontFamily: "PatrickHand_400Regular",
    letterSpacing: "1px",
  },
  button: {
    fontSize: "16px",
    fontFamily: "PatrickHand_400Regular",
    letterSpacing: "2.5px",
  },
  "body-1": {
    fontSize: "16px",
    fontFamily: "PatrickHand_400Regular",
    letterSpacing: "0",
  },
  label: {
    fontSize: "16px",
    fontFamily: "PatrickHand_400Regular",
    letterSpacing: "1px",
  },
  eyebrown: {
    fontSize: "12px",
    fontFamily: "PatrickHand_400Regular",
    letterSpacing: "4px",
    textTransform: "uppercase",
  },
};
