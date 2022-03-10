import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SummonerProvider } from "./src/context/Summoner/SummonerContext";
import { StartupFirstStep } from "./src/screens/Startup/FirstStep";
import { StartupSecondStep } from "./src/screens/Startup/SecondStep";
import { StartupThirdStep } from "./src/screens/Startup/ThirdStep";
import { UIProvider } from "./src/context/UI/UIContext";
import { Homescreen } from "./src/screens/Homescreen";

const lightTheme = {
  themeName: "light",
  colors: {
    background: "#FFFFFF",
    text: "#000000",
    secondary: "#808080",
    error: "#E03F3F",
  },
};

const darkTheme = {
  themeName: "dark",
  colors: {
    background: "#000000",
    text: "#F2F2F2",
    secondary: "#808080",
    error: "#E03F3F",
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  const theme = isDark
    ? { ...darkTheme, setIsDark }
    : { ...lightTheme, setIsDark };

  useEffect(() => {
    async function checkSummonerAndSetNavigation() {
      try {
        const summoner = await AsyncStorage.getItem("summoner");

        console.log(summoner);

        if (summoner !== null) {
          setInitialRoute("Homescreen");
        } else {
          setInitialRoute("FirstStep");
        }
      } catch (error) {
        setInitialRoute("FirstStep");
        // error reading value
      }
    }
    checkSummonerAndSetNavigation();
  }, []);

  console.log(initialRoute);

  if (!initialRoute) return null;

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <SummonerProvider>
          <StatusBar style={isDark ? "light" : "dark"} />

          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName={initialRoute as "FirstStep" | "Homescreen"}
            >
              <Stack.Screen
                name="Homescreen"
                component={Homescreen}
                options={{ animation: "fade" }}
              />
              <Stack.Screen name="FirstStep" component={StartupFirstStep} />
              <Stack.Screen
                name="SecondStep"
                component={StartupSecondStep}
                options={{ animation: "fade" }}
              />
              <Stack.Screen
                name="ThirdStep"
                component={StartupThirdStep}
                options={{ animation: "fade" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SummonerProvider>
      </UIProvider>
    </ThemeProvider>
  );
}
