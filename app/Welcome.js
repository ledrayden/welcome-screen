import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import Slide from './Slide';

const Welcome = ({slides = []}) => {
  if(!slides || !slides.length) return null;

  return (
    <FlatList
      horizontal
      pagingEnabled
      data={slides}
      keyExtractor={(item) => item.key.toString()} 
      renderItem={({item}) => <Slide item={item}/>} 
    />
  )
};

const styles = StyleSheet.create({
  
});

export default Welcome;