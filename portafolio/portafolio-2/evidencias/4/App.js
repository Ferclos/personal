import React from 'react';
import { StyleSheet, View } from 'react-native';
import TableComponent from "./components/TableComponent";

export default function App() {
  return (
    <View style={styles.container}>
    <TableComponent />
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
