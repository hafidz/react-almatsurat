import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-4433334973731129/5561892560';

function App() {
  return (
    <BannerAd
      unitId={'ca-app-pub-4433334973731129/5561892560'}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}

export default function BannerPagi() {
  return (
    <BannerAd
      unitId={'ca-app-pub-4433334973731129/5561892560'}
      size={BannerAdSize.FULL_BANNER}
    />
  );
}

const styles = StyleSheet.create({});
