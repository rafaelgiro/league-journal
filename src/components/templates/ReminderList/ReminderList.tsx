import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Accordion } from '../../../components/molecules/Accordion';
import { Reminder } from '../../../components/organisms/Reminder';
import { AddButton } from '../../../components/atoms/AddButton';
import { UIContext } from '../../../context/UI/UIContext';

import { initialReminder } from './helpers';
import { ReminderListProps } from './interfaces';
import { AddMoreContainer } from './styles';

export const ReminderList = (props: ReminderListProps) => {
  const { isAnswering } = props;
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [expandedReminder, setExpandedReminder] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { showError } = useContext(UIContext);

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
      title: '',
      isNew: true
    };

    setReminders([...currentReminders, newReminder] as Reminder[]);
    setExpandedReminder(currentReminders.filter((r) => r.isActive).length);
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
        const newReminders = JSON.stringify(
          reminders.map((r) => ({ ...r, isNew: false }))
        );
        await AsyncStorage.setItem('reminders', newReminders);
      } catch (_) {
        showError('Erro ao salvar os lembretes');
      }
    }

    navigation.addListener('blur', saveData);
    navigation.addListener('beforeRemove', saveData);

    const unsubscribe = () => {
      navigation.removeListener('blur', saveData);
      navigation.removeListener('beforeRemove', saveData);
    };

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
      } catch (_) {
        showError('Erro ao carregar os lembretes');
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
