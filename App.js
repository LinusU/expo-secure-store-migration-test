import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import {getItemAsync, setItemAsync} from 'expo-secure-store';

export default function App() {
  const handleWrite = async () => {
    const value = Math.random().toFixed(6).slice(-6);
    await setItemAsync('session-token', value);
    Alert.alert(`Value set to: ${value}`);
  };

  const handleRead = async () => {
    const value = await getItemAsync('session-token');
    Alert.alert(`The value was: ${value}`);
  };

  return (
    <View style={styles.container}>
      <Button title="Write value" onPress={handleWrite} />
      <Button title="Read value" onPress={handleRead} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
