import { useContext, useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Typography } from '../../atoms/Typography';
import { AddButton } from '../../atoms/AddButton';
import { Accordion } from '../../molecules/Accordion';
import { Question } from '../../organisms/Question';

import { MatchContext } from '../../../context/Match/MatchContext';
import { UIContext } from '../../../context/UI/UIContext';

import {
  defaultAllyChampions,
  defaultEnemyChampions,
  initialQuestion
} from './helpers';
import { QuestionListProps } from './interfaces';
import { ActionContainer, FinishButton } from './styles';

/**
 * The code is using this component to create new question
 * as well as to answer them. I think that a better approach
 * would be to use a different component for each of those so que can:
 *
 * todo: support deleted questions on match history
 * * the code already soft delete questions
 *
 */
export const QuestionList = (props: QuestionListProps) => {
  const { isAnswering, allyChampions, enemyChampions } = props;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [expandedQuestion, setExpandedQuestion] = useState(0);
  const { currentMatch, setCurrentMatch } = useContext(MatchContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const theme = useTheme();
  const { showError } = useContext(UIContext);
  const activeQuestions = questions.filter((q) => q.isActive);

  const answeringAction =
    expandedQuestion + 1 < activeQuestions.length ? 'next' : 'finish';
  const answeringButton = { next: 'PRÓXIMA PERGUNTA', finish: 'FINALIZAR' };

  function handleChange(id: number, newValue: Question) {
    const newQuestions = [...questions];
    const questionIndex = newQuestions.findIndex((q) => q.id === id);
    newQuestions[questionIndex] = newValue;
    setQuestions(newQuestions);
  }

  function addQuestion() {
    const currentQuestions = [...questions];
    const newQuestion = {
      ...initialQuestion,
      id: currentQuestions.length,
      title: '',
      type: 'yesno',
      isNew: true
    };

    setQuestions([...currentQuestions, newQuestion] as Question[]);
    setExpandedQuestion(currentQuestions.filter((q) => q.isActive).length);
  }

  function removeQuestion(id: number) {
    const currentQuestions = [...questions];
    const questionIndex = currentQuestions.findIndex((q) => q.id === id);
    currentQuestions[questionIndex].isActive = false;
    setQuestions(currentQuestions);
  }

  async function answeringBtnPress() {
    if (answeringAction === 'next') setExpandedQuestion((c) => c + 1);
    else {
      const filteredQuestions = questions
        .map((q) => ({
          ...q,
          allyChampions: undefined,
          enemyChampions: undefined
        }))
        .filter((q) => q.isActive);

      const completedMatch = {
        ...currentMatch,
        questions: filteredQuestions,
        date: new Date().toISOString()
      };

      try {
        const jsonValue = await AsyncStorage.getItem('matches');
        if (jsonValue && jsonValue !== '[]') {
          const matches = JSON.parse(jsonValue);
          matches.unshift(completedMatch);
          await AsyncStorage.setItem('matches', JSON.stringify(matches));
        } else {
          await AsyncStorage.setItem(
            'matches',
            JSON.stringify([completedMatch])
          );
        }
        setCurrentMatch(undefined);
        navigation.navigate('GoodLuck');
      } catch (_) {
        showError('Erro ao salvar a partida');
      }
    }
  }

  useEffect(() => {
    async function saveData() {
      if (!isAnswering) {
        try {
          const newQuestions = JSON.stringify(
            questions.map((q) => ({ ...q, answer: undefined, isNew: false }))
          );
          await AsyncStorage.setItem('questions', newQuestions);
        } catch (_) {
          showError('Erro ao salvar as perguntas');
        }
      }
    }

    navigation.addListener('blur', saveData);
    navigation.addListener('beforeRemove', saveData);

    const unsubscribe = () => {
      navigation.removeListener('blur', saveData);
      navigation.removeListener('beforeRemove', saveData);
    };

    return unsubscribe;
  }, [navigation, questions, isAnswering]);

  useEffect(() => {
    async function getData() {
      try {
        const jsonValue = await AsyncStorage.getItem('questions');
        if (jsonValue && jsonValue !== '[]')
          setQuestions(JSON.parse(jsonValue));
        else {
          const firstQuestion = JSON.stringify([initialQuestion]);
          await AsyncStorage.setItem('questions', firstQuestion);
          setQuestions([initialQuestion]);
        }
      } catch (_) {
        showError('Erro ao carregar as perguntas');
      }
    }

    getData();
  }, []);

  return (
    <>
      <Accordion
        expandedItem={expandedQuestion}
        setExpandedItem={setExpandedQuestion}
      >
        {activeQuestions.map((q) => (
          <Question
            {...q}
            key={`question-${q.id}`}
            isAnswering={isAnswering}
            handleChange={handleChange}
            onDelete={removeQuestion}
            allyChampions={allyChampions || defaultAllyChampions}
            enemyChampions={enemyChampions || defaultEnemyChampions}
          />
        ))}
      </Accordion>

      <ActionContainer>
        {!isAnswering ? (
          <AddButton handlePress={addQuestion} />
        ) : (
          <FinishButton onPress={answeringBtnPress}>
            <Typography
              variant="title-3"
              style={{ color: theme.colors.background }}
            >
              {answeringButton[answeringAction]}
            </Typography>
          </FinishButton>
        )}
      </ActionContainer>
    </>
  );
};
