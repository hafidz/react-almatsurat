import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AbcLogo, ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <Image source={AbcLogo} style={styles.image} />
      </View>
      <View>
        <Button
          type=""
          title="Pagi"
          onPress={() => navigation.navigate('Pagi')}
        />
        <Gap height={16} />
        <Button
          type=""
          title="Sore"
          onPress={() => navigation.navigate('Sore')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Info"
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#EDFCFD',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
  titile_top: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
  },
  image: {
    width: 310,
    height: 300,
    textAlign: 'center',
    borderRadius: 50 / 2,
  },
});
