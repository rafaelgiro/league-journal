import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    themeName: string;
    colors: {
      background: string;
      text: string;
      secondary: string;
    };
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  }
}
