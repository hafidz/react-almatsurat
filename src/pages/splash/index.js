import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AbcLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Image source={AbcLogo} style={styles.image} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDFCFD',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 50 / 2,
  },
});
