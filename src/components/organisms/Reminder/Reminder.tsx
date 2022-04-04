import { useEffect, useState } from 'react';

import { Checkbox } from '../../atoms/Checkbox';
import { Typography } from '../../atoms/Typography';
import { AccordionItem } from '../../molecules/Accordion';

import { ReminderProps } from './interfaces';
import { TimingContainer } from '../Question/styles';

export const Reminder = (props: ReminderProps) => {
  const {
    isAnswering,
    title: initialTitle,
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
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    if (onChange)
      onChange(id, {
        id,
        isPreGame,
        isPostGame,
        title,
        isActive: true
      });
  }, [isPreGame, isPostGame, title]);

  return (
    <AccordionItem
      title={title}
      setTitle={setTitle}
      isAnswering={isAnswering}
      type="reminder"
      onDelete={() => onDelete && onDelete(id)}
      isNew={isNew}
      {...other}
    >
      {!isAnswering && (
        <TimingContainer>
          <Typography variant="body-1">• Me lembre no:</Typography>
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
      )}
    </AccordionItem>
  );
};
