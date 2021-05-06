import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Image } from 'react-native';
import Scanner from './src/components/Scanner';
import { SafeAreaView } from 'react-native-safe-area-context';
import List from './src/components/List';

export default function App() {
  const [scannedData, updateScannedData] = useState([]);
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // console.info(JSON.parse(data));
    updateScannedData(scannedOrders => scannedOrders.concat(JSON.parse(data)));
  };

  const sendData = () => {
    //send
    updateScannedData([]);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('./logo.jpg')}></Image>
      <View style={styles.inner}>
        <Scanner handleBarCodeScanned={handleBarCodeScanned} scanned={scanned} setScanned={setScanned}></Scanner>
      </View>
      <Text>Zeskanowano:</Text>
      <ScrollView style={styles.scroll}>
        <List data={scannedData}></List>
      </ScrollView>
      <Button style={styles.sendButton} title={'Wyślij'} onPress={sendData} ></Button>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 30,
    height: 200,
    // marginBottom: 300
  },
  sendButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  scroll: {
    flexGrow: 1,
    maxHeight: 300,
  },
  logo: {
    flex: 1,
    width: 120,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    right: 0,
  }
});