import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import dateFormat, { masks } from "dateformat";

export default function HistoryScreen() {
  const history = useSelector(state => state.history.history);

  return (
    <SafeAreaView style={styles.container}>
      <Text>HistoryScreen</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <HistoryTask name={item.name} date={item.date}/>}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


function HistoryTask({name, date}) {
  return (
     <View style={styles.taskContainer}>
      <Text>{name}</Text>
      <Text>{dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</Text>
     </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskContainer:{
    padding:10
  }
});
