import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Accordion } from '../../../components/molecules/Accordion';
import { Reminder } from '../../../components/organisms/Reminder';
import { AddButton } from '../../../components/atoms/AddButton';

import { initialReminder } from './helpers';
import { ReminderListProps } from './interfaces';
import { AddMoreContainer } from './styles';

export const ReminderList = (props: ReminderListProps) => {
  const { isAnswering } = props;
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [expandedReminder, setExpandedReminder] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function handleChange(id: number, newValue: Reminder) {
    const newReminders = [...reminders];
    const reminderIndex = newReminders.findIndex((q) => q.id === id);
    newReminders[reminderIndex] = newValue;
    setReminders(newReminders);
  }

  function addReminder() {
    const currentReminders = [...reminders];
    const newReminder = {
      ...initialReminder,
      id: currentReminders.length,
      title: 'Novo Lembrete'
    };

    setReminders([...currentReminders, newReminder] as Reminder[]);
    setExpandedReminder(currentReminders.length);
  }

  function removeReminder(id: number) {
    const currentReminders = [...reminders];
    const reminderIndex = currentReminders.findIndex((q) => q.id === id);
    currentReminders[reminderIndex].isActive = false;
    setReminders(currentReminders);
  }

  useEffect(() => {
    async function saveData() {
      try {
        const newReminders = JSON.stringify(reminders);
        await AsyncStorage.setItem('reminders', newReminders);
      } catch (e) {
        // todo: error reading value
      }
    }

    const unsubscribe = navigation.addListener('beforeRemove', saveData);
    return unsubscribe;
  }, [navigation, reminders]);

  useEffect(() => {
    async function getData() {
      try {
        const jsonValue = await AsyncStorage.getItem('reminders');
        if (jsonValue && jsonValue !== '[]')
          setReminders(JSON.parse(jsonValue));
        else {
          const firstReminder = JSON.stringify([initialReminder]);
          await AsyncStorage.setItem('reminders', firstReminder);
          setReminders([initialReminder]);
        }
      } catch (e) {
        // todo: error reading value
      }
    }

    getData();
  }, []);

  return (
    <>
      <Accordion
        expandedItem={expandedReminder}
        setExpandedItem={setExpandedReminder}
      >
        {reminders
          .filter((r) => r.isActive)
          .map((r) => (
            <Reminder
              {...r}
              key={`reminder-${r.id}`}
              isAnswering={isAnswering}
              handleChange={handleChange}
              onDelete={removeReminder}
            />
          ))}
      </Accordion>
      <AddMoreContainer>
        <AddButton handlePress={addReminder} />
      </AddMoreContainer>
    </>
  );
};
