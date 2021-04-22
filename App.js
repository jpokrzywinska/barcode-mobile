import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Scanner from './src/components/Scanner';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <Text>Skaner FRONTWIT</Text>
        <View style={styles.inner}>
          <Scanner></Scanner>
        </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inner: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 30,
    height: 300,
    marginBottom: 400
  },
});