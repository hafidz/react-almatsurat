import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-4433334973731129/4765909548';

function App() {
  return (
    <BannerAd
      unitId={'ca-app-pub-4433334973731129/4765909548'}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}

export default function BannerSetting() {
  return (
    <BannerAd
      unitId={'ca-app-pub-4433334973731129/4765909548'}
      size={BannerAdSize.FULL_BANNER}
    />
  );
}

const styles = StyleSheet.create({});
