import { ReminderList } from '../../components/templates/ReminderList';
import { Wrapper } from '../../components/templates/Wrapper';

export const RemindersScreen = () => {
  return (
    <Wrapper backButton>
      <ReminderList isAnswering={false} />
    </Wrapper>
  );
};
