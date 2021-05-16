import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IcActive, IcHelp, IcRate} from '../../assets';
import {Link, Gap} from '../../components';

export default function Setting({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <IcRate style={styles.logo} />
        <Link
          type="secondary"
          title="Beri Rating"
          onPress={() => navigation.replace('GetStarted')}
        />
      </View>
      <Gap height={16} />
      <View style={styles.container}>
        <IcHelp style={styles.logo} />
        <Link
          type="secondary"
          title="Info & Privasi"
          onPress={() => navigation.replace('GetStarted')}
        />
      </View>
      <Gap height={16} />
      <View style={styles.container}>
        <IcActive style={styles.logo} />
        <Link
          type="secondary"
          title="Kontak"
          onPress={() => navigation.replace('GetStarted')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 46,
    height: 46,
    marginRight: 12,
    borderRadius: 46 / 2,
  },
});
