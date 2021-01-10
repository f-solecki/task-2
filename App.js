import React from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='I am the button, press me!' onPress={() => Alert.alert("You pressed the button")} />
      <TouchableOpacity onPress={() => Alert.alert('You pressed the TouchableOpacity')}><Text>I am TouchableOpacity with Text inside, Press me!</Text></TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => Alert.alert('You pressed TouchableWithoutFeedback')}><Text>I am TouchableWithoutFeedback, Press me!</Text></TouchableWithoutFeedback>
      <Pressable onPress={() => Alert.alert('You pressed Pressable')}><Text>I am Pressable, Press me!</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

