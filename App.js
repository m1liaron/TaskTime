import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';import { StatusBar } from 'expo-status-bar';
import {Provider} from 'react-redux';
import store from './redux/store';
import { StyleSheet, Text, View } from 'react-native';
import TaskScreen from './screens/TaskScreen'
import HistoryScreen from './screens/HistoryScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='Task' component={TaskScreen}/>
              <Stack.Screen name='History' component={HistoryScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
