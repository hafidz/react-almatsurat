import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import {Gap, List} from '../../components';
import {JSONLIST} from '../../assets';
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from '@react-native-firebase/admob';

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-3940256099942544/6300978111';

function App() {
  return (
    <BannerAd
      unitId={TestIds.REWARDED}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}

const Login = ({navigation}) => {
  return (
    <View style={styles.conts}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.page}>
            {JSONLIST.data.map(item => {
              return (
                <List
                  key={item.id}
                  ayat={item.ayat}
                  arti={item.arti}
                  title={item.title}
                />
              );
            })}
            <Gap height={8} />
            <Gap height={8} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <View>
        <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: StatusBar.currentHeight,
  },
  ScrollView: {
    fontSize: 40,
  },
  conts: {
    justifyContent: 'space-between',
    flex: 1,
  },
});
