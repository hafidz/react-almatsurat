import React from 'react';
import {Button} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from '@react-native-firebase/admob';
import {useEffect, useState} from 'react/cjs/react.development';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

export default function InterstitialAds() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
    });
    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }
  return (
    <Button
      title="Show Interstitial"
      onPress={() => {
        interstitial.show();
      }}
    />
  );
}

// export default function InterstitialAds() {
//   return (
//     <Button
//       title="Show Interstitial"
//       onPress={() => {
//         interstitial.show();
//       }}
//     />
//   );
// }

const styles = StyleSheet.create({});
