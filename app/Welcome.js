import React from 'react';
import { StyleSheet, FlatList, Text, View, Dimensions } from 'react-native';
import Indicators from './Indicators';
import Slide from './Slide';

const Welcome = ({slides = []}) => {
  if(!slides || !slides.length) return null;

  return (
    <>
      <FlatList
        horizontal
        pagingEnabled
        data={slides}
        keyExtractor={(item) => item.key.toString()} 
        renderItem={({item}) => <Slide item={item}/>} 
      />
      <View style={styles.indicatorContainer}>
        <Indicators indicatorCount={slides.length} />
      </View>
      <Text style={[styles.button, styles.leftButton]}>Skip</Text>
      <Text style={[styles.button, styles.rightButton]}>Next</Text>
    </>
  )
};

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  indicatorContainer: {
    position: 'absolute',
    width,
    // backgroundColor: '#fff',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    fontSize: 18,
    color: 'white',
    letterSpacing: 2,
  },
  leftButton: {
    position: 'absolute',
    left: 10,
    bottom: 20,
  },
  rightButton: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  }
});

export default Welcome;