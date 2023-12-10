import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function TaskList() {
  const navigation = useNavigation();
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if(!value){
      return null;
    }
    const newTask = {
      name: value,
      key: Math.random().toString(),
    };
    setTasks([...tasks, newTask]);
    setValue('')
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
          onPress={addTask}
        />
      </View>
      
      <FlatList
        style={styles.taskContainer}
        data={tasks}
        renderItem={({item}) => <Text>{item.name}</Text>}
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
  taskContainer:{
    padding:50
  }
});