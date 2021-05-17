import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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

export default function Banner() {
  return <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />;
}

const styles = StyleSheet.create({});
