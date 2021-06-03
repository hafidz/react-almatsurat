import React from 'react';
import {ScrollView, Image, StyleSheet, Text, View} from 'react-native';
import {IcActive, IcHelp, IcRate} from '../../assets';
import {Gap, BannerSetting} from '../../components';

export default function Setting({navigation}) {
  return (
    <View style={styles.page}>
      <ScrollView>
        <Text style={styles.content}>
          Al-Ma’tsurat merupakan kumpulan dzikir-dzikir pagi dan petang yang
          disatukan. Di dalamnya terdapat beberapa potongan ayat-ayat Al-Qur’an
          dan do’a-do’a harian.
        </Text>
        <Text style={styles.content}>
          Berikut manfaat dan keutamaan Al-Ma’tsurat :
        </Text>
        <Text style={styles.content}>1. Disempurnakan Nikmat</Text>
        <Text style={styles.content_child}>
          Dalam Al-Ma’tsurat, terdapat surat Al-Falaq dan An-Nass. Jika pada
          pagi dan sore hari kedua surat itu dibaca, Allah akan senantiasa
          mencukupkan segala kebutuhan di dunia, hingga ia takkan merasa
          kekurangan selama hidupnya.
        </Text>
        <Text style={styles.content}>
          2. Dicukupi Segala Kebutuhan di Dunia
        </Text>
        <Text style={styles.content_child}>
          Dalam Al-Ma’tsurat, terdapat surat Al-Falaq dan An-Nass. Jika pada
          pagi dan sore hari kedua surat itu dibaca, Allah akan senantiasa
          mencukupkan segala kebutuhan di dunia, hingga ia takkan merasa
          kekurangan selama hidupnya.
        </Text>
        <Text style={styles.content}>
          3. Sebagai Tanda Syukur kepada Allah Swt
        </Text>
        <Text style={styles.content_child}>
          Telah diriwayatkan oleh Abu Dawud, Nabi bersabda, jika seorang muslim
          membaca “Ashbahna (Amsaina) wa ashbahal (amsal) mulku lillah
          walhamdulillah…” maka dia sejatinya bersyukur untuk kehidupan
          malamnya.
        </Text>
        <Text style={styles.content}>
          4. Rumah Terlindung dari Gangguan Setan
        </Text>
        <Text style={styles.content_child}>
          Terdapat 10 ayat surat Al-Baqoroh di dalam Al-Ma’tsurat. Lima ayat
          pertama, ayat kursi, dua ayat setelah ayat kursi, dan tiga ayat
          terakhir dari surat Al-Baqoroh. Barang siapa membaca ayat tersebut di
          dalam rumah, setan takkan mampu masuk ke dalam rumah tersebut sampai
          esok harinya.
        </Text>
        <Text style={styles.content}>5. Mendapat Keridhoan dari allah Swt</Text>
        <Text style={styles.content_child}>
          Allah Swt akan memberikan keridhoan kepada siapapun yang membaca
          ‘Rodhitubillahi Robba..’ atas semua pekerjaan yang dilakukannya. Hal
          ini berdasarkan hadits Nabi yang diriwayatkan oleh Turmudzi.
        </Text>
        <Text style={styles.content_child}>
          Terdapat 10 ayat surat Al-Baqoroh di dalam Al-Ma’tsurat. Lima ayat
          pertama, ayat kursi, dua ayat setelah ayat kursi, dan tiga ayat
          terakhir dari surat Al-Baqoroh. Barang siapa membaca ayat tersebut di
          dalam rumah, setan takkan mampu masuk ke dalam rumah tersebut sampai
          esok harinya.
        </Text>
        <Text style={styles.content}>6. Mendapat Pahala Lebih Banyak</Text>
        <Text style={styles.content_child}>
          Hadits Nabi yang diriwayatkan oleh Muslim menerangkan, jika membaca
          “Subhanallahu wabihamdihi..” sebanyak tiga kali, maka pahalanya akan
          lebih berat daripada membacanya sekali saja.
        </Text>
        <Text style={styles.content}>
          7. Terhindar dari Segala Bahaya yang Dapat Mengancam
        </Text>
        <Text style={styles.content_child}>
          Perkataan Nabi yang diriwayatkan oleh Abu Turmudzi menjelaskan bahwa
          jika seorang muslim membaca ‘Bismillahilladzi laa yadzurru…’ sebanyak
          tiga kali pada pagi dan sore hari, akan dijaga oleh Alah Swt. dari
          segala bahaya yang menghampiri.
        </Text>
        <Text style={styles.content}>
          Terima kasih sudah menggunakan applikasi ini, semoga bermanfaat.
        </Text>
      </ScrollView>
      <BannerSetting />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flex: 1,
  },
  content: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Nunito-Regular',
    textAlign: 'justify',
    padding: 16,
    backgroundColor: '#EDFCFD',
  },
  content_child: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Nunito-ExtraLight',
    textAlign: 'justify',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#EDFCFD',
  },
});
