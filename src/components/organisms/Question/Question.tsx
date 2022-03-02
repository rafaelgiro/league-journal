import { useEffect, useState } from "react";
import { View } from "react-native";

import { Checkbox } from "../../atoms/Checkbox";
import { RadioButton } from "../../atoms/RadioButton";
import { Typography } from "../../atoms/Typography";
import { AccordionItem } from "../../molecules/Accordion";
import { QuestionAnswer } from "./QuestionAnswer";

import { categories } from "./helpers";
import { QuestionProps } from "./interfaces";
import { CategoriesContainer, TimingContainer } from "./styles";

export const Question = (props: QuestionProps) => {
  const {
    answer: initialValue,
    isAnswering,
    title,
    type,
    allyChampions,
    enemyChampions,
    id,
    ...other
  } = props;
  const [isPreGame, setIsPreGame] = useState(false);
  const [isPostGame, setIsPostGame] = useState(false);
  const [category, setCategory] = useState<Question["type"]>("text");
  const [answer, setAnswer] = useState<any>();

  function handleChange(id: string, value: any) {
    setAnswer(value);
  }

  useEffect(() => {
    console.log({ id, answer, isPreGame, isPostGame, category });
  }, [isPreGame, isPostGame, category, answer]);

  return (
    <AccordionItem title={title} {...other} isAnswering={isAnswering}>
      {!isAnswering && (
        <>
          <TimingContainer>
            <Typography variant="body-1">• Ask me on:</Typography>
            <Checkbox
              handlePress={setIsPreGame}
              isChecked={isPreGame}
              label="PRE-GAME"
              style={{ marginHorizontal: 8, opacity: isPreGame ? 1 : 0.4 }}
            />
            <Checkbox
              handlePress={setIsPostGame}
              isChecked={isPostGame}
              label="POST-GAME"
              style={{ opacity: isPostGame ? 1 : 0.4 }}
            />
          </TimingContainer>
          <Typography variant="body-1">• Type of answer</Typography>
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
        allyChampions={allyChampions}
        enemyChampions={enemyChampions}
        handleChange={handleChange}
      />
    </AccordionItem>
  );
};
