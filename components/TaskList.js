import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { addHistory } from '../redux/historySlice';
import { v4 as uuidv4 } from 'uuid';

export default function TaskList() {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!value) {
      return null;
    }

    const newTask = {
      name: value,
      key: Math.random().toString(),
    };

    dispatch(addTask(newTask));
    setValue('');

    // Dispatch the addHistory action with the newHistoryTask
    const newHistoryTask = {
      id: uuidv4(),
      name: value,
      time: Date.now()
    };

    dispatch(addHistory(newHistoryTask));
  }

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
        />
        <Button
          title='Add'
          onPress={handleAddTask}
        />
      </View>
      
      <FlatList
        style={styles.taskContainer}
        data={tasks}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />

      <Button
        title='Check your history'
        onPress={() => navigation.navigate('History')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  taskContainer: {
    padding: 50,
  },
});
