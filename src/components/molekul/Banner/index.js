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
  : 'ca-app-pub-4433334973731129/5430284217';

function App() {
  return (
    <BannerAd
      unitId={'ca-app-pub-4433334973731129/5430284217'}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}

export default function Banner() {
  return (
    <BannerAd
      unitId={'ca-app-pub-4433334973731129/5430284217'}
      size={BannerAdSize.FULL_BANNER}
    />
  );
}

const styles = StyleSheet.create({});
