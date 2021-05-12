import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Scanner({ handleBarCodeScanned, scanned, setScanned }) {
  const [hasPermission, setHasPermission] = useState(null);


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to  camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <BarCodeScanner style={scanned ? styles.invisibleCamera : styles.visibleCamera}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      <View>
        {scanned && <Button title={'Skanuj'} onPress={() =>  setScanned(false)} />}
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
  invisibleCamera: {
    position: 'relative',
    height: '100%',
    // opacity: 1,
  },
  visibleCamera: {
    position: 'relative',
    height: '100%',
    // opacity: 0.1
  }
});