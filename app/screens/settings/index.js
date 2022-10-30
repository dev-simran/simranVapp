import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
export default function Settings() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.mainBack}
        source={require('../../assets/mainBackground.jpg')}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>Settings</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.card}>
            <Text style={styles.miniTitle}>Temprature</Text>
            <View style={styles.wrapper}>
              <View style={styles.sec1}>
                <Text>°C</Text>
              </View>
              <View style={styles.sec2}>
                <Text>°F</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.miniTitle}>Wind speed</Text>
            <View style={styles.wrapper}>
              <View style={styles.sec1}>
                <Text>m/s</Text>
              </View>
              <View style={styles.sec2}>
                <Text>km/h</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.miniTitle}>Pressure</Text>
            <View style={styles.wrapper}>
              <View style={styles.sec1}>
                <Text>hPa</Text>
              </View>
              <View style={styles.sec2}>
                <Text>inHg</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.miniTitle}>Precipitation</Text>
            <View style={styles.wrapper}>
              <View style={styles.sec1}>
                <Text>mm</Text>
              </View>
              <View style={styles.sec2}>
                <Text>in</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.miniTitle}>Distance</Text>
            <View style={styles.wrapper}>
              <View style={styles.sec1}>
                <Text>km</Text>
              </View>
              <View style={styles.sec2}>
                <Text>mi</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.miniTitle}>Time Format</Text>
            <View style={styles.wrapper}>
              <View style={styles.sec1}>
                <Text>24</Text>
              </View>
              <View style={styles.sec2}>
                <Text>12</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
