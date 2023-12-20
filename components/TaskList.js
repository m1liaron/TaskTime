import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { addHistory } from '../redux/historySlice';
import { v4 as uuidv4 } from 'uuid';
import Timer from './Timer';


export default function TaskList() {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const tasks = useSelector(state => state.tasks.tasks);
  const taskId = uuidv4()
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!value) {
      return null;
    }

    const newTask = {
      id: taskId,
      name: value,
      time: 0
    };

    dispatch(addTask(newTask));
    setValue('');

    const newHistoryTask = {
      id: uuidv4(),
      name: value,
      date: new Date()
    };

    dispatch(addHistory(newHistoryTask));
  }

  return (
    <SafeAreaView style={styles.container}>
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
        data={tasks}
        renderItem={({ item }) => <Task name={item.name}/>}
      />

      <Button
        title='Check your history'
        onPress={() => navigation.navigate('History')}
      />
    </SafeAreaView>
  );
}

  function Task({name}){
    return (
      <View style={styles.taskContainer}>
        <Text >{name}</Text>
        <Timer/>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:40
  }
});
