import React from 'react';
import { StyleSheet, View } from 'react-native';
import Titulo from './src/Titulo/';
import Formulario from './src/Formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Formulario/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a25aa6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
