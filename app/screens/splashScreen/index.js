import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
export default function Splash() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.mainBg}
        source={require('../../assets/mainBackground.jpg')}>
        <Image
          style={styles.splashLogo}
          tintColor={'#faae12'}
          source={require('../../assets/splashIcon.png')}
        />
      </ImageBackground>
    </View>
  );
}
