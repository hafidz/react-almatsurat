import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.titile_top}>Al Matsurat</Text>
      </View>
      <View>
        <Button
          type=""
          title="Pagi"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type=""
          title="Sore"
          onPress={() => navigation.replace('Login')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Setting"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {padding: 40, justifyContent: 'space-between', flex: 1},
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
});
