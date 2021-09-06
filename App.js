import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Welcome from './app/Welcome';

export default function App() {
  const slides = [
    {
      key: 1,
      title: 'Welcome One',
      desc: 'Welcome Screen One Description!',
      backgroundColor: 'red'
    },
    {
      key: 2,
      title: 'Welcome Two',
      desc: 'Welcome Screen Two Description!',
      backgroundColor: 'blue'
    },
    {
      key: 3,
      title: 'Welcome Three',
      desc: 'Welcome Screen Three Description!',
      backgroundColor: 'green'
    }
  ];
  return <>
    <StatusBar hidden />
    <Welcome slides={slides} />
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
