import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Link = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  container: type => ({
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 25,
    fontFamily: 'Nunito-Light',
    textAlign: 'center',
    color: '#0BCAD4',
    // color: type === 'secondary' ? '#112340' : 'white',
  }),
});
