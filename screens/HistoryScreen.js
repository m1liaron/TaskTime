import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

export default function HistoryScreen() {
  const history = useSelector(state => state.history.history);

  return (
    <View style={styles.container}>
      <Text>HistoryScreen</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
