import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import {BannerPagi, Gap, List} from '../../components';
import {JSONLISTPagi} from '../../assets';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

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

const Pagi = ({navigation}) => {
  return (
    <View style={styles.conts}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.page}>
            <Gap height={8} />
            {JSONLISTPagi.data.map(item => {
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
            <BannerPagi />
          </View>
        </ScrollView>
      </SafeAreaView>
      <View>
        <BannerPagi />
      </View>
    </View>
  );
};

export default Pagi;

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
