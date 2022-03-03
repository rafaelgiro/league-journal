import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Accordion } from "../../../components/molecules/Accordion";
import { Question } from "../../../components/organisms/Question";
import { StartupStep } from "../../../components/templates/StartupStep";
import { initialQuestion } from "./helpers";
import { Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const StartupSecondStep = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    async function getData() {
      try {
        const jsonValue = await AsyncStorage.getItem("questions");
        if (jsonValue) setQuestions(JSON.parse(jsonValue));
        else {
          const firstQuestion = JSON.stringify([initialQuestion]);
          await AsyncStorage.setItem("questions", firstQuestion);
          setQuestions([initialQuestion]);
        }
      } catch (e) {
        // error reading value
      }
    }

    getData();
  }, []);

  function handleChange(id: number, newValue: Question) {
    console.log("rodou aqui");
    const newQuestions = [...questions];
    const questionIndex = newQuestions.findIndex((q) => q.id === id);
    newQuestions[questionIndex] = newValue;
    setQuestions(newQuestions);
  }

  async function debug() {
    try {
      await AsyncStorage.removeItem("questions");
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    async function saveData() {
      try {
        const newQuestions = JSON.stringify(questions);
        await AsyncStorage.setItem("questions", newQuestions);
      } catch (e) {
        // error reading value
      }
    }

    const unsubscribe = navigation.addListener("beforeRemove", saveData);
    return unsubscribe;
  }, [navigation, questions]);

  return (
    <StartupStep step={1}>
      <Accordion>
        {questions
          .filter((q) => q.isActive)
          .map((q) => (
            <Question
              {...q}
              key={`question-${q.id}`}
              isAnswering={false}
              handleChange={handleChange}
            />
          ))}
      </Accordion>
      <Button onPress={debug} title="Debug" />
    </StartupStep>
  );
};
