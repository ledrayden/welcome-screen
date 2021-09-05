import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
