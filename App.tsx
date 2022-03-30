import { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SummonerContext,
  SummonerProvider
} from './src/context/Summoner/SummonerContext';
import { StartupFirstStep } from './src/screens/Startup/FirstStep';
import { StartupSecondStep } from './src/screens/Startup/SecondStep';
import { StartupThirdStep } from './src/screens/Startup/ThirdStep';
import { UIProvider } from './src/context/UI/UIContext';
import { Homescreen } from './src/screens/Homescreen';
import { QuestionsScreen } from './src/screens/Questions';
import { RemindersScreen } from './src/screens/Reminders';
import { SummonerConfig } from './src/screens/SummonerConfig';

const lightTheme = {
  themeName: 'light',
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    secondary: '#808080',
    error: '#E03F3F'
  }
};

const darkTheme = {
  themeName: 'dark',
  colors: {
    background: '#000000',
    text: '#F2F2F2',
    secondary: '#808080',
    error: '#E03F3F'
  }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const { setServer, setSummonerName } = useContext(SummonerContext);

  const theme = isDark
    ? { ...darkTheme, setIsDark }
    : { ...lightTheme, setIsDark };

  useEffect(() => {
    async function checkSummonerAndSetNavigation() {
      try {
        const summoner = await AsyncStorage.getItem('summoner');

        if (summoner !== null) {
          const summ = JSON.parse(summoner) as {
            server: Region;
            summonerName: string;
          };
          setServer(summ.server);
          setSummonerName(summ.summonerName);
          setInitialRoute('Homescreen');
        } else {
          setInitialRoute('FirstStep');
        }
      } catch (error) {
        setInitialRoute('FirstStep');
        // todo: error reading value
      }
    }
    checkSummonerAndSetNavigation();
  }, []);

  if (!initialRoute) return null;

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <SummonerProvider>
          <StatusBar style={isDark ? 'light' : 'dark'} />

          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName={initialRoute as 'FirstStep' | 'Homescreen'}
            >
              <Stack.Screen
                name="Homescreen"
                component={Homescreen}
                options={{ animation: 'fade' }}
              />
              <Stack.Screen
                name="Questions"
                component={QuestionsScreen}
                options={{ animation: 'fade' }}
              />
              <Stack.Screen
                name="Reminders"
                component={RemindersScreen}
                options={{ animation: 'fade' }}
              />
              <Stack.Screen
                name="SummonerConfig"
                component={SummonerConfig}
                options={{ animation: 'fade' }}
              />
              <Stack.Screen name="FirstStep" component={StartupFirstStep} />
              <Stack.Screen
                name="SecondStep"
                component={StartupSecondStep}
                options={{ animation: 'fade' }}
              />
              <Stack.Screen
                name="ThirdStep"
                component={StartupThirdStep}
                options={{ animation: 'fade' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SummonerProvider>
      </UIProvider>
    </ThemeProvider>
  );
}
