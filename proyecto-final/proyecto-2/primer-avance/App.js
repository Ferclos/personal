import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Login from './view/Login'
import NavigationAdmin from './NavigationAdmin';

export default function App() {
  return (
    <NavigationAdmin/>
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

