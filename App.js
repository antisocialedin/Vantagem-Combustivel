import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import Titulo from './src/Titulo/';
import Formulario from './src/Formulario';

export default function App() {
  return (
      <ScrollView style={styles.container}>
        <Titulo/>
        <Formulario/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    paddingTop: 50,
  },
});

