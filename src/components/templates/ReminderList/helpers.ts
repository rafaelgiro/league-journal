import { ReminderProps } from '../../organisms/Reminder/interfaces';

export const initialReminder: Omit<ReminderProps, 'isAnswering'> = {
  id: 0,
  isActive: true,
  title: '3 tropas inimigas perto da minha torre congelam a rota',
  handleChange: () => {},
  isPreGame: true,
  isPostGame: false
};
