import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import ArrowIcon from 'react-native-vector-icons/Ionicons';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import SunIcon from 'react-native-vector-icons/Fontisto';
export default function Add({navigation}) {
  const [number, onChangeNumber] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.mainBack}
        source={require('../../assets/mainBackground.jpg')}>
        <View style={styles.header}>
          <View style={styles.sec1}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.navigate('Home')}>
              <ArrowIcon name="arrow-back" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.sec2}>
            <Text style={styles.screenTitle}>Manage Cities</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.seachSection}>
            <View style={styles.seachView}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter City Name"
              />
            </View>
            <View style={styles.searchIconSec}>
              <SearchIcon name="search" size={30} color="#FF9300" />
            </View>
          </View>
          <View style={styles.citySection}>
            <Text style={styles.cityTitle}>Chandigarh</Text>
            <View style={styles.weatherSec}>
              <View style={styles.wrapper}>
                <SunIcon name="day-sunny" size={28} color="#fff" />
                <Text style={styles.subTitle}>Clear</Text>
              </View>
              <Text style={styles.subTitle}>38/27</Text>
            </View>
          </View>
          <View style={styles.citySection}>
          <Text style={styles.cityTitle}>Mohali</Text>
            <View style={styles.weatherSec}>
              <View style={styles.wrapper}>
                <SunIcon name="day-sunny" size={28} color="#fff" />
                <Text style={styles.subTitle}>Clear</Text>
              </View>
              <Text style={styles.subTitle}>38/27</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
