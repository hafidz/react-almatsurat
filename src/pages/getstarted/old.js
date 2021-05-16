import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <ImageBackground source={ILGetStarted} style={styles.page}>
          <View>
            <ILLogo />
            <Text style={styles.title}>
              أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ، مِنَ الشَّيْطَانِ
              الرَّجِيمِ، مِنْ هَمْزِهِ، وَنَفْخِهِ، وَنَفْثِهِ
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ، مِنَ الشَّيْطَانِ
              الرَّجِيمِ، مِنْ هَمْزِهِ، وَنَفْخِهِ، وَنَفْثِهِ
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ، مِنَ الشَّيْطَانِ
              الرَّجِيمِ، مِنْ هَمْزِهِ، وَنَفْخِهِ، وَنَفْثِهِ
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ، مِنَ الشَّيْطَانِ
              الرَّجِيمِ، مِنْ هَمْزِهِ، وَنَفْخِهِ، وَنَفْثِهِ
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ، مِنَ الشَّيْطَانِ
              الرَّجِيمِ، مِنْ هَمْزِهِ، وَنَفْخِهِ، وَنَفْثِهِ
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ، مِنَ الشَّيْطَانِ
              الرَّجِيمِ، مِنْ هَمْزِهِ، وَنَفْخِهِ، وَنَفْثِهِ
            </Text>
          </View>
          <View>
            <Button
              type=""
              title="Get Started"
              onPress={() => navigation.navigate('Register')}
            />
            <Gap height={16} />
            <Button
              type="secondary"
              title="Sign In"
              onPress={() => navigation.replace('Login')}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {padding: 40, justifyContent: 'space-between', flex: 1},
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  ScrollView: {
    fontSize: 40,
  },
});
