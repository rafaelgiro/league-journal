import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Test } from "./src/screens/Test";
import styled from "@emotion/native";
import { Wrapper } from "./src/components/templates/Wrapper";

const lightTheme = {
  themeName: "light",
  colors: {
    background: "#FFFFFF",
    text: "#000000",
    secondary: "#808080",
  },
};

const darkTheme = {
  themeName: "dark",
  colors: {
    background: "#000000",
    text: "#FFFFFF",
    secondary: "#808080",
  },
};

// const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider
      theme={
        isDark ? { ...darkTheme, setIsDark } : { ...lightTheme, setIsDark }
      }
    >
      <StatusBar style={isDark ? "light" : "dark"} />
      {/* <NavigationContainer> */}
      {/* <Stack.Navigator> */}
      <Wrapper>
        <Test />
      </Wrapper>
      {/* </Stack.Navigator> */}
      {/* </NavigationContainer> */}
    </ThemeProvider>
  );
}
