import React, { useState } from 'react';
import {  View, AppRegistry, StyleSheet,Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { useSelector } from 'react-redux';


export default function MyTimer() {
    const [stopwatchStart, setStopwatchStart] = useState(false);
    const [stopwatchReset, setStopwatchReset] = useState(false);
    const tasks = useSelector(state => state.tasks.tasks);

  const toggleStopwatch = () => {
    setStopwatchStart(!stopwatchStart);
    setStopwatchReset(false);
  };

  const resetStopwatch = () => {
    setStopwatchStart(false);
    setStopwatchReset(true);
  };

  return (
    <View>
        <Stopwatch
            laps
            start={stopwatchStart}
            reset={stopwatchReset}
            options={options}
        />
        <TouchableOpacity style={styles.button} onPress={toggleStopwatch}>
            <Text style={styles.buttonText}>{!stopwatchStart ? 'Start' : 'Stop'}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={resetStopwatch}>
            <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity> */}
    </View>
  );
}


const options = {
    container: {
      backgroundColor: '#000',
      padding: 5,
      borderRadius: 5,
      alignItems: 'center',
      width: 100,
    },
    text: {
      fontSize: 20,
      color: '#FFF',
    },
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: 2,
      padding: 2,
      backgroundColor: '#007BFF',
    },
    buttonText: {
      fontSize: 20,
      color: '#FFF',
    },
  });