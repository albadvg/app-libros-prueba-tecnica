import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.wrapper}>
      <Image
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/0083/4060/2985/files/tosswill_quarantinromance_2021_1024x1024.jpg?v=1622325463',
        }}
        style={styles.homeImg}
      />
      <Image
        source={require('../assets/img/biblio.png')}
        style={styles.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  homeImg: {
    flex: 1,
    height: '100%',
    marginRight: -450
  },
  title: {
    width: '100%',
    height: 120,
    position: 'absolute',
    margin: 'auto',
    bottom: 0,
  },
});
