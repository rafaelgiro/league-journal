import { useEffect, useState } from 'react';

import { Checkbox } from '../../atoms/Checkbox';
import { RadioButton } from '../../atoms/RadioButton';
import { Typography } from '../../atoms/Typography';
import { AccordionItem } from '../../molecules/Accordion';
import { QuestionAnswer } from './QuestionAnswer';

import { categories } from './helpers';
import { QuestionProps } from './interfaces';
import { CategoriesContainer, TimingContainer } from './styles';

export const Question = (props: QuestionProps) => {
  const {
    answer: initialValue,
    isAnswering,
    title: initialTitle,
    type,
    allyChampions,
    enemyChampions,
    id,
    isPostGame: initialPostgame,
    isPreGame: initialPregame,
    handleChange: onChange,
    onDelete,
    isNew,
    ...other
  } = props;
  const [isPreGame, setIsPreGame] = useState(initialPregame);
  const [isPostGame, setIsPostGame] = useState(initialPostgame);
  const [category, setCategory] = useState<Question['type']>(type);
  const [answer, setAnswer] = useState<any>(initialValue);
  const [title, setTitle] = useState(initialTitle);

  function handleChange(_: number, ans: any) {
    setAnswer(ans);
  }

  useEffect(() => {
    if (onChange)
      onChange(id, {
        id,
        answer,
        isPreGame,
        isPostGame,
        type: category,
        title,
        isActive: true,
        enemyChampions,
        allyChampions
      });
  }, [isPreGame, isPostGame, answer, title]);

  return (
    <AccordionItem
      title={title}
      setTitle={setTitle}
      isAnswering={isAnswering}
      type="question"
      onDelete={() => onDelete && onDelete(id)}
      isNew={isNew}
      {...other}
    >
      {!isAnswering && (
        <>
          <TimingContainer>
            <Typography variant="body-1">• Me pergunte no:</Typography>
            <Checkbox
              handlePress={setIsPreGame}
              isChecked={isPreGame}
              label="PRÉ-JOGO"
              style={{ marginHorizontal: 8, opacity: isPreGame ? 1 : 0.4 }}
            />
            <Checkbox
              handlePress={setIsPostGame}
              isChecked={isPostGame}
              label="PÓS-JOGO"
              style={{ opacity: isPostGame ? 1 : 0.4 }}
            />
          </TimingContainer>
          {/* <Typography variant="body-1">• Tipo da Resposta</Typography> */}
          <CategoriesContainer>
            {categories.map((c) => (
              <RadioButton
                key={c.key}
                label={c.label}
                isChecked={category === c.key}
                handlePress={() => setCategory(c.key)}
                name={c.key}
                style={{ opacity: category === c.key ? 1 : 0.4 }}
              />
            ))}
          </CategoriesContainer>
        </>
      )}
      <QuestionAnswer
        id={id}
        type={category}
        isAnswering={isAnswering}
        allyChampions={allyChampions}
        enemyChampions={enemyChampions}
        handleChange={handleChange}
        initialValue={initialValue}
      />
    </AccordionItem>
  );
};
