import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions } from 'react-native';

const Welcome = ({slides = []}) => {
  if(!slides || !slides.length) return null;

  return (
    <FlatList 
      data={slides}
      keyExtractor={(item) => item.key.toString()} 
      renderItem={({item}) => (
        <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
          <Text>{item.title}</Text>
          <Text>{item.desc}</Text>
        </View>
      )} 
    />
  )
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  slide: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;